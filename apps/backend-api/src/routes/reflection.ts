import { Router } from 'express';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { generateAIReflection } from '../lib/ai';

const router = Router();
const prisma = new PrismaClient();

// Input validation schema
const reflectionInputSchema = z.object({
  text: z.string()
    .min(10, 'Reflection must be at least 10 characters long')
    .max(1000, 'Reflection cannot exceed 1000 characters')
    .trim(),
  chapterId: z.string().optional(),
  verseId: z.string().optional(),
});

// Error response interface
interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// Success response interface
interface SuccessResponse<T> {
  data: T;
  meta?: {
    processingTime?: number;
    [key: string]: unknown;
  };
}

// Helper function to create error response
const createErrorResponse = (code: string, message: string, details?: unknown): ErrorResponse => ({
  error: {
    code,
    message,
    details,
  },
});

// Helper function to create success response
const createSuccessResponse = <T>(data: T, meta?: Record<string, unknown>): SuccessResponse<T> => ({
  data,
  ...(meta && { meta }),
});

router.post('/', async (req, res) => {
  const startTime = Date.now();
  
  try {
    console.log('Received reflection request:', {
      body: req.body,
      headers: req.headers,
    });

    // Validate input
    const validatedInput = reflectionInputSchema.parse(req.body);
    console.log('Validated input:', validatedInput);
    
    // Generate AI reflection
    console.log('Generating AI reflection...');
    const aiResponse = await generateAIReflection(validatedInput.text);
    console.log('AI response received:', aiResponse);
    
    // Create reflection in database
    console.log('Creating reflection in database...');
    const reflection = await prisma.reflection.create({
      data: {
        text: validatedInput.text,
        aiResponse,
        guidance: aiResponse, // Use the actual AI response
        chapterId: validatedInput.chapterId,
        verseId: validatedInput.verseId,
      },
    });
    console.log('Reflection created:', reflection);

    // Calculate processing time
    const processingTime = Date.now() - startTime;

    // Return success response
    return res.json(createSuccessResponse(reflection, { processingTime }));
    
  } catch (error) {
    console.error('Reflection processing error:', {
      error,
      stack: error instanceof Error ? error.stack : undefined,
      body: req.body,
    });
    
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return res.status(400).json(
        createErrorResponse(
          'VALIDATION_ERROR',
          'Invalid input data',
          error.errors
        )
      );
    }
    
    if (error instanceof Error) {
      // Handle other errors
      return res.status(500).json(
        createErrorResponse(
          'INTERNAL_ERROR',
          'An error occurred while processing your reflection',
          { 
            message: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
          }
        )
      );
    }
    
    // Handle unknown errors
    return res.status(500).json(
      createErrorResponse(
        'UNKNOWN_ERROR',
        'An unexpected error occurred'
      )
    );
  }
});

export default router; 