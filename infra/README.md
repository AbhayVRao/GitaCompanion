# Infrastructure

Development and deployment infrastructure for the Gita Companion application.

## Components

- Docker Compose configuration for local development
- Prisma database schema and migrations
- Development scripts and utilities
- Environment configuration templates

## Local Development

```bash
# Start all services
docker-compose up -d

# Run database migrations
cd .. && npx prisma migrate dev

# Stop all services
docker-compose down
```

## Services

- **PostgreSQL**: Main database (port 5432)
- **Qdrant**: Vector database (ports 6333, 6334)
- *(Future)* **Neo4j**: Knowledge graph database

## Environment Setup

Copy the example environment files:
```bash
cp .env.example .env
```

## Scripts

The `scripts/` directory contains various utilities:
- Database seeding
- Development setup
- Backup and restore
- Deployment helpers

## Project Structure

```
infra/
  ├── docker-compose.yml   # Local development services
  ├── prisma/             # Database schema and migrations
  ├── scripts/            # Development and deployment scripts
  └── env/                # Environment templates
``` 