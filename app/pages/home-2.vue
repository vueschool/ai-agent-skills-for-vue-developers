<script setup lang="ts">
import { useMe } from '#imports';

definePageMeta({
  layout: false,
});

const { data: me } = await useMe();
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-[#EFEFEF] font-sans selection:bg-[#EFEFEF] selection:text-[#050505] border-x-[8px] md:border-x-[16px] border-[#050505] relative overflow-x-hidden">
    
    <!-- Background Noise -->
    <div class="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-screen" style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;)"></div>

    <!-- Masthead -->
    <header class="pt-12 pb-6 border-b-[6px] border-[#EFEFEF] mb-1">
      <div class="flex justify-between items-end px-2 md:px-4 mb-6 text-[8px] md:text-[10px] tracking-[0.2em] uppercase font-bold opacity-80">
        <span class="hidden md:inline">The Nuxtly Chronicle</span>
        <span>Vol. I — No. 1</span>
        <span>Tuesday, Jun 30, 2026</span>
      </div>
      <h1 class="font-serif text-center text-7xl sm:text-8xl md:text-[13rem] leading-[0.75] tracking-tight uppercase hover:scale-[1.02] transition-transform duration-700 cursor-default">
        Nuxtly
      </h1>
    </header>
    
    <!-- Sub-nav -->
    <div class="border-b border-[#EFEFEF] py-3 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold mb-12 md:mb-16">
      <div class="flex gap-8">
        <NuxtLink to="/mcp" class="hover:text-[#EFEFEF]/50 transition-colors">MCP Server</NuxtLink>
        <NuxtLink to="/api" class="hover:text-[#EFEFEF]/50 transition-colors">REST API</NuxtLink>
      </div>
      <div class="flex gap-8">
        <NuxtLink v-if="me?.user" to="/dashboard" class="hover:text-[#EFEFEF]/50 transition-colors">Dashboard</NuxtLink>
        <template v-else>
          <NuxtLink to="/sign-in" class="hover:text-[#EFEFEF]/50 transition-colors">Sign In</NuxtLink>
          <NuxtLink to="/sign-up" class="hover:text-[#050505] bg-[#EFEFEF] px-4 py-1 transition-colors">Subscribe</NuxtLink>
        </template>
      </div>
    </div>

    <!-- Main Content Grid -->
    <main class="grid grid-cols-1 lg:grid-cols-12 gap-0 px-2 md:px-4">
      
      <!-- Left Column: Hero Article -->
      <article class="lg:col-span-8 lg:border-r border-[#EFEFEF]/30 lg:pr-12 pb-16 lg:pb-0">
        <h2 class="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.85] uppercase mb-12 text-center lg:text-left">
          A New Era<br/><span class="italic text-[#EFEFEF]/70 lowercase text-5xl md:text-7xl lg:text-[6rem]">for</span> URLs.
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-sm leading-relaxed text-justify font-light">
          <div>
            <p class="mb-6">
              <span class="float-left text-7xl font-serif leading-[0.7] pr-4 pt-3 pb-2">T</span>he landscape of link management has remained stagnant for over a decade. Nuxtly emerges as a sophisticated solution for the modern web, combining elegant design with powerful developer tools. It is not merely a utility; it is a meticulously crafted platform designed for those who appreciate the finer details of the internet architecture.
            </p>
            <p class="mb-6">
              By offering a seamless integration of a Model Context Protocol (MCP) server, Nuxtly bridges the gap between human intent and artificial intelligence. Your AI assistants can now generate, manage, and analyze short links autonomously, weaving URL management directly into your conversational workflows without breaking context.
            </p>
            <div class="border-t border-b border-[#EFEFEF]/30 py-6 my-8 text-center italic font-serif text-2xl md:text-3xl">
              "The URL is the most fundamental primitive of the web. It deserves to be treated with respect."
            </div>
          </div>
          <div>
            <p class="mb-6">
              Furthermore, the platform provides a robust REST API, allowing developers to embed link shortening capabilities into any application with absolute ease. The dashboard, a masterclass in minimalist design, offers real-time analytics and link management without the clutter of traditional interfaces.
            </p>
            <p class="mb-8">
              Whether you are an individual creator looking to brand your links, or an enterprise requiring programmatic URL generation at scale, Nuxtly provides the infrastructure necessary to execute with precision. The era of chaotic, unbranded short links is over.
            </p>
            <div class="bg-[#EFEFEF] text-[#050505] p-8 text-center group cursor-pointer">
              <NuxtLink v-if="me?.user" to="/dashboard" class="block">
                <span class="block font-serif text-3xl italic mb-2 group-hover:scale-105 transition-transform">Access Dashboard</span>
                <span class="text-[10px] uppercase tracking-[0.2em] font-bold">Manage your links &rarr;</span>
              </NuxtLink>
              <NuxtLink v-else to="/sign-up" class="block">
                <span class="block font-serif text-3xl italic mb-2 group-hover:scale-105 transition-transform">Begin Subscription</span>
                <span class="text-[10px] uppercase tracking-[0.2em] font-bold">Create your account &rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </article>

      <!-- Right Column: Sidebar Features -->
      <aside class="lg:col-span-4 flex flex-col lg:pl-12">
        
        <!-- Sidebar Item 1 -->
        <div class="border-t lg:border-t-0 border-[#EFEFEF]/30 pt-12 lg:pt-0 pb-12">
          <h3 class="font-serif text-4xl uppercase mb-6 text-center lg:text-left">The MCP Protocol</h3>
          <p class="text-sm font-light leading-relaxed mb-8 text-justify">
            Artificial Intelligence requires tools to interact with the world. Nuxtly provides a native MCP server, enabling LLMs to create and manage links directly from your chat interface.
          </p>
          <div class="border border-[#EFEFEF]/30 p-6 font-mono text-[10px] uppercase tracking-wider leading-loose">
            <div class="flex justify-between border-b border-[#EFEFEF]/10 pb-2 mb-2">
              <span class="opacity-50">Status</span>
              <span class="text-[#00FF00]">Online</span>
            </div>
            <div class="flex justify-between border-b border-[#EFEFEF]/10 pb-2 mb-2">
              <span class="opacity-50">Endpoint</span>
              <span>/mcp</span>
            </div>
            <div class="flex justify-between">
              <span class="opacity-50">Capabilities</span>
              <span>Read, Write</span>
            </div>
          </div>
        </div>

        <!-- Sidebar Item 2 -->
        <div class="border-t border-[#EFEFEF]/30 pt-12 pb-12">
          <h3 class="font-serif text-4xl uppercase mb-6 text-center lg:text-left">Developer API</h3>
          <p class="text-sm font-light leading-relaxed mb-8 text-justify">
            A RESTful architecture designed for reliability and speed. Secure your endpoints with personal access tokens and integrate within minutes.
          </p>
          <ul class="text-[10px] font-mono tracking-widest uppercase space-y-4">
            <li class="flex flex-col sm:flex-row justify-between border-b border-[#EFEFEF]/10 pb-2 gap-2">
              <span>POST /api/links</span>
              <span class="opacity-50">200 OK</span>
            </li>
            <li class="flex flex-col sm:flex-row justify-between border-b border-[#EFEFEF]/10 pb-2 gap-2">
              <span>GET /api/links</span>
              <span class="opacity-50">200 OK</span>
            </li>
            <li class="flex flex-col sm:flex-row justify-between border-b border-[#EFEFEF]/10 pb-2 gap-2">
              <span>DELETE /api/links/:id</span>
              <span class="opacity-50">204 NO CONTENT</span>
            </li>
          </ul>
        </div>
        
        <!-- Advertisement Placeholder -->
        <div class="mt-auto border-[4px] border-[#EFEFEF] p-8 text-center group overflow-hidden relative">
          <div class="absolute inset-0 bg-[#EFEFEF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div class="relative z-10 group-hover:text-[#050505] transition-colors duration-500">
            <span class="block text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Advertisement</span>
            <span class="block font-serif text-3xl italic mb-4">Elevate your brand.</span>
            <NuxtLink to="/sign-up" class="inline-block border-b border-current pb-1 text-xs uppercase tracking-widest font-bold">
              Upgrade to Pro &rarr;
            </NuxtLink>
          </div>
        </div>

      </aside>
    </main>

    <!-- Footer -->
    <footer class="mt-24 border-t-[6px] border-[#EFEFEF] pt-12 pb-16 px-4 text-center">
      <p class="font-serif text-5xl md:text-7xl uppercase mb-8">Nuxtly</p>
      <div class="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] tracking-[0.2em] uppercase font-bold opacity-80">
        <NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink>
        <NuxtLink to="/terms" class="hover:underline">Terms of Service</NuxtLink>
        <a href="#" class="hover:underline">Contact the Editors</a>
        <a href="#" class="hover:underline">Subscribe</a>
      </div>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,600&family=Albert+Sans:wght@300;400;600;700&display=swap');

.font-serif {
  font-family: 'Bodoni Moda', serif;
}
.font-sans {
  font-family: 'Albert Sans', sans-serif;
}
</style>
