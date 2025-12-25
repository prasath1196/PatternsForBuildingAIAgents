# Workflows

Multi-step agent orchestration for complex tasks.

## Creating a Workflow

```typescript
import { createWorkflow } from "@mastra/core/workflows";
import { createStep } from "@mastra/core/workflows";

const stepOne = createStep({
  id: "step-1",
  execute: async ({ context }) => {
    // Step logic
    return { result: "data" };
  },
});

export const myWorkflow = createWorkflow({
  name: "My Workflow",
  triggerSchema: z.object({ input: z.string() }),
  steps: [stepOne],
});
```

## Current Workflows

- **`weather-workflow.ts`** - Multi-step weather analysis and activity planning

## Workflow Patterns

1. **Sequential**: Steps execute one after another
2. **Parallel**: Steps run simultaneously
3. **Conditional**: Steps execute based on conditions
4. **Agent Steps**: Use agents within workflow steps

## Best Practices

1. **Idempotent Steps**: Design steps to be safely retryable
2. **Error Handling**: Handle failures gracefully
3. **State Management**: Use context to pass data between steps
4. **Testing**: Test workflows in Studio before production

## Registering Workflows

Export workflows in `src/mastra/index.ts`:

```typescript
export const mastra = new Mastra({
  workflows: { myWorkflow },
});
```

