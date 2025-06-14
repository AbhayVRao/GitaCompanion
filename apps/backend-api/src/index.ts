import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import reflectionRoutes from './routes/reflection';

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:8081',
    'http://localhost:8082',
    'exp://localhost:8081',
    'exp://localhost:8082',
    'exp://10.18.1.13:8081',
    'exp://10.18.1.13:8082',
    'http://10.18.1.13:3000',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Disable the default CSP from helmet
app.use(helmet({
  contentSecurityPolicy: false
}));

// Custom CSP middleware
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' data: https: *; img-src 'self' data: https: *; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:* exp://* http://10.18.1.13:*"
  );
  next();
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Gita Companion API',
    endpoints: {
      health: '/health',
      reflection: '/reflection'
    }
  });
});

// Routes
app.use('/reflection', reflectionRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(Number(port), '0.0.0.0', () => {  // Listen on all network interfaces
  console.log(`Server running at http://localhost:${port}`);
}); 