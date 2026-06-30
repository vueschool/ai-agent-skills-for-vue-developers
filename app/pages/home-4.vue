<script setup lang="ts">
import { ref } from 'vue';

definePageMeta({
  layout: false,
});

const { data: me } = await useMe();
</script>

<template>
  <div class="neobrutalism-alt min-h-screen bg-[#F0E6FF] text-black overflow-x-hidden selection:bg-[#4A90E2] selection:text-white relative">
    
    <!-- Background grid -->
    <div class="absolute inset-0 pointer-events-none z-0" style="background-image: linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px); background-size: 60px 60px; opacity: 0.05;"></div>

    <!-- Header -->
    <header class="relative z-50 p-6">
      <div class="max-w-7xl mx-auto bg-white border-4 border-black rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between p-4 px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-[#FF4B4B] border-4 border-black rounded-lg flex items-center justify-center transform rotate-6">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-lexend font-black text-3xl tracking-tighter uppercase mt-1">Nuxtly.</span>
        </NuxtLink>

        <div class="flex items-center gap-4 font-lexend font-bold text-lg uppercase">
          <template v-if="me?.user">
            <NuxtLink to="/dashboard" class="btn-squishy bg-[#4A90E2] text-white">Dashboard</NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/sign-in" class="hover:text-[#FF4B4B] transition-colors hidden sm:block mr-4">Sign In</NuxtLink>
            <NuxtLink to="/sign-up" class="btn-squishy bg-[#F5A623]">Join Now</NuxtLink>
          </template>
        </div>
      </div>
    </header>

    <!-- Main Hero -->
    <main class="relative z-10 pt-10 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-16">
      <!-- Top Title Area -->
      <div class="text-center flex flex-col items-center">
        <div class="bg-[#FF4B4B] text-white font-lexend font-black uppercase border-4 border-black px-6 py-2 rounded-full transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 text-xl inline-block">
          The short link app of the future 🚀
        </div>
        <h1 class="font-lexend font-black text-[5rem] sm:text-[7rem] leading-[0.9] tracking-tighter uppercase max-w-5xl mx-auto text-shadow-brutal">
          Create Links. <br>
          <span class="text-[#4A90E2]">Automate Work.</span>
        </h1>
        <p class="font-bold text-2xl max-w-2xl mx-auto mt-8 bg-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-2xl">
          Everything you need for link management, integrated seamlessly with Model Context Protocol.
        </p>

        <div class="mt-12">
          <NuxtLink v-if="me?.user" to="/dashboard" class="btn-squishy bg-[#4A90E2] text-white text-3xl px-12 py-6 rounded-[2rem]">
            Go To Dashboard
          </NuxtLink>
          <NuxtLink v-else to="/sign-up" class="btn-squishy bg-[#FF4B4B] text-white text-3xl px-12 py-6 rounded-[2rem]">
            Get Started For Free
          </NuxtLink>
        </div>
      </div>

      <!-- Features Masonry / Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        <!-- Big feature block -->
        <div class="md:col-span-8 bg-[#F5A623] border-4 border-black rounded-[2rem] p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform hover:scale-[1.02] transition-transform">
          <div class="bg-white border-4 border-black rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-black"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>
          </div>
          <h2 class="font-lexend font-black text-5xl uppercase mb-4">MCP Server Inside</h2>
          <p class="font-bold text-2xl">Create and read links directly from your AI assistant using the Model Context Protocol. Pure magic.</p>
        </div>
        
        <!-- Small feature blocks -->
        <div class="md:col-span-4 flex flex-col gap-8">
          <div class="bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-1 transform hover:-rotate-2 transition-transform">
            <h3 class="font-lexend font-black text-3xl uppercase mb-2 text-[#4A90E2]">Instant Links</h3>
            <p class="font-bold text-lg">Auto-generated codes or custom aliases with live click tracking.</p>
          </div>
          <div class="bg-[#4A90E2] text-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex-1 transform hover:rotate-2 transition-transform">
            <h3 class="font-lexend font-black text-3xl uppercase mb-2 text-white">REST API</h3>
            <p class="font-bold text-lg">Full CRUD over your links secured by your account session.</p>
          </div>
        </div>
      </div>
      
      <!-- API Code snippet visual -->
      <div class="bg-black text-[#00FF66] border-4 border-black rounded-[2rem] p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] font-mono text-lg sm:text-xl font-bold relative overflow-hidden transform -rotate-1 mt-10">
        <div class="flex items-center gap-3 mb-8 border-b-4 border-[#333] pb-6">
          <div class="w-6 h-6 bg-[#FF4B4B] rounded-full border-2 border-[#333]"></div>
          <div class="w-6 h-6 bg-[#F5A623] rounded-full border-2 border-[#333]"></div>
          <div class="w-6 h-6 bg-[#4A90E2] rounded-full border-2 border-[#333]"></div>
          <span class="ml-4 text-white uppercase tracking-widest font-lexend text-sm">Terminal</span>
        </div>
        <p class="mb-4">> curl -X POST https://nuxtly.com/api/links \</p>
        <p class="mb-4">  -H "Content-Type: application/json" \</p>
        <p class="mb-8">  -d '{"url": "https://example.com/very-long", "alias": "promo"}'</p>
        <p class="text-[#4A90E2] mb-4">{"shortUrl": "nxt.ly/promo", "status": "success"}</p>
        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F5A623] rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-white border-t-4 border-black py-12 px-6">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 font-bold text-xl uppercase">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-black rounded-xl flex items-center justify-center rotate-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <span class="font-lexend font-black text-3xl">NUXTLY</span>
        </div>
        
        <div class="flex items-center gap-8">
          <a href="/mcp" class="hover:text-[#4A90E2] transition-colors underline decoration-4 underline-offset-8">MCP Setup</a>
          <a href="#" class="hover:text-[#FF4B4B] transition-colors underline decoration-4 underline-offset-8">Docs</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;900&family=Space+Mono:wght@700&display=swap');

.neobrutalism-alt {
  font-family: 'Space Mono', monospace;
}

.font-lexend {
  font-family: 'Lexend', sans-serif;
}

.btn-squishy {
  border: 4px solid #000;
  box-shadow: 6px 6px 0px 0px rgba(0,0,0,1);
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
}

.btn-squishy:hover {
  transform: translateY(2px) scale(0.98);
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
}

.btn-squishy:active {
  transform: translateY(6px) scale(0.95);
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,1);
}

.text-shadow-brutal {
  text-shadow: 5px 5px 0px #000;
}
</style>
