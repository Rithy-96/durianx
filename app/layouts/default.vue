<template>
  <div class="min-h-screen font-sans antialiased selection:bg-orange-100 selection:text-orange-600">
    <nav class="sticky top-0 z-50 bg-white/50 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          
          <nuxt-link to="/" class="flex items-center gap-x-3 group relative">
            <div class="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5 bg-white flex items-center justify-center transition-all duration-500 ease-out group-hover:shadow-xl group-hover:shadow-green-500/20 group-hover:-translate-y-1 group-hover:rotate-6">
              <div class="absolute inset-0 bg-gradient-to-tr from-green-50 to-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src="/favicon.ico" alt="Logo" class="relative z-10 w-9 h-9 object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
            </div>
            <span class="text-2xl font-bold tracking-tight text-gray-800 flex items-center">
              <span class="bg-gradient-to-r from-green-600 via-blue-600 to-sky-600 bg-clip-text text-transparent bg-[length:200%_auto] transition-all duration-700 group-hover:bg-[right_center]">Durian</span>
              <span class="text-orange-500 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 ml-0.5">X</span>
            </span>
          </nuxt-link>

          <div class="hidden md:flex items-center gap-x-1 bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
            <NuxtLink
              v-for="item in ['Home', 'Menu', 'Offers', 'Contact', 'About']"
              :key="item"
              :to="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
              class="px-5 py-2 text-gray-600 hover:text-orange-600 font-semibold text-sm transition-all duration-300 rounded-xl hover:bg-white hover:shadow-sm active:scale-95"
              exact-active-class="bg-white text-orange-600 shadow-sm"
              active-class="bg-orange-50 text-orange-600"
            >
              {{ item }}
            </NuxtLink>
          </div>

          <div class="hidden md:block">
            <button class="group px-7 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-sm rounded-2xl shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-x-2">
              Order Now
              <span class="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
            </button>
          </div>

          <button @click="mobileMenuOpen = true" class="md:hidden p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-2xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <transition name="fade">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-[100]">
        <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" @click="mobileMenuOpen = false"></div>
        <aside class="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl flex flex-col animate-slide-in">
          <div class="flex items-center justify-between p-6 border-b border-gray-50">
            <div class="flex items-center gap-x-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center shadow-lg">
                <span class="text-white font-black text-xl">D</span>
              </div>
              <span class="text-xl font-bold text-gray-800">Durian<span class="text-orange-500">X</span></span>
            </div>
            <button @click="mobileMenuOpen = false" class="p-2 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav class="p-6 space-y-2">
            <NuxtLink
              v-for="link in ['Home', 'Menu', 'Offers', 'Contact', 'About']"
              :key="link"
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="block py-4 px-5 rounded-2xl text-gray-700 font-bold hover:bg-orange-50 hover:text-orange-600 transition-all"
              exact-active-class="bg-orange-100 text-orange-600"
              active-class="bg-orange-50 text-orange-600"
              @click="mobileMenuOpen = false"
            >
              {{ link }}
            </NuxtLink>
            <button class="w-full mt-6 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl active:scale-95 transition-all">
              Order Now
            </button>
          </nav>
        </aside>
      </div>
    </transition>

    <slot />

    <footer class="bg-gray-950 text-white pt-20 pb-10">
      <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div class="md:col-span-5 space-y-6">
            <nuxt-link to="/" class="flex items-center gap-x-4 group inline-flex">
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:rotate-6">
                <img src="/favicon.ico" alt="Logo" class="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
              </div>
              <span class="text-3xl font-bold tracking-tight text-white flex items-center">
                <span>Durian</span>
                <span class="text-orange-500 ml-1 transition-transform group-hover:scale-125 group-hover:rotate-12">X</span>
              </span>
            </nuxt-link>
            <p class="text-gray-400 text-lg leading-relaxed max-w-sm">
              Bringing the world's most unique flavors to your doorstep. Experience the <span class="text-white font-semibold">DurianX</span> difference.
            </p>
          </div>

          <div class="md:col-span-2">
            <h4 class="text-orange-500 font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul class="space-y-4">
              <li v-for="l in ['Menu', 'Offers', 'About', 'Contact']" :key="l">
                <NuxtLink :to="`/${l.toLowerCase()}`" class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                  <span class="h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {{ l }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="md:col-span-2">
            <h4 class="text-orange-500 font-bold uppercase tracking-widest text-xs mb-8">Help</h4>
            <ul class="space-y-4 text-gray-400">
              <li><NuxtLink to="/faqs" class="hover:text-white transition-colors">FAQs</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-white transition-colors">Terms</NuxtLink></li>
            </ul>
          </div>

          <div class="md:col-span-3">
            <h4 class="text-orange-500 font-bold uppercase tracking-widest text-xs mb-8">Get Social</h4>
            <div class="flex gap-x-3">
              <a v-for="i in 3" :key="i" href="#" class="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 DurianX. All rights reserved.</p>
          <p class="flex items-center gap-x-2">
            Crafted with <span class="animate-pulse text-rose-500">❤️</span> by DurianX Team
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const mobileMenuOpen = ref(false);
</script>

<style>
/* Smooth entry for Mobile Menu */
@keyframes slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Custom Playful Scrollbar for v4 feel */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: #e2e8f0;
  border-radius: 20px;
  border: 3px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover { background: #cbd5e1; background-clip: content-box; }
</style>