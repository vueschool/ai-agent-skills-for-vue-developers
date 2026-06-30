/**
 * Default MCP handler with soft API-key auth. Clients pass their Nuxtly API key
 * as `Authorization: Bearer <key>`. On success we resolve the owning user onto
 * `event.context.user`; tools are hidden via `enabled` guards when absent.
 *
 * We never throw 401 here — that would trigger OAuth discovery in MCP clients.
 */
export default defineMcpHandler({
  middleware: async (event) => {
    const header =
      getHeader(event, "authorization") || getHeader(event, "x-api-key");
    const key = header?.replace(/^Bearer\s+/i, "").trim();
    if (!key) return;

    const result = await auth.api
      .verifyApiKey({ body: { key } })
      .catch(() => null);

    if (result?.valid && result.key?.referenceId) {
      event.context.user = { id: result.key.referenceId };
    }
  },
});
