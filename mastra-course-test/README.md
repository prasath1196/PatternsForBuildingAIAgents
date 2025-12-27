# Mastra Course Test

Learning experiments and foundational Mastra concepts from the official Mastra course.

## Overview

This folder contains hands-on implementations of core Mastra patterns:
- Agent creation with system prompts
- Tool integration (Google Sheets, APIs)
- Memory management (conversation context)
- MCP (Model Context Protocol) integration with Zapier
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
ZAPIER_MCP_URL=https://mcp.zapier.com/api/mcp/s/YOUR-URL/mcp  # Optional: For Zapier MCP integration
```

**Getting Zapier MCP URL:**
1. Go to https://mcp.zapier.com/
2. Create/select your "TypeScript MCP Server"
3. Go to the "Connect" tab
4. Copy the MCP server URL
5. Add it to your `.env` file

**Note:** Zapier MCP integration is optional. The app will start without it, but Zapier tools won't be available.

## Structure

- **`src/mastra/agents/`** - Agent definitions with instructions and models
  - Includes MCP client configuration for Zapier integration
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
4. **Personal Assistant Agent** - Email management and task automation via Zapier MCP (Gmail integration)

## MCP Integration

This project includes Model Context Protocol (MCP) integration with Zapier:
- **Location**: `src/mastra/agents/index.ts`
- **Features**: 
  - Automatic tool discovery from Zapier MCP servers
  - Graceful error handling if Zapier is unavailable
  - Support for Streamable HTTP transport (Zapier's required protocol)
- **Tools Available**: Gmail operations (find, send emails) and other Zapier-connected services

**Known Limitations:**
- Streaming responses may fail on localhost due to network restrictions
- For full functionality, deploy to a publicly accessible URL or use ngrok for local testing

## Next Steps

- Add more agents following the patterns in this folder
- Extend tools with additional data sources
- Create complex workflows combining multiple agents
- Implement custom scorers for domain-specific evaluation
- Deploy to production for full Zapier MCP streaming support

