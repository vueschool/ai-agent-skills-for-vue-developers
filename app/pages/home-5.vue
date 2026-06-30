<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

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
  <div class="organic-theme min-h-screen bg-[#FDFBF7] text-[#3D4035] selection:bg-[#E07A5F] selection:text-white overflow-x-hidden relative">
    
    <!-- Grain Overlay -->
    <div class="fixed inset-0 pointer-events-none z-50 opacity-[0.35] mix-blend-multiply" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

    <!-- Soft Background Blobs -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E8E1D9] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"
        :style="{ transform: `translateY(${scrollY * 0.1}px)` }"
      ></div>
      <div 
        class="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-[#E3E8E0] rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"
        :style="{ transform: `translateY(${scrollY * 0.15}px)` }"
      ></div>
      <div 
        class="absolute bottom-[-20%] left-[10%] w-[60vw] h-[60vw] bg-[#F5E6E8] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"
        :style="{ transform: `translateY(${-scrollY * 0.05}px)` }"
      ></div>
    </div>

    <!-- Header -->
    <header class="fixed top-0 inset-x-0 z-40 transition-all duration-500" :class="scrollY > 50 ? 'bg-[#FDFBF7]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'">
      <div class="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-2xl bg-[#A3B18A] flex items-center justify-center text-[#FDFBF7] shadow-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-out" style="border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-fraunces font-bold text-2xl tracking-tight text-[#3D4035]">Nuxtly</span>
        </NuxtLink>

        <div class="flex items-center gap-6 text-sm font-medium">
          <template v-if="me?.user">
            <NuxtLink to="/dashboard" class="text-[#5A5E4E] hover:text-[#E07A5F] transition-colors">Dashboard</NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/sign-in" class="text-[#5A5E4E] hover:text-[#3D4035] transition-colors hidden sm:block">Sign In</NuxtLink>
            <NuxtLink to="/sign-up" class="px-6 py-3 bg-[#E07A5F] text-[#FDFBF7] hover:bg-[#D46A4F] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300" style="border-radius: 30px 15px 25px 10px / 15px 25px 15px 20px">
              Get Started
            </NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <main class="relative z-10 pt-32">
      <section class="min-h-[90vh] flex flex-col items-center justify-center px-6 relative text-center">
        <div class="max-w-4xl mx-auto relative">
          
          <div class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-white/40 text-[#A3B18A] text-sm font-medium mb-10 shadow-sm" style="border-radius: 20px 30px 20px 30px / 30px 20px 30px 20px">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            Short links + Model Context Protocol
          </div>
          
          <h1 class="font-fraunces text-6xl sm:text-8xl md:text-9xl font-bold leading-[0.95] tracking-tight mb-8 text-[#2B2D24]">
            Shorten.<br/>
            <span class="text-[#E07A5F] italic font-light">Automate.</span>
          </h1>
          
          <p class="text-lg sm:text-2xl text-[#5A5E4E] max-w-2xl mx-auto leading-relaxed mb-12 font-outfit font-light">
            Nuxtly turns long URLs into tidy short links you can manage from a dashboard, a REST API, or directly from your AI assistant.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
            <NuxtLink v-if="me?.user" to="/dashboard" class="group flex items-center justify-center gap-3 px-8 py-4 bg-[#3D4035] text-[#FDFBF7] text-lg hover:bg-[#2B2D24] hover:shadow-xl hover:-translate-y-1 transition-all duration-400" style="border-radius: 40px 20px 30px 15px / 20px 30px 15px 40px">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
              Open Dashboard
            </NuxtLink>
            <template v-else>
              <NuxtLink to="/sign-up" class="group flex items-center justify-center gap-3 px-8 py-4 bg-[#A3B18A] text-[#FDFBF7] text-lg hover:bg-[#8F9E76] hover:shadow-xl hover:-translate-y-1 transition-all duration-400 w-full sm:w-auto" style="border-radius: 20px 40px 15px 30px / 30px 15px 40px 20px">
                Get Started Free
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1.5 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </NuxtLink>
              <a href="#features" class="px-8 py-4 text-[#5A5E4E] hover:text-[#3D4035] transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Features
              </a>
            </template>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-32 px-6 relative z-10">
        <div class="max-w-6xl mx-auto space-y-32">
          
          <!-- Feature 1 -->
          <div class="flex flex-col md:flex-row items-center gap-16">
            <div class="flex-1 space-y-6">
              <div class="w-16 h-16 bg-[#F4A261]/20 text-[#E07A5F] flex items-center justify-center mb-6" style="border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
              </div>
              <h2 class="font-fraunces text-4xl md:text-5xl font-bold text-[#2B2D24]">Instant Links.</h2>
              <p class="text-xl text-[#5A5E4E] font-light leading-relaxed">
                Auto-generated codes or your own custom alias. Live click tracking. Zero friction. Beautifully simple.
              </p>
            </div>
            <div class="flex-1 w-full">
              <div class="bg-white/60 backdrop-blur-md p-8 shadow-sm border border-white/50 relative group" style="border-radius: 30px 40px 20px 40px / 40px 30px 40px 20px">
                <div class="absolute -inset-4 bg-gradient-to-tr from-[#E07A5F]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="relative font-mono text-sm text-[#5A5E4E]">
                  <p class="text-[#A3B18A] font-bold mb-4">POST /api/links</p>
                  <p>{</p>
                  <p class="pl-4">"url": <span class="text-[#E07A5F]">"https://very-long-url.com/..."</span>,</p>
                  <p class="pl-4">"alias": <span class="text-[#E07A5F]">"promo-26"</span></p>
                  <p>}</p>
                  <div class="my-4 border-t border-[#3D4035]/10 border-dashed"></div>
                  <p class="text-[#A3B18A] font-bold mb-4">200 OK</p>
                  <p>{</p>
                  <p class="pl-4">"shortUrl": <span class="text-[#E07A5F]">"nxt.ly/promo-26"</span></p>
                  <p>}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="flex flex-col md:flex-row-reverse items-center gap-16">
            <div class="flex-1 space-y-6 md:pl-12">
              <div class="w-16 h-16 bg-[#A3B18A]/20 text-[#A3B18A] flex items-center justify-center mb-6" style="border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h2 class="font-fraunces text-4xl md:text-5xl font-bold text-[#2B2D24]">REST API.</h2>
              <p class="text-xl text-[#5A5E4E] font-light leading-relaxed">
                Full CRUD over your links secured by your account session. Integrate anywhere with ease.
              </p>
            </div>
            <div class="flex-1 w-full">
              <div class="bg-white/60 backdrop-blur-md p-8 shadow-sm border border-white/50 relative group" style="border-radius: 40px 20px 40px 30px / 20px 40px 30px 40px">
                <div class="absolute -inset-4 bg-gradient-to-tl from-[#A3B18A]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="relative space-y-6 font-mono text-sm">
                  <div class="flex items-center justify-between border-b border-[#3D4035]/10 pb-3">
                    <span class="text-[#A3B18A] font-bold">GET /api/links</span>
                    <span class="text-[#5A5E4E]/60">List links</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#3D4035]/10 pb-3">
                    <span class="text-[#E07A5F] font-bold">POST /api/links</span>
                    <span class="text-[#5A5E4E]/60">Create link</span>
                  </div>
                  <div class="flex items-center justify-between border-b border-[#3D4035]/10 pb-3">
                    <span class="text-[#D4A373] font-bold">PATCH /api/links/:id</span>
                    <span class="text-[#5A5E4E]/60">Update link</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-[#3D4035] font-bold">DELETE /api/links/:id</span>
                    <span class="text-[#5A5E4E]/60">Remove link</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="flex flex-col md:flex-row items-center gap-16">
            <div class="flex-1 space-y-6">
              <div class="w-16 h-16 bg-[#D4A373]/20 text-[#D4A373] flex items-center justify-center mb-6" style="border-radius: 30% 70% 50% 50% / 60% 40% 60% 40%">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
              </div>
              <h2 class="font-fraunces text-4xl md:text-5xl font-bold text-[#2B2D24]">MCP Server.</h2>
              <p class="text-xl text-[#5A5E4E] font-light leading-relaxed">
                Create and read links directly from your AI assistant using the Model Context Protocol. Like magic.
              </p>
            </div>
            <div class="flex-1 w-full">
              <div class="bg-white/60 backdrop-blur-md p-8 shadow-sm border border-white/50 relative group" style="border-radius: 20px 40px 30px 40px / 40px 20px 40px 30px">
                <div class="absolute -inset-4 bg-gradient-to-tr from-[#D4A373]/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="relative font-mono text-sm text-[#5A5E4E] space-y-4">
                  <p class="flex gap-3"><span class="text-[#A3B18A]">AI:</span> <span>I've analyzed the marketing copy.</span></p>
                  <p class="flex gap-3"><span class="text-[#E07A5F]">User:</span> <span>Great, create a shortlink for the campaign.</span></p>
                  <p class="text-[#D4A373] italic pl-8 py-2">Calling MCP Tool: create_link...</p>
                  <p class="flex gap-3"><span class="text-[#A3B18A]">AI:</span> <span>Done. Your shortlink is <span class="font-bold text-[#3D4035]">nxt.ly/campaign-26</span></span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-[#3D4035]/5 bg-[#FDFBF7]/80 backdrop-blur-md mt-20">
      <div class="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3 text-[#3D4035]">
          <div class="w-8 h-8 rounded-xl bg-[#A3B18A]/20 flex items-center justify-center text-[#A3B18A]" style="border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-fraunces font-bold text-lg tracking-tight">Nuxtly</span>
        </div>
        <div class="text-[#5A5E4E] text-sm font-light">
          Short links with an MCP server.
        </div>
        <a href="/mcp" class="text-[#E07A5F] hover:text-[#D46A4F] text-sm font-medium transition-colors flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
          MCP Endpoint
        </a>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Outfit:wght@300;400;500;700&display=swap');

.organic-theme {
  font-family: 'Outfit', sans-serif;
}

.font-fraunces {
  font-family: 'Fraunces', serif;
}

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 15s infinite alternate ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
