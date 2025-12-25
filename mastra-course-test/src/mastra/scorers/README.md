# Scorers

Evaluation metrics for measuring agent output quality and performance.

## Creating a Scorer

```typescript
import { createScorer } from "@mastra/evals";

export const myScorer = createScorer({
  name: "Scorer Name",
  scoringCriteria: "What to evaluate",
  model: openai("gpt-4o"),
  outputSchema: z.object({
    score: z.number().min(0).max(1),
    reasoning: z.string(),
  }),
});
```

## Current Scorers

- **`weather-scorer.ts`** - Evaluates weather agent responses (tool appropriateness, completeness, translation)
- **`resume-bullet-optimiser-scorer.ts`** - Evaluates resume optimization quality

## Scorer Types

1. **Tool Appropriateness**: Did the agent use tools correctly?
2. **Completeness**: Did the agent provide complete answers?
3. **Accuracy**: Is the information correct?
4. **Relevance**: Is the response relevant to the query?

## Best Practices

1. **Clear Criteria**: Define what "good" looks like
2. **Consistent Scoring**: Use 0-1 scale for comparability
3. **Reasoning**: Include explanations for scores
4. **Model Selection**: Use appropriate models for evaluation

## Using Scorers

```typescript
// In agent generation
await agent.generate("query", {
  scorers: { myScorer },
});

// Register globally
export const mastra = new Mastra({
  scorers: { myScorer },
});
```

## Viewing Scores

Check scorer results in Mastra Studio under the Scorers tab.

