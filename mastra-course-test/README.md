# Mastra Course Test

Learning experiments and foundational Mastra concepts from the official Mastra course.

## Overview

This folder contains hands-on implementations of core Mastra patterns:
- Agent creation with system prompts
- Tool integration (Google Sheets, APIs)
- Memory management (conversation context)
- Workflow orchestration
- Evaluation scorers

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:

```bash
OPENAI_API_KEY=your-key-here
```

## Structure

- **`src/mastra/agents/`** - Agent definitions with instructions and models
- **`src/mastra/tools/`** - Reusable tools for agent capabilities
- **`src/mastra/workflows/`** - Multi-step agent workflows
- **`src/mastra/scorers/`** - Evaluation metrics for agent outputs
- **`src/mastra/index.ts`** - Main Mastra configuration and exports

## Testing

- **Studio UI**: `http://localhost:4111` - Interactive agent testing
- **API Docs**: `http://localhost:4111/swagger-ui` - REST API exploration
- **OpenAPI**: `http://localhost:4111/openapi.json` - API specification

## Agents

1. **Financial Agent** - Transaction analysis with Google Sheets integration
2. **Weather Agent** - Weather information and activity suggestions
3. **Resume Optimizer** - AI-powered resume bullet point enhancement

## Next Steps

- Add more agents following the patterns in this folder
- Extend tools with additional data sources
- Create complex workflows combining multiple agents
- Implement custom scorers for domain-specific evaluation

