# Tools

Reusable functions that agents can call to extend their capabilities.

## Creating a Tool

```typescript
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const myTool = createTool({
  id: "tool-id",
  description: "What the tool does",
  inputSchema: z.object({
    param: z.string().describe("Parameter description"),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
  execute: async ({ context }) => {
    // Tool logic here
    return { result: "output" };
  },
});
```

## Current Tools

- **`get-transactions-tool.ts`** - Fetches transaction data from Google Sheets
- **`weather-tool.ts`** - Retrieves weather information from API
- **`get-resume-guidelines-tool.ts`** - Provides resume optimization guidelines

## Best Practices

1. **Clear Descriptions**: Help agents understand when to use the tool
2. **Type Safety**: Use Zod schemas for input/output validation
3. **Error Handling**: Return meaningful error messages
4. **Idempotency**: Design tools to be safely retryable

## Using Tools in Agents

```typescript
import { myTool } from "../tools/my-tool";

export const agent = new Agent({
  tools: { myTool },
});
```

## Testing Tools

Test tools directly in Mastra Studio at `http://localhost:4111/tools`

