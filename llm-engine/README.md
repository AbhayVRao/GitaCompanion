# LLM Engine

Python-based AI service handling speech recognition, text embeddings, and knowledge graph operations.

## Features

- Whisper-based speech-to-text
- Vector embeddings for semantic search
- Knowledge graph operations
- Audio processing pipeline
- Async job processing

## Tech Stack

- Python 3.11+
- FastAPI
- OpenAI Whisper
- Qdrant vector store
- PyTorch
- (Future) Neo4j

## Development

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows

# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn main:app --reload
```

## Environment Variables

Create a `.env` file with:
```
OPENAI_API_KEY=your_key_here
QDRANT_HOST=localhost
QDRANT_PORT=6333
MODEL_CACHE_DIR=./models
```

## Project Structure

```
src/
  ├── api/          # FastAPI routes
  ├── services/     # Core AI services
  ├── models/       # Pydantic models
  ├── utils/        # Helper functions
  ├── embeddings/   # Vector embedding logic
  └── whisper/      # Speech recognition
```

## Model Management

The engine automatically downloads and caches AI models. Default cache location is `./models/`. 