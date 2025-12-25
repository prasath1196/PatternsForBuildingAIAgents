import { Agent } from '@mastra/core/agent'; 
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

const resumeBulletOptimiserModel = "google/gemini-2.5-flash";


export const resumeBulletOptimiserAgent = new Agent({
  name: 'Resume Bullet Optimiser Agent',
  instructions: `You are a resume bullet optimiser agent. 
  You are given a resume and you need to optimise the bullets for the resume.
  
  B`,
  model: resumeBulletOptimiserModel,
  tools: {},
  memory: new Memory({ 
    storage: new LibSQLStore({
      url: "file:../../memory.db", // local file-system database. Location is relative to the output directory `.mastra/output`
    }),
  }),
});