# Patterns for Building AI Agents

A practical exploration of AI agent patterns using [Mastra](https://mastra.ai), implementing agents and workflows from the "Patterns for Building AI Agents" methodology.

## Structure

- **`mastra-course-test/`** - Learning experiments and foundational Mastra concepts
  - See [`mastra-course-test/README.md`](./mastra-course-test/README.md) for setup and usage
  - **Agents** - See [`src/mastra/agents/README.md`](./mastra-course-test/src/mastra/agents/README.md)
  - **Tools** - See [`src/mastra/tools/README.md`](./mastra-course-test/src/mastra/tools/README.md)
  - **Workflows** - See [`src/mastra/workflows/README.md`](./mastra-course-test/src/mastra/workflows/README.md)
  - **Scorers** - See [`src/mastra/scorers/README.md`](./mastra-course-test/src/mastra/scorers/README.md)

## Features

- **Agent Development**: Custom agents with system prompts, tools, and memory
- **Tool Integration**: External API integrations and data sources
- **Memory Management**: Short-term and long-term conversation context
- **Workflow Orchestration**: Multi-step agent workflows
- **Observability**: Built-in tracing and logging

## Getting Started

```bash
cd mastra-course-test
npm install
npm run dev
```

Visit `http://localhost:4111` for Mastra Studio.

## Tech Stack

- **Mastra** - AI Agent Framework
- **TypeScript** - Type-safe development
- **LibSQL** - SQLite storage for memory persistence
- **OpenAI/Anthropic** - LLM providers

## Agents

- **Financial Assistant**: Analyzes transaction data from Google Sheets
- **Weather Agent**: Provides weather information and activity suggestions
- **Resume Optimizer**: Enhances resume bullet points with AI guidance

## License

MIT

