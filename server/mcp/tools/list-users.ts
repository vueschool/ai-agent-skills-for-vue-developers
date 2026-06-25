import { z } from "zod";

export default defineMcpTool({
  description:
    "List the application users, optionally filtered by a search term matching name, email, or city.",
  annotations: {
    readOnlyHint: true,
    idempotentHint: true,
    openWorldHint: false,
  },
  inputSchema: {
    q: z
      .string()
      .optional()
      .describe("Optional search term to filter users by name, email, or city"),
  },
  inputExamples: [{}, { q: "New York" }, { q: "alice" }],
  handler: async ({ q }) => {
    const users = await $fetch("/api/users", {
      query: q ? { q } : undefined,
    });

    console.log("hello users", users);
    return users;
  },
});
