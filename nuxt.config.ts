// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/mcp-toolkit"],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      // Base URL used when displaying short links. Falls back to the request
      // origin when empty. Override with NUXT_PUBLIC_SHORT_BASE_URL.
      shortBaseUrl: "",
    },
  },
  mcp: {
    name: "Nuxtly MCP Server",
    description: "Create and read short links in Nuxtly.",
    instructions:
      "Authenticate with a Nuxtly API key (Authorization: Bearer <key>). Use create-link to shorten a URL (optionally with a custom alias), list-links to see the current user's links, get-link to read one by slug, update-link to change a link's target, and delete-link to remove one.",
  },
  nitro: {
    experimental: { asyncContext: true },
  },
});
