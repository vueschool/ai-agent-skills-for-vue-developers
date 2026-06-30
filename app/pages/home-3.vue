<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

const { data: me } = await useMe();
</script>

<template>
  <div class="neobrutalism-theme min-h-screen bg-[#FFDE00] text-black overflow-x-hidden selection:bg-[#FF0055] selection:text-white">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 bg-[#FFDE00] border-b-4 border-black px-4 sm:px-8 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="w-12 h-12 bg-[#FF0055] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rounded-full rotate-[-10deg] hover:rotate-[15deg] transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <span class="font-bricolage font-black text-3xl tracking-tighter uppercase mt-1">Nuxtly</span>
      </NuxtLink>
      <div class="flex items-center gap-6 font-bricolage font-bold text-lg">
        <template v-if="me?.user">
          <NuxtLink to="/dashboard" class="btn-brutal bg-[#00FF66] px-6 py-2 rounded-full uppercase tracking-wide">Dashboard</NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/sign-in" class="hover:underline underline-offset-4 decoration-4 hidden sm:block uppercase">Login</NuxtLink>
          <NuxtLink to="/sign-up" class="btn-brutal bg-[#00E5FF] px-6 py-2 rounded-full uppercase tracking-wide">Get Started!</NuxtLink>
        </template>
      </div>
    </nav>

    <!-- Marquee Banner -->
    <div class="mt-[84px] bg-[#9D00FF] border-b-4 border-black text-white py-2 overflow-hidden flex whitespace-nowrap">
      <div class="animate-marquee font-bricolage font-bold text-xl flex items-center gap-8 uppercase tracking-widest">
        <span>Shorten URLs</span>
        <span>•</span>
        <span>Automate Everything</span>
        <span>•</span>
        <span>Model Context Protocol</span>
        <span>•</span>
        <span>REST API</span>
        <span>•</span>
        <span>Shorten URLs</span>
        <span>•</span>
        <span>Automate Everything</span>
        <span>•</span>
        <span>Model Context Protocol</span>
        <span>•</span>
        <span>REST API</span>
        <span>•</span>
      </div>
    </div>

    <!-- Hero Section -->
    <main class="relative z-10 px-4 sm:px-8 pt-16 pb-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div class="lg:w-1/2 flex flex-col gap-8 relative z-10">
        <div class="inline-block bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 py-2 rounded-xl font-bold uppercase tracking-wider w-max -rotate-2">
          🔥 The Ultimate Link Tool
        </div>
        <h1 class="font-bricolage font-black text-6xl sm:text-8xl leading-[0.85] tracking-tighter uppercase">
          Shorten <br>
          <span class="text-[#FF0055] inline-block hover:scale-110 transition-transform cursor-crosshair">Faster.</span> <br>
          Build <br>
          <span class="bg-[#00E5FF] px-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl inline-block mt-2 rotate-2">Better.</span>
        </h1>
        <p class="text-2xl font-bold max-w-lg mt-4 leading-tight">
          Turn long URLs into tidy short links. Manage them via Dashboard, REST API, or AI assistant.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-6 mt-4">
          <NuxtLink v-if="me?.user" to="/dashboard" class="btn-brutal bg-[#FF0055] text-white px-8 py-4 rounded-2xl text-xl font-black uppercase tracking-wider w-full sm:w-auto text-center">
            Open Dashboard
          </NuxtLink>
          <NuxtLink v-else to="/sign-up" class="btn-brutal bg-[#FF0055] text-white px-8 py-4 rounded-2xl text-xl font-black uppercase tracking-wider w-full sm:w-auto text-center">
            Start Free Now
          </NuxtLink>
          <a href="#features" class="font-bold text-xl uppercase underline decoration-4 underline-offset-4 hover:text-[#FF0055] transition-colors">
            See Features
          </a>
        </div>
      </div>
      
      <!-- Hero Image / Graphic -->
      <div class="lg:w-1/2 relative w-full h-[500px]">
        <div class="absolute top-10 left-10 w-full h-full bg-[#00FF66] border-4 border-black rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-white border-4 border-black rounded-[3rem] p-8 flex flex-col shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-4 hover:translate-x-4 hover:shadow-[32px_32px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
          <div class="flex items-center gap-3 border-b-4 border-black pb-4 mb-6">
            <div class="w-5 h-5 rounded-full bg-[#FF0055] border-2 border-black"></div>
            <div class="w-5 h-5 rounded-full bg-[#FFDE00] border-2 border-black"></div>
            <div class="w-5 h-5 rounded-full bg-[#00FF66] border-2 border-black"></div>
          </div>
          <div class="flex-1 flex flex-col gap-6 font-mono text-lg font-bold">
            <div class="bg-gray-100 p-4 border-4 border-black rounded-xl">
              > AI: Generate a link for the promo.
            </div>
            <div class="bg-[#00E5FF] text-black p-4 border-4 border-black rounded-xl self-end text-right">
              Creating nxt.ly/promo26...
            </div>
            <div class="bg-gray-100 p-4 border-4 border-black rounded-xl">
              > AI: Done! It's ready to share.
            </div>
            <div class="mt-auto flex justify-center">
              <div class="bg-[#9D00FF] text-white px-6 py-3 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-bounce font-bricolage uppercase tracking-wider">
                MCP Powered!
              </div>
            </div>
          </div>
        </div>
        
        <!-- Floating Stickers -->
        <div class="absolute -top-8 -right-8 bg-[#FFDE00] border-4 border-black w-24 h-24 rounded-full flex items-center justify-center font-black text-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-12 z-20">
          100%
        </div>
        <div class="absolute -bottom-8 -left-8 bg-white border-4 border-black px-6 py-2 rounded-xl flex items-center justify-center font-black text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-20">
          FAST ⚡
        </div>
      </div>
    </main>

    <!-- Features Section -->
    <section id="features" class="border-t-4 border-black bg-[#9D00FF] py-24 px-4 sm:px-8 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: radial-gradient(black 3px, transparent 3px); background-size: 30px 30px;"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <h2 class="font-bricolage font-black text-6xl text-white uppercase text-center mb-16 shadow-text">
          Why Use Nuxtly?
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="bg-[#00E5FF] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
            <h3 class="font-bricolage font-black text-3xl uppercase mb-4">Instant Links</h3>
            <p class="font-bold text-lg leading-snug">Auto-generated codes or your own custom aliases. Live click tracking. Zero friction.</p>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-[#00FF66] border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform md:-translate-y-8">
            <div class="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-black"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="font-bricolage font-black text-3xl uppercase mb-4">REST API</h3>
            <p class="font-bold text-lg leading-snug">Full CRUD over your links secured by your account session. Integrate anywhere.</p>
          </div>
          
          <!-- Card 3 -->
          <div class="bg-[#FF0055] text-white border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <div class="w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
            </div>
            <h3 class="font-bricolage font-black text-3xl uppercase mb-4">MCP Server</h3>
            <p class="font-bold text-lg leading-snug">Create and read links directly from your AI assistant using the Model Context Protocol.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t-4 border-black bg-white py-12 px-4 sm:px-8">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-bold">
        <div class="flex items-center gap-3">
           <div class="w-8 h-8 bg-[#FFDE00] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-bricolage font-black text-2xl uppercase mt-1 tracking-tighter">Nuxtly</span>
        </div>
        <p class="text-xl uppercase">Short Links + MCP</p>
        <a href="/mcp" class="hover:text-[#FF0055] transition-colors underline decoration-4 underline-offset-4 uppercase">
          MCP Endpoint
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@700&display=swap');

.neobrutalism-theme {
  font-family: 'JetBrains Mono', monospace;
}

.font-bricolage {
  font-family: 'Bricolage Grotesque', sans-serif;
}

.btn-brutal {
  border: 4px solid #000;
  box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
  transition: all 0.15s ease;
  display: inline-block;
}

.btn-brutal:hover {
  transform: translate(2px, 2px);
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}

.btn-brutal:active {
  transform: translate(6px, 6px);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}

.shadow-text {
  text-shadow: 4px 4px 0px #000;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 15s linear infinite;
  min-width: 200%;
}
</style>
