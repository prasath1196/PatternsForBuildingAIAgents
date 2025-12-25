# Agents

Agent definitions with system prompts, models, tools, and memory configuration.

## Creating an Agent

```typescript
import { Agent } from "@mastra/core/agent";
import { openai } from "@ai-sdk/openai-v5";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const myAgent = new Agent({
  name: "Agent Name",
  instructions: `System prompt defining role, capabilities, and behavior`,
  model: openai("gpt-4o"),
  tools: { myTool },
  memory: new Memory({
    storage: new LibSQLStore({ url: "file:../../memory.db" }),
  }),
});
```

## Current Agents

- **`financial-agent.ts`** - Financial transaction analysis with memory
- **`weather-agent.ts`** - Weather information and activity planning
- **`resume-bullet-optimiser-agent.ts`** - Resume enhancement with guidelines

## Best Practices

1. **System Prompts**: Define role, capabilities, constraints, and success criteria
2. **Tool Selection**: Only include tools the agent actually needs
3. **Memory**: Use file-based storage for persistence, `:memory:` for testing
4. **Model Selection**: Choose based on task complexity and cost

## Registering Agents

Export agents in `src/mastra/index.ts`:

```typescript
export const mastra = new Mastra({
  agents: { myAgent },
});
```

