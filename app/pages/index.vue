<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

definePageMeta({
  layout: false,
});

const { data: me } = await useMe();

const scrollY = ref(0);
let rafId: number;

const onScroll = () => {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    scrollY.value = window.scrollY;
  });
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <div
    class="maximalist-theme min-h-screen bg-[#050005] text-white selection:bg-[#ff4500] selection:text-white overflow-x-hidden"
  >
    <!-- Background Orbs -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        class="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#ff4500]/20 to-[#ffaa00]/5 blur-[120px] mix-blend-screen will-change-transform"
        :style="{
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
        }"
      ></div>
      <div
        class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#cc0000]/20 to-[#ff4500]/10 blur-[100px] mix-blend-screen will-change-transform"
        :style="{ transform: `translateY(${-scrollY * 0.2}px)` }"
      ></div>
    </div>

    <!-- Header -->
    <header
      class="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#050005]/50 backdrop-blur-xl"
    >
      <div
        class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
      >
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-8 h-8 rounded bg-gradient-to-br from-[#ff4500] to-[#ffaa00] flex items-center justify-center shadow-[0_0_15px_rgba(255,69,0,0.5)] group-hover:shadow-[0_0_25px_rgba(255,69,0,0.8)] transition-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-black"
            >
              <path
                d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
              />
              <path
                d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              />
            </svg>
          </div>
          <span class="font-syne font-bold text-xl tracking-wider text-white"
            >NUXTLY</span
          >
        </NuxtLink>

        <div
          class="flex items-center gap-6 text-sm font-bold tracking-widest uppercase"
        >
          <template v-if="me?.user">
            <NuxtLink
              to="/dashboard"
              class="hover:text-[#ffaa00] transition-colors"
              >Dashboard</NuxtLink
            >
          </template>
          <template v-else>
            <NuxtLink
              to="/sign-in"
              class="text-white/70 hover:text-white transition-colors hidden sm:block"
              >Sign In</NuxtLink
            >
            <NuxtLink
              to="/sign-up"
              class="relative px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-none overflow-hidden group transition-all"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#ff4500] to-[#ffaa00] opacity-0 group-hover:opacity-20 transition-opacity"
              ></div>
              <span
                class="relative text-[#ffaa00] group-hover:text-white transition-colors"
                >Get Started</span
              >
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative z-10">
      <section
        class="min-h-screen flex items-center justify-center pt-20 px-6 relative"
      >
        <div
          class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvc3ZnPg==')] opacity-50"
        ></div>

        <div class="max-w-5xl mx-auto text-center relative">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 text-[#ffaa00] text-xs font-bold tracking-widest mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,69,0,0.2)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
              />
            </svg>
            Short links + Model Context Protocol
          </div>

          <h1
            class="font-syne text-5xl sm:text-8xl font-extrabold leading-[0.9] tracking-tighter mb-8"
          >
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
              >SHORTEN.</span
            >
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4500] via-[#ffaa00] to-[#ff4500] bg-[length:200%_auto] animate-gradient"
              >AUTOMATE.</span
            >
          </h1>

          <p
            class="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Nuxtly turns long URLs into tidy short links you can manage from a
            dashboard, a REST API, or directly from your AI assistant over MCP.
          </p>

          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <NuxtLink
              v-if="me?.user"
              to="/dashboard"
              class="group relative px-8 py-4 bg-[#ff4500] text-black font-bold tracking-widest uppercase overflow-hidden w-full sm:w-auto"
            >
              <div
                class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
              ></div>
              <span class="relative flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
                Open Dashboard
              </span>
            </NuxtLink>
            <template v-else>
              <NuxtLink
                to="/sign-up"
                class="group relative px-8 py-4 bg-[#ff4500] text-black font-bold tracking-widest uppercase overflow-hidden shadow-[0_0_30px_rgba(255,69,0,0.4)] hover:shadow-[0_0_50px_rgba(255,69,0,0.6)] transition-shadow w-full sm:w-auto"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                ></div>
                <span class="relative flex items-center justify-center gap-2">
                  Get Started Free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </NuxtLink>
            </template>
          </div>
        </div>
      </section>

      <!-- Immersive Features -->
      <section class="relative">
        <!-- Feature 1 -->
        <div
          class="min-h-screen sticky top-0 flex items-center px-6 bg-[#050005]/80 backdrop-blur-sm border-t border-white/5"
        >
          <div
            class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div class="text-[#ff4500] mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="6" cy="6" r="3" />
                  <path d="M8.12 8.12 12 12" />
                  <path d="M20 4 8.12 15.88" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M14.8 14.8 20 20" />
                </svg>
              </div>
              <h2
                class="font-syne text-5xl md:text-7xl font-bold mb-6 text-white leading-none"
              >
                INSTANT<br /><span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa00] to-[#ff4500]"
                  >LINKS.</span
                >
              </h2>
              <p class="text-xl text-white/60 leading-relaxed">
                Auto-generated codes or your own custom alias. Live click
                tracking. Zero friction.
              </p>
            </div>
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 to-transparent blur-2xl"
              ></div>
              <div
                class="relative bg-black/50 border border-white/10 p-8 text-sm text-[#ffaa00] shadow-2xl"
              >
                <div class="flex gap-2 mb-6 border-b border-white/10 pb-4">
                  <div class="w-3 h-3 rounded-full bg-[#ff4500]"></div>
                  <div class="w-3 h-3 rounded-full bg-[#ffaa00]"></div>
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <p><span class="text-white/40">POST</span> /api/links</p>
                <p class="mt-4 text-white/80">{</p>
                <p class="pl-4">
                  "url":
                  <span class="text-white">"https://very-long-url.com/..."</span
                  >,
                </p>
                <p class="pl-4">
                  "alias": <span class="text-white">"promo-26"</span>
                </p>
                <p class="text-white/80">}</p>
                <p class="mt-4 text-[#00ff00]">200 OK</p>
                <p class="text-white/80">{</p>
                <p class="pl-4">
                  "shortUrl": <span class="text-white">"nxt.ly/promo-26"</span>
                </p>
                <p class="text-white/80">}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div
          class="min-h-screen sticky top-0 flex items-center px-6 bg-[#0a0005]/90 backdrop-blur-md border-t border-white/5"
        >
          <div
            class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
          >
            <div class="order-2 md:order-1 relative">
              <div
                class="absolute inset-0 bg-gradient-to-tl from-[#ffaa00]/20 to-transparent blur-2xl"
              ></div>
              <div
                class="relative bg-black/50 border border-white/10 p-8 text-sm text-white shadow-2xl"
              >
                <div class="flex gap-2 mb-6 border-b border-white/10 pb-4">
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <div class="space-y-4">
                  <div
                    class="flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span class="text-[#ffaa00]">GET /api/links</span>
                    <span class="text-white/40">List links</span>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span class="text-[#ffaa00]">POST /api/links</span>
                    <span class="text-white/40">Create link</span>
                  </div>
                  <div
                    class="flex items-center justify-between border-b border-white/5 pb-2"
                  >
                    <span class="text-[#ffaa00]">PATCH /api/links/:id</span>
                    <span class="text-white/40">Update link</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-[#ffaa00]">DELETE /api/links/:id</span>
                    <span class="text-white/40">Remove link</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2 md:text-right">
              <div class="text-[#ffaa00] mb-6 md:ml-auto w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h2
                class="font-syne text-5xl md:text-7xl font-bold mb-6 text-white leading-none"
              >
                REST<br /><span
                  class="text-transparent bg-clip-text bg-gradient-to-l from-[#ffaa00] to-[#ff4500]"
                  >API.</span
                >
              </h2>
              <p class="text-xl text-white/60 leading-relaxed">
                Full CRUD over your links secured by your account session.
                Integrate anywhere.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 3 -->
        <div
          class="min-h-screen sticky top-0 flex items-center px-6 bg-[#050000]/95 backdrop-blur-lg border-t border-white/5"
        >
          <div
            class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div class="text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 8V2" />
                  <path d="M15 8V2" />
                  <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                </svg>
              </div>
              <h2
                class="font-syne text-5xl md:text-7xl font-bold mb-6 text-white leading-none"
              >
                MCP<br /><span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#ff4500]"
                  >SERVER.</span
                >
              </h2>
              <p class="text-xl text-white/60 leading-relaxed">
                Create and read links directly from your AI assistant using the
                Model Context Protocol.
              </p>
            </div>
            <div class="relative">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent blur-2xl"
              ></div>
              <div
                class="relative bg-black/50 border border-white/10 p-8 text-sm shadow-2xl"
              >
                <div class="flex gap-2 mb-6 border-b border-white/10 pb-4">
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                  <div class="w-3 h-3 rounded-full bg-white/20"></div>
                  <div class="w-3 h-3 rounded-full bg-[#ff4500]"></div>
                </div>
                <div class="text-white/60">
                  <p class="mb-2">> AI: I've analyzed the marketing copy.</p>
                  <p class="mb-2">
                    > User: Great, create a shortlink for the campaign.
                  </p>
                  <p class="text-[#ffaa00] mb-2 animate-pulse">
                    Calling MCP Tool: create_link...
                  </p>
                  <p class="text-white">
                    > AI: Done. Your shortlink is nxt.ly/campaign-26
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-white/10 bg-[#050005]">
      <div
        class="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="flex items-center gap-3 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
          </svg>
          <span class="font-syne font-bold tracking-wider">NUXTLY</span>
        </div>
        <div class="text-white/40 text-sm">Short links with an MCP server.</div>
        <a
          href="/mcp"
          class="text-[#ffaa00] hover:text-[#ff4500] text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 22v-5" />
            <path d="M9 8V2" />
            <path d="M15 8V2" />
            <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
          </svg>
          MCP Endpoint
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap");

.maximalist-theme {
  font-family: "JetBrains Mono", monospace;
}

.font-syne {
  font-family: "Syne", sans-serif;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  animation: gradient 4s ease infinite;
}
</style>
