// import { PineconeVector } from "@mastra/pinecone";

// const store = new PineconeVector({
//     apiKey: process.env.PINECONE_API_KEY,
// });
// await store.createIndex({
//     indexName: "myCollection",
//     dimension: 1536,
// });
// await store.upsert({
//     indexName: "myCollection",
//     vectors: embeddings,
//     metadata: chunks.map((chunk) => ({ text: chunk.text })),
// });