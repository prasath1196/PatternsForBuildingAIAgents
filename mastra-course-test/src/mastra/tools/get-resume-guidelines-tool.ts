import { createTool } from "@mastra/core/tools"; 
import { z } from "zod"; 

export const getResumeGuidelinesTool = createTool({
    id: "get-resume-guidelines", 
    description: "Get resume guidelines from a google document",
    inputSchema: z.object({}),
    outputSchema: z.object({
        guidelines: z.string(),
    }),
    execute: async () => {
        return await getResumeGuidelines();
    },
});

const getResumeGuidelines = async () => {
    // Use the export URL format to get the document content as plain text
    const documentId = "10bbNBXZXbqpoKMsJnIQlnTWSQ15ANIFZ-T8HxeqFFts";
    const url = `https://docs.google.com/document/d/${documentId}/export?format=txt`;
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch resume guidelines: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.text();
    return {
        guidelines: data,
    };
};