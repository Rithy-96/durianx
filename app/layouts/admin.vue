<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <h1>Admin Layout header</h1>
      <div class="flex items-center gap-3">
        <!-- Logo Icon -->
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#f97316"
            stroke-width="4"
            fill="#fff7ed"
          />
          <path
            d="M12 10 L12 28 Q12 34 15 36"
            stroke="#f97316"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
          <path
            d="M18 10 L18 26 Q18 32 15 36"
            stroke="#f97316"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
          <path
            d="M32 10 L36 32 Q36 38 30 40"
            stroke="#ea580c"
            stroke-width="4"
            stroke-linecap="round"
            fill="none"
          />
          <circle cx="19" cy="18" r="2" fill="#fed7aa" />
        </svg>

        <div>
          <h1 class="text-2xl font-bold text-gray-900">Durian</h1>
          <p class="text-xs text-orange-600 -mt-1">Food Delivery</p>
        </div>
      </div>
    </header>

    <main class="p-4">
      <p class="text-lg">Main content</p>

      <slot />
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <p>&copy; 2023 Admin Layout. All rights reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
div {
  background-color: #eebb90;
  padding: 20px;
  height: 100vh;
}
</style>
