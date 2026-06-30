<script setup lang="ts">
import { useMe } from "#imports";

definePageMeta({
  layout: false,
});

const { data: me } = await useMe();
</script>

<template>
  <div
    class="min-h-screen bg-[#F4F4F0] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F4F4F0] overflow-x-hidden"
  >
    <!-- Background Noise Texture -->
    <div
      class="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);
      "
    ></div>

    <!-- Nav -->
    <nav
      class="flex justify-between items-center px-6 md:px-12 py-8 border-b border-[#111111]/10 relative z-40"
    >
      <NuxtLink
        to="/"
        class="font-serif text-3xl tracking-widest uppercase font-semibold"
        >Nuxtly</NuxtLink
      >
      <div
        class="hidden md:flex gap-12 text-[10px] tracking-[0.2em] uppercase font-semibold"
      >
        <NuxtLink to="/mcp" class="hover:italic transition-all"
          >MCP Server</NuxtLink
        >
        <NuxtLink to="/api-docs" class="hover:italic transition-all"
          >REST API</NuxtLink
        >
        <NuxtLink
          v-if="me?.user"
          to="/dashboard"
          class="hover:italic transition-all"
          >Dashboard</NuxtLink
        >
        <NuxtLink v-else to="/sign-in" class="hover:italic transition-all"
          >Sign In</NuxtLink
        >
      </div>
      <NuxtLink
        v-if="!me?.user"
        to="/sign-up"
        class="md:hidden text-[10px] tracking-[0.2em] uppercase font-semibold border border-[#111111] px-4 py-2"
        >Start</NuxtLink
      >
    </nav>

    <!-- Hero -->
    <main class="px-6 md:px-12 py-24 md:py-32 relative z-30">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div class="md:col-span-2 hidden md:flex h-full items-end pb-4">
          <p
            class="text-[10px] tracking-[0.2em] uppercase rotate-180 opacity-60"
            style="writing-mode: vertical-rl"
          >
            Vol. I — The Art of Redirection
          </p>
        </div>
        <div class="md:col-span-10">
          <h1
            class="font-serif text-6xl sm:text-8xl md:text-[11rem] leading-[0.85] tracking-tighter uppercase mb-16"
          >
            <span
              class="block ml-0 md:ml-[-0.5rem] hover:italic transition-all duration-500 cursor-default"
              >Measure.</span
            >
            <span
              class="block ml-8 md:ml-32 italic text-[#111111]/60 hover:text-[#111111] transition-all duration-500 cursor-default"
              >Shorten.</span
            >
            <span
              class="block ml-4 md:ml-16 hover:italic transition-all duration-500 cursor-default"
              >Automate.</span
            >
          </h1>
          <div
            class="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24 md:mt-40 items-start"
          >
            <div class="md:col-span-5 md:col-start-3">
              <p
                class="text-lg md:text-2xl leading-relaxed font-light text-justify"
              >
                Nuxtly elevates the humble URL into a refined asset. Manage your
                links with unprecedented elegance through our dashboard, REST
                API, or directly via AI using our Model Context Protocol server.
              </p>
            </div>
            <div
              class="md:col-span-4 flex flex-col items-start md:items-end justify-end pt-8 md:pt-0"
            >
              <NuxtLink
                v-if="me?.user"
                to="/dashboard"
                class="group flex items-center gap-6 border-b border-[#111111] pb-3 hover:pb-5 transition-all"
              >
                <span class="text-xs tracking-[0.2em] uppercase font-semibold"
                  >Enter Dashboard</span
                >
                <span
                  class="font-serif italic text-3xl group-hover:translate-x-6 transition-transform"
                  >→</span
                >
              </NuxtLink>
              <NuxtLink
                v-else
                to="/sign-up"
                class="group flex items-center gap-6 border-b border-[#111111] pb-3 hover:pb-5 transition-all"
              >
                <span class="text-xs tracking-[0.2em] uppercase font-semibold"
                  >Begin Your Journey</span
                >
                <span
                  class="font-serif italic text-3xl group-hover:translate-x-6 transition-transform"
                  >→</span
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Features Asymmetrical -->
    <section
      class="px-6 md:px-12 py-32 border-t border-[#111111]/10 relative z-30"
    >
      <!-- Feature 1 -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-40 md:mb-64">
        <div class="md:col-span-4 flex flex-col justify-start relative">
          <span
            class="font-serif text-[15rem] md:text-[20rem] leading-none text-[#111111]/5 absolute -top-20 -left-8 pointer-events-none select-none"
            >01</span
          >
          <h2 class="font-serif text-5xl md:text-7xl uppercase z-10 pt-12">
            The<br /><span class="italic">MCP</span><br />Server
          </h2>
        </div>
        <div class="md:col-span-6 md:col-start-7 pt-24 md:pt-40">
          <p class="text-xl md:text-3xl leading-relaxed mb-16 font-light">
            Empower your AI assistants. Nuxtly integrates natively with the
            Model Context Protocol, allowing language models to generate, read,
            and manage your short links autonomously without breaking your
            workflow.
          </p>
          <div
            class="p-8 md:p-12 bg-[#111111] text-[#F4F4F0] relative overflow-hidden group"
          >
            <div
              class="absolute inset-0 bg-[#F4F4F0] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out mix-blend-difference"
            ></div>
            <div class="font-mono text-xs md:text-sm leading-loose opacity-80">
              <span class="text-[#F4F4F0]/50">> AI:</span> Generating shortlink
              for campaign...<br />
              <span class="text-[#F4F4F0]/50">> Tool Call:</span> create_link({
              url: "https://example.com/very-long-url" })<br />
              <span class="text-[#F4F4F0]/50">> Result:</span>
              nxt.ly/editorial-26
            </div>
          </div>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
        <div class="md:col-span-6 pt-12 order-2 md:order-1">
          <div
            class="w-full h-[40vh] md:h-[60vh] bg-[#111111] text-[#F4F4F0] flex flex-col justify-between p-8 md:p-12 relative overflow-hidden group mb-16"
          >
            <h3
              class="font-serif text-3xl md:text-5xl italic relative z-10 mix-blend-difference"
            >
              Absolute<br />Precision.
            </h3>
            <div class="text-right relative z-10">
              <span
                class="text-[8rem] md:text-[15rem] leading-none font-serif opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 inline-block origin-bottom-right mix-blend-difference"
                >API.</span
              >
            </div>
            <div
              class="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)]"
            ></div>
          </div>
          <p class="text-xl md:text-3xl leading-relaxed mb-12 font-light">
            A meticulously crafted REST API for developers who demand
            perfection. Secure, fast, and fully documented.
          </p>
        </div>
        <div
          class="md:col-span-4 md:col-start-9 flex flex-col justify-start text-left md:text-right order-1 md:order-2 relative"
        >
          <span
            class="font-serif text-[15rem] md:text-[20rem] leading-none text-[#111111]/5 absolute -top-20 -right-8 pointer-events-none select-none"
            >02</span
          >
          <h2 class="font-serif text-5xl md:text-7xl uppercase z-10 pt-12">
            Rest<br /><span class="italic">API</span>
          </h2>

          <div
            class="mt-24 md:mt-auto flex flex-col gap-6 border-l md:border-l-0 md:border-r border-[#111111]/20 pl-6 md:pl-0 md:pr-6 text-left md:text-right"
          >
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
            >
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50"
                >Create</span
              >
              <span class="font-mono text-xs md:text-sm">POST /api/links</span>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
            >
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50"
                >Read</span
              >
              <span class="font-mono text-xs md:text-sm">GET /api/links</span>
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
            >
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50"
                >Update</span
              >
              <span class="font-mono text-xs md:text-sm"
                >PATCH /api/links/:id</span
              >
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-2"
            >
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50"
                >Delete</span
              >
              <span class="font-mono text-xs md:text-sm"
                >DELETE /api/links/:id</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="bg-[#111111] text-[#F4F4F0] px-6 md:px-12 py-24 md:py-32 overflow-hidden relative z-30"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 md:mb-48 relative z-10"
      >
        <div class="max-w-md mb-16 md:mb-0">
          <h3 class="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Ready to refine<br /><span class="italic">your links?</span>
          </h3>
          <p
            class="text-base font-light text-[#F4F4F0]/70 mb-12 leading-relaxed"
          >
            Join the platform that treats URLs with the respect they deserve.
            Elegance meets automation.
          </p>
          <NuxtLink
            to="/sign-up"
            class="inline-block border border-[#F4F4F0] px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#F4F4F0] hover:text-[#111111] transition-colors duration-300"
          >
            Create Account
          </NuxtLink>
        </div>
        <div
          class="flex gap-16 text-[10px] tracking-[0.2em] uppercase font-semibold"
        >
          <div class="flex flex-col gap-6">
            <NuxtLink
              to="/mcp"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >MCP Server</NuxtLink
            >
            <NuxtLink
              to="/api"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >REST API</NuxtLink
            >
            <NuxtLink
              to="/dashboard"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >Dashboard</NuxtLink
            >
          </div>
          <div class="flex flex-col gap-6">
            <NuxtLink
              to="/terms"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >Terms</NuxtLink
            >
            <NuxtLink
              to="/privacy"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >Privacy</NuxtLink
            >
            <a
              href="#"
              class="hover:italic hover:text-[#F4F4F0]/70 transition-all"
              >Contact</a
            >
          </div>
        </div>
      </div>
      <div
        class="font-serif text-[20vw] leading-[0.7] text-center tracking-tighter uppercase opacity-10 select-none pointer-events-none"
      >
        Nuxtly
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Manrope:wght@200;300;400;500;600&display=swap");

.font-serif {
  font-family: "Cormorant Garamond", serif;
}
.font-sans {
  font-family: "Manrope", sans-serif;
}
</style>
