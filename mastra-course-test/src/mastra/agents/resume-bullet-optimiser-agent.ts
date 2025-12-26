import { Agent } from '@mastra/core/agent';
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { getResumeGuidelinesTool } from "../tools/get-resume-guidelines-tool";

const resumeBulletOptimiserModel = "google/gemini-2.5-flash";


export const resumeBulletOptimiserAgent = new Agent({
  name: 'Resume Bullet Optimiser Agent',
  instructions: `You are a resume bullet optimiser agent. 
  You are given a resume bullet and you need to optimise the bullet to an impactful format
  
  Best practices:
  - Use the most relevant and impactful bullets.
  - Keep the bullets concise and to the point. 
  - Always add a quantifiable result or metric to the bullet. 
  - Respond in the same language as the bullet. 
  - Do not add any other text to the bullet.
  
TOOLS
- Use the getResumeGuidelinesTool to fetch resume guidelines from a google document.
- Analyze the resume bullet and the resume guidelines to optimise the bullet.`,
  model: resumeBulletOptimiserModel,
  tools: { getResumeGuidelinesTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../../memory.db", // local file-system database. Location is relative to the output directory `.mastra/output`
    }),
  }),
});