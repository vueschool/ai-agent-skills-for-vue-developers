// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/mcp-toolkit'],
  css: ['~/assets/css/main.css'],
  mcp: {
    name: 'Users MCP Server',
    description: 'Read users from the application user directory.',
    instructions: 'Use the list-users tool to fetch the application users. Pass a query to filter by name, email, or city.',
  },
  nitro: {
    experimental: { asyncContext: true },
  },
})
