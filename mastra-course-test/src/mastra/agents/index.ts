import { MCPClient } from "@mastra/mcp";

// Get Zapier MCP URL from environment variable or use the server ID from your Zapier dashboard
// Your server ID from the URL: 863bf1f3-9f89-455b-bd67-dc7692adfef1
// Get the full MCP URL from the "Connect" tab in your Zapier MCP dashboard
const zapierMcpUrl = process.env.ZAPIER_MCP_URL || "https://mcp.zapier.com/api/mcp/s/ODYzYmYxZjMtOWY4OS00NTViLWJkNjctZGM3NjkyYWRmZWYxOmVhODk0ZDFhLWMzNjYtNGMwNy1iN2ZkLTQwMjk3MDA3MDI2NA==/mcp";

// Build servers object conditionally
const servers: Record<string, any> = {};
if (zapierMcpUrl) {
    servers["Zapier"] = {
        url: new URL(zapierMcpUrl),
        timeout: 90000, // 90 seconds - Zapier responses can be slow
        // Zapier only supports Streamable HTTP (not SSE)
        requestInit: {
            headers: {
                "Connection": "keep-alive",
                "Cache-Control": "no-cache",
                "Accept": "application/json",
            },
        },
    };
}

export const mcp: MCPClient = new MCPClient({
    servers,
});

// Gracefully handle connection and tool loading
let mcpTools = {};
try {
    mcpTools = await mcp.getTools();
    console.log("✅ Zapier MCP tools loaded successfully");
} catch (error) {
    console.warn("⚠️  Failed to load Zapier MCP tools:", error instanceof Error ? error.message : String(error));
}

export { mcpTools };
