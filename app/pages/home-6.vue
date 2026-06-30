<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

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
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <div class="luxury-theme bg-[#030303] text-[#e5e5e5] min-h-screen overflow-x-hidden selection:bg-[#ffffff] selection:text-black">
    
    <!-- Subtle Noise Overlay -->
    <div class="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

    <!-- Soft Ambient Glow -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center">
      <div 
        class="absolute top-[-20%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-b from-[#ffffff]/[0.02] to-transparent blur-[100px] will-change-transform"
        :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
      ></div>
    </div>

    <!-- Minimal Header -->
    <header class="fixed top-0 inset-x-0 z-40 transition-all duration-1000" :class="scrollY > 50 ? 'bg-[#030303]/80 backdrop-blur-2xl border-b border-white/[0.02] py-4' : 'bg-transparent py-8'">
      <div class="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <NuxtLink to="/" class="group flex items-center gap-4">
          <div class="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 transition-colors duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white/80 group-hover:text-white transition-colors duration-700"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-serif text-lg tracking-[0.3em] uppercase text-white/90">Nuxtly</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-12 text-xs font-sans tracking-[0.2em] uppercase text-white/50">
          <template v-if="me?.user">
            <NuxtLink to="/dashboard" class="hover:text-white transition-colors duration-500">Dashboard</NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/sign-in" class="hover:text-white transition-colors duration-500">Sign In</NuxtLink>
            <NuxtLink to="/sign-up" class="relative overflow-hidden px-6 py-3 border border-white/20 hover:border-white/60 text-white/80 hover:text-white transition-all duration-700">
              <span class="relative z-10">Experience</span>
            </NuxtLink>
          </template>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative z-10">
      <section class="min-h-screen flex flex-col items-center justify-center pt-32 px-6 relative">
        <div class="max-w-5xl mx-auto text-center flex flex-col items-center">
          <div class="overflow-hidden mb-8">
            <p class="font-sans text-xs tracking-[0.4em] uppercase text-white/40 animate-fade-up" style="animation-delay: 0.2s; animation-fill-mode: both;">
              Refined Link Management
            </p>
          </div>
          
          <h1 class="font-serif text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.85] tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 animate-fade-up" style="animation-delay: 0.5s; animation-fill-mode: both;">
            Shorten.<br/>
            <span class="italic pr-4">Automate.</span>
          </h1>
          
          <p class="font-sans text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light animate-fade-up" style="animation-delay: 0.8s; animation-fill-mode: both;">
            An elegant protocol for modern link routing. Seamlessly manage your URLs through a sophisticated dashboard, a precise REST API, or an intelligent MCP server.
          </p>

          <div class="mt-16 flex flex-col sm:flex-row items-center gap-8 animate-fade-up" style="animation-delay: 1.1s; animation-fill-mode: both;">
            <NuxtLink v-if="me?.user" to="/dashboard" class="group relative px-10 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase overflow-hidden transition-transform duration-700 hover:scale-105">
              <span class="relative z-10 flex items-center gap-3">
                Enter Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform duration-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </NuxtLink>
            <template v-else>
              <NuxtLink to="/sign-up" class="group relative px-10 py-4 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase overflow-hidden transition-transform duration-700 hover:scale-105">
                <span class="relative z-10 flex items-center gap-3">
                  Begin Journey
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform duration-500"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </NuxtLink>
              <NuxtLink to="#features" class="group px-10 py-4 text-white/50 hover:text-white font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-700 flex items-center gap-3">
                Discover
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-y-1 transition-transform duration-500"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              </NuxtLink>
            </template>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mx-auto my-16"></div>

      <!-- Features Section -->
      <section id="features" class="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-24 lg:gap-12">
          
          <!-- Feature 01 -->
          <div class="group">
            <div class="mb-12 overflow-hidden">
              <div class="text-white/20 font-sans text-sm tracking-[0.3em] mb-6 group-hover:text-white/60 transition-colors duration-700">01</div>
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-700 group-hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 group-hover:text-white transition-colors duration-700"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
              </div>
              <h3 class="font-serif text-3xl md:text-4xl font-light text-white mb-6">Instant Links</h3>
              <p class="font-sans text-white/40 leading-relaxed font-light text-sm md:text-base">
                Generate elegant aliases or let our system craft a unique identifier. Every interaction is meticulously tracked with zero friction.
              </p>
            </div>
          </div>

          <!-- Feature 02 -->
          <div class="group lg:mt-24">
            <div class="mb-12 overflow-hidden">
              <div class="text-white/20 font-sans text-sm tracking-[0.3em] mb-6 group-hover:text-white/60 transition-colors duration-700">02</div>
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-700 group-hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 group-hover:text-white transition-colors duration-700"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 class="font-serif text-3xl md:text-4xl font-light text-white mb-6">REST API</h3>
              <p class="font-sans text-white/40 leading-relaxed font-light text-sm md:text-base">
                A pristine, fully-featured CRUD interface secured by your session. Integrate link management into your architecture with absolute precision.
              </p>
            </div>
          </div>

          <!-- Feature 03 -->
          <div class="group lg:mt-48">
            <div class="mb-12 overflow-hidden">
              <div class="text-white/20 font-sans text-sm tracking-[0.3em] mb-6 group-hover:text-white/60 transition-colors duration-700">03</div>
              <div class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white/40 transition-colors duration-700 group-hover:scale-110 transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 group-hover:text-white transition-colors duration-700"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
              </div>
              <h3 class="font-serif text-3xl md:text-4xl font-light text-white mb-6">MCP Server</h3>
              <p class="font-sans text-white/40 leading-relaxed font-light text-sm md:text-base">
                Command your links through conversational AI. Our Model Context Protocol integration allows intelligent assistants to act on your behalf.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- Code Showcase (Minimalist) -->
      <section class="py-32 px-6 relative overflow-hidden">
        <div class="max-w-4xl mx-auto">
          <div class="border border-white/5 bg-[#050505] p-12 md:p-20 relative group">
            <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div class="flex items-center justify-between mb-12">
              <h4 class="font-serif text-2xl text-white/80 font-light italic">The Protocol</h4>
              <div class="text-white/20 font-sans text-xs tracking-[0.2em]">POST /API/LINKS</div>
            </div>

            <div class="font-sans text-sm md:text-base text-white/50 leading-loose">
              <span class="text-white/30">{</span><br/>
              <span class="pl-8">"url": <span class="text-white/80">"https://sophisticated-architecture.com/..."</span>,</span><br/>
              <span class="pl-8">"alias": <span class="text-white/80">"elegance"</span></span><br/>
              <span class="text-white/30">}</span><br/>
              <br/>
              <span class="text-white/30">Response 200</span><br/>
              <span class="text-white/30">{</span><br/>
              <span class="pl-8">"shortUrl": <span class="text-white/80">"nxt.ly/elegance"</span></span><br/>
              <span class="text-white/30">}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/[0.02] bg-[#030303] py-20 px-6 mt-20 relative z-10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="flex flex-col items-center md:items-start gap-4">
          <div class="font-serif text-xl tracking-[0.3em] uppercase text-white/80">Nuxtly</div>
          <div class="text-white/30 text-xs font-sans tracking-[0.1em]">© 2026 Refined Links.</div>
        </div>
        
        <div class="flex items-center gap-8 text-xs font-sans tracking-[0.2em] uppercase text-white/40">
          <a href="/mcp" class="hover:text-white transition-colors duration-500">MCP Endpoint</a>
          <a href="#" class="hover:text-white transition-colors duration-500">Privacy</a>
          <a href="#" class="hover:text-white transition-colors duration-500">Terms</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Manrope:wght@200;300;400&display=swap');

.luxury-theme {
  font-family: 'Manrope', sans-serif;
}

.font-serif {
  font-family: 'Cormorant Garamond', serif;
}

.font-sans {
  font-family: 'Manrope', sans-serif;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>