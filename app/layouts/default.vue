<template>
  <div>
    <!-- Navigation Bar -->
    <nav
      class="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center py-5">
          <!-- Logo -->
          <div class="flex items-center gap-x-3">
            <div
              class="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-inner ring-1 ring-white/30"
            >
              <span class="text-white text-2xl font-black tracking-[-1px] leading-none">D</span>
            </div>
            <span
              class="text-3xl font-bold bg-gradient-to-r from-orange-600 via-rose-600 to-orange-600 bg-clip-text text-transparent tracking-[-1px]"
            >urianX</span>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-x-2">
            <NuxtLink
              to="/"
              class="px-5 py-2.5 text-gray-700 hover:text-orange-600 font-semibold text-base transition-all duration-300 rounded-2xl hover:bg-orange-50"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/menu"
              class="px-5 py-2.5 text-gray-700 hover:text-orange-600 font-semibold text-base transition-all duration-300 rounded-2xl hover:bg-orange-50"
            >
              Menu
            </NuxtLink>
            <NuxtLink
              to="/offers"
              class="px-5 py-2.5 text-gray-700 hover:text-orange-600 font-semibold text-base transition-all duration-300 rounded-2xl hover:bg-orange-50"
            >
              Offers
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-5 py-2.5 text-gray-700 hover:text-orange-600 font-semibold text-base transition-all duration-300 rounded-2xl hover:bg-orange-50"
            >
              Contact
            </NuxtLink>
          </div>

          <!-- CTA Button -->
          
          <div class="hidden md:block">
            <button
              class="px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold text-base rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-px active:scale-[0.97] transition-all duration-300 flex items-center gap-x-2"
            >
              Order Now
              <span class="text-lg leading-none">→</span>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-2xl transition-all duration-300"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.25"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <slot />

    <!-- Footer -->
    <footer class="bg-gray-950 text-white pt-16 pb-12">
      <div class="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          <!-- Brand Column -->
          <div class="md:col-span-5">
            <div class="flex items-center gap-x-3 mb-6">
              <div
                class="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center"
              >
                <span class="text-white text-2xl font-black tracking-[-1px]">D</span>
              </div>
              <span class="text-3xl font-bold tracking-[-1px]">urian</span>
            </div>
            <p class="text-gray-400 text-[15px] leading-relaxed max-w-xs">
              Serving happiness on a plate since 2024. Fresh, fast, and always flavorful.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="md:col-span-2">
            <h4 class="font-semibold text-white text-sm tracking-[0.5px] uppercase mb-6">Company</h4>
            <ul class="space-y-4 text-gray-400 text-[15px]">
              <li>
                <NuxtLink to="/about" class="hover:text-white transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/menu" class="hover:text-white transition-colors">Our Menu</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/offers" class="hover:text-white transition-colors">Special Offers</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-white transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div class="md:col-span-2">
            <h4 class="font-semibold text-white text-sm tracking-[0.5px] uppercase mb-6">Support</h4>
            <ul class="space-y-4 text-gray-400 text-[15px]">
              <li>
                <NuxtLink to="/faqs" class="hover:text-white transition-colors">FAQs</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/refund-policy" class="hover:text-white transition-colors">Refund Policy</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Follow Us -->
          <div class="md:col-span-3">
            <h4 class="font-semibold text-white text-sm tracking-[0.5px] uppercase mb-6">Follow Us</h4>
            <div class="flex gap-x-4">
              <!-- Facebook -->
              <NuxtLink
                to="https://facebook.com"
                target="_blank"
                class="w-10 h-10 bg-gray-900 hover:bg-orange-500 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-4h-3.808c-3.596 0-5.192 1.583-5.192 4.615v1.385z" />
                </svg>
              </NuxtLink>

              <!-- Instagram -->
              <NuxtLink
                to="https://instagram.com"
                target="_blank"
                class="w-10 h-10 bg-gray-900 hover:bg-orange-500 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.21 0-4-1.79-4-4 0-2.21 1.79-4 4-4 2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.796 0 1.441-.645 1.441-1.44s-.645-1.44-1.441-1.44z" />
                </svg>
              </NuxtLink>

              <!-- X (Twitter) -->
              <NuxtLink
                to="https://x.com"
                target="_blank"
                class="w-10 h-10 bg-gray-900 hover:bg-orange-500 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25l-7.165 8.159L3.5 2.25H.75l7.41 10.728L.75 21.75h2.25l6.3-7.2 7.2 7.2h2.25l-7.41-10.728L21.75.75h-2.25z" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-y-4 text-gray-400 text-sm">
          <p>© 2026 Durian. All rights reserved.</p>
          <p class="flex items-center gap-x-1">
            Crafted with 
            <span class="text-orange-400">❤️</span> 
            for food lovers
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>