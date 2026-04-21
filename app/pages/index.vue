<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Parallax Effect -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      <div class="absolute inset-0 opacity-30">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Text Content -->
          <div class="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div
              class="inline-block px-4 py-1.5 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-4"
            >
              🔥 20% OFF First Order
            </div>
            <h1
              class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800"
            >
              Taste the
              <span
                class="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
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
                class="group px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
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
                class="absolute inset-0 bg-gradient-to-tr from-orange-200 to-rose-200 rounded-full opacity-30 blur-2xl"
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
          <span class="text-orange-500 font-semibold tracking-wide uppercase"
            >Signature Dishes</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
            Our Featured
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
              >Delicacies</span
            >
          </h2>
          <p class="text-gray-500 max-w-2xl mx-auto">
            Crafted by world-class chefs using authentic recipes and freshest ingredients
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Dish Card 1 -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop"
                alt="Classic Burger"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-orange-600 shadow-md"
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
                <span class="text-2xl font-bold text-orange-600">$12.99</span>
                <button
                  class="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 2 -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop"
                alt="Italian Pizza"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-orange-600 shadow-md"
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
                <span class="text-2xl font-bold text-orange-600">$16.49</span>
                <button
                  class="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 3 -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop"
                alt="Sushi Roll"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-orange-600 shadow-md"
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
                <span class="text-2xl font-bold text-orange-600">$21.99</span>
                <button
                  class="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>

          <!-- Dish Card 4 -->
          <div
            class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
          >
            <div class="relative overflow-hidden h-56">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a4f7b6?w=600&h=400&fit=crop"
                alt="Pasta"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-orange-600 shadow-md"
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
                <span class="text-2xl font-bold text-orange-600">$14.99</span>
                <button
                  class="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offer Banner with Glow Effect -->
    <section
      class="py-16 bg-gradient-to-r from-orange-600 to-rose-600 mx-4 sm:mx-6 lg:mx-8 rounded-3xl shadow-2xl relative overflow-hidden group"
    >
      <div
        class="absolute inset-0 bg-white/10 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-700"
      ></div>
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
          Weekend Special Offer
        </h2>
        <p class="text-orange-100 text-xl mb-6">
          Get 30% off on all orders above $25. Use code:
          <span class="font-mono bg-white/20 px-3 py-1 rounded-full">FOODIE30</span>
        </p>
        <button
          class="px-8 py-3 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Grab Deal Now
        </button>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="text-orange-500 font-semibold uppercase tracking-wide"
            >Testimonials</span
          >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            What Our
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500"
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

    <!-- Newsletter Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          class="bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-8 md:p-12 text-center shadow-xl"
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
              class="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              class="px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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
</script>

<style scoped>
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
</style>
