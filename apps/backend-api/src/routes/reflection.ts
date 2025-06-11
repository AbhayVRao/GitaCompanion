import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { generateAIReflection } from '../lib/ai';

const router = Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const { userId, text } = req.body;

    if (!userId || !text) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate AI reflection
    const aiResponse = await generateAIReflection(text);

    // Save reflection to database
    const reflection = await prisma.reflection.create({
      data: {
        userId,
        rawText: text,
        aiResponse,
      },
    });

    res.json(reflection);
  } catch (error) {
    console.error('Error creating reflection:', error);
    res.status(500).json({ error: 'Failed to create reflection' });
  }
});

export default router; 