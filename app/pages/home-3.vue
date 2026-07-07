<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Parallax Effect - Green Theme -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    >
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Text Content -->
          <div class="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div
              class="inline-block px-4 py-1.5 bg-green-200 rounded-full text-green-700 text-sm font-semibold mb-4"
            >
              🌿 20% OFF First Order
            </div>
            <h1
              class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800"
            >
              Taste the
              <span
                class="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
                >Magic</span
              >
              <br />of Fresh Food
            </h1>
            <p class="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              Handcrafted dishes made with love, using the freshest ingredients. Delivered
              hot to your doorstep.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <nuxt-link
                to="/orders"
                class="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Order Now
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </nuxt-link>
              <NuxtLink
                to="/video"
                class="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Watch Video
              </NuxtLink>
            </div>
            <div class="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div class="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="user"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="user"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                  alt="user"
                />
              </div>
              <div class="text-sm text-gray-600">
                <span class="font-bold text-gray-800">50k+</span> Happy Customers
              </div>
            </div>
          </div>

          <!-- Hero Image with Floating Animation -->
          <div class="relative flex justify-center lg:justify-end animate-float">
            <div class="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full opacity-30 blur-2xl"
              ></div>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop"
                alt="Delicious Food"
                class="relative rounded-full object-cover w-full h-full shadow-2xl border-4 border-white/50"
              />
              <div
                class="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-xl animate-bounce-slow"
              >
                <span class="text-3xl">🍔</span>
              </div>
              <div
                class="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-xl animate-bounce-slow delay-150"
              >
                <span class="text-3xl">🥗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Dishes Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 space-y-4">
          <span class="text-green-600 font-semibold tracking-wide uppercase"
            >Signature Dishes</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
            Our Featured
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500"
              >Delicacies</span
            >
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            Crafted by world-class chefs using authentic recipes and freshest ingredients
          </p>

          <!-- Play Animation Transaction Button - Green Theme -->
          <div class="flex justify-center mt-6">
            <button
              @click="playStyleTransaction"
              :disabled="isAnimating"
              class="group relative px-8 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
            >
              <span class="relative z-10 flex items-center gap-2">
                <svg 
                  class="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Style Animation Transaction
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Dish Card 1 -->
          <div
            ref="dishCards"
            :class="[
              'group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3',
              { 'animate-style-transaction': isAnimating }
            ]"
            data-card-index="0"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
                alt="Classic Burger"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-green-600 shadow-md"
              >
                ★ 4.9
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Classic Cheeseburger</h3>
              <p class="text-gray-500 text-sm mb-4">
                Juicy beef patty with melted cheddar, fresh lettuce, and special sauce
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">$12.99</span>
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 2 -->
          <div
            ref="dishCards"
            :class="[
              'group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3',
              { 'animate-style-transaction': isAnimating }
            ]"
            data-card-index="1"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop"
                alt="Italian Pizza"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-green-600 shadow-md"
              >
                ★ 4.8
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Margherita Pizza</h3>
              <p class="text-gray-500 text-sm mb-4">
                Wood-fired crust, fresh mozzarella, basil, and tomato sauce
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">$16.49</span>
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 3 -->
          <div
            ref="dishCards"
            :class="[
              'group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3',
              { 'animate-style-transaction': isAnimating }
            ]"
            data-card-index="2"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
                alt="Sushi Roll"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-green-600 shadow-md"
              >
                ★ 4.9
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Rainbow Sushi Roll</h3>
              <p class="text-gray-500 text-sm mb-4">
                Fresh salmon, avocado, cucumber, and sesame seeds
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">$21.99</span>
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 4 -->
          <div
            ref="dishCards"
            :class="[
              'group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3',
              { 'animate-style-transaction': isAnimating }
            ]"
            data-card-index="3"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a4f7b6?w=600&h=400&fit=crop"
                alt="Pasta"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-green-600 shadow-md"
              >
                ★ 4.7
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-bold text-gray-800 mb-2">Creamy Alfredo Pasta</h3>
              <p class="text-gray-500 text-sm mb-4">
                Fettuccine in rich parmesan cream sauce with grilled chicken
              </p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">$14.99</span>
                <button
                  class="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offer Banner with Glow Effect - Green Theme -->
    <section
      class="py-16 bg-gradient-to-r from-green-600 to-emerald-600 mx-4 sm:mx-6 lg:mx-8 rounded-3xl shadow-2xl relative overflow-hidden group"
    >
      <div
        class="absolute inset-0 bg-white/10 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-700"
      ></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          Weekend Special Offer
        </h2>
        <p class="text-green-100 text-xl mb-6">
          Get 30% off on all orders above $25. Use code:
          <span class="font-mono bg-white/20 px-3 py-1 rounded-full">FOODIE30</span>
        </p>
        <button
          class="px-8 py-3 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Grab Deal Now
        </button>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-green-600 font-semibold uppercase tracking-wide"
            >Testimonials</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            What Our
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500"
              >Customers Say</span
            >
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                class="w-14 h-14 rounded-full object-cover"
                alt="customer"
              />
              <div>
                <h4 class="font-bold text-gray-800">Emily Johnson</h4>
                <div class="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Absolutely delicious! The food arrived hot and fresh. The burger was juicy
              and the fries were perfectly crispy. Best delivery experience ever!"
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                class="w-14 h-14 rounded-full object-cover"
                alt="customer"
              />
              <div>
                <h4 class="font-bold text-gray-800">Michael Chen</h4>
                <div class="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "The sushi rolls are incredible! Fresh ingredients and beautiful
              presentation. This is my go-to spot for Japanese cuisine."
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div class="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                class="w-14 h-14 rounded-full object-cover"
                alt="customer"
              />
              <div>
                <h4 class="font-bold text-gray-800">Sarah Williams</h4>
                <div class="flex text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Fast delivery and amazing pasta! The creamy alfredo sauce is to die for.
              Highly recommend this place for Italian cravings!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section - Green Theme -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 class="text-3xl font-bold text-gray-800 mb-3">
            Subscribe to Our Newsletter
          </h3>
          <p class="text-gray-600 mb-6">
            Get exclusive offers, new menu updates, and cooking tips straight to your
            inbox.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              class="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              class="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Page meta for SEO
definePageMeta({
  layout: "default",
});

useHead({
  title: "Foodie - Taste the Magic of Fresh Food",
  meta: [
    {
      name: "description",
      content:
        "Discover delicious handcrafted dishes made with love. Order now and enjoy 20% off your first order!",
    },
  ],
});

// Animation Transaction State
const dishCards = ref([]);
const isAnimating = ref(false);

// Play Style Animation Transaction Function
const playStyleTransaction = async () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  
  setTimeout(() => {
    isAnimating.value = false;
  }, 800);
};

onMounted(() => {
  console.log('Green-themed page ready - Tailwind CSS v4');
});
</script>

<style scoped>
/* Base Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Tailwind CSS v4 Style Animation Transaction - Green Theme */
@keyframes styleTransaction {
  0% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 1rem;
    filter: brightness(1) saturate(1);
  }
  25% {
    transform: scale(0.98) rotate(-1deg);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    border-radius: 1.5rem;
    filter: brightness(1.05) saturate(1.2);
  }
  50% {
    transform: scale(1.02) rotate(1deg);
    box-shadow: 0 25px 30px -12px rgb(34 197 94 / 0.3);
    border-radius: 1rem;
    filter: brightness(1.1) saturate(1.3);
    background: linear-gradient(135deg, rgba(220,252,231,0.5), rgba(209,250,229,0.5));
  }
  75% {
    transform: scale(0.99) rotate(-0.5deg);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15);
    border-radius: 1.25rem;
    filter: brightness(1.02) saturate(1.1);
  }
  100% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    border-radius: 1rem;
    filter: brightness(1) saturate(1);
  }
}

/* Color Morphing - Green Theme */
@keyframes colorMorph {
  0% {
    border-color: transparent;
    background-color: white;
  }
  25% {
    border-color: rgb(34 197 94 / 0.3);
    background-color: rgb(240 253 244);
  }
  50% {
    border-color: rgb(16 185 129 / 0.4);
    background-color: rgb(236 253 245);
    background-image: radial-gradient(circle at 10% 20%, rgba(34,197,94,0.05) 0%, rgba(16,185,129,0.05) 100%);
  }
  75% {
    border-color: rgb(34 197 94 / 0.3);
    background-color: rgb(240 253 244);
  }
  100% {
    border-color: transparent;
    background-color: white;
  }
}

.animate-style-transaction {
  animation: 
    styleTransaction 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    colorMorph 0.8s ease-in-out forwards;
  will-change: transform, box-shadow, border-radius, filter, background;
  position: relative;
  z-index: 10;
}

/* Glow effect during transaction - Green Theme */
.animate-style-transaction::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, #22c55e, #10b981, #14b8a6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  animation: borderGlow 0.8s ease-in-out forwards;
  pointer-events: none;
}

@keyframes borderGlow {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-1000 {
  animation-delay: 1000ms;
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>