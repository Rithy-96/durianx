<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800">My Orders</h1>
        <p class="text-gray-500 mt-2">View and track your order history.</p>
      </div>

      <!-- Tabs (Active / History) -->
      <div class="flex gap-4 border-b border-gray-200 mb-6">
        <button 
          @click="activeTab = 'active'"
          :class="[
            'px-6 py-2 font-semibold transition-colors relative',
            activeTab === 'active' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          Active Orders
          <span v-if="activeOrders.length" class="ml-2 bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">{{ activeOrders.length }}</span>
        </button>
        <button 
          @click="activeTab = 'history'"
          :class="[
            'px-6 py-2 font-semibold transition-colors relative',
            activeTab === 'history' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          Order History
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="inline-block w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-2 text-gray-500">Loading your orders...</p>
      </div>

      <!-- No Orders State -->
      <div v-else-if="filteredOrders.length === 0" class="text-center py-12 bg-white rounded-2xl shadow-sm">
        <div class="text-6xl mb-4">📦</div>
        <h3 class="text-xl font-semibold text-gray-700">No orders found</h3>
        <p class="text-gray-500 mt-2">You haven't placed any orders yet.</p>
        <NuxtLink to="/menu" class="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Browse Menu
        </NuxtLink>
      </div>

      <!-- Orders List -->
      <div v-else class="space-y-6">
        <div 
          v-for="order in filteredOrders" 
          :key="order.id" 
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <!-- Order Header -->
          <div class="bg-gradient-to-r from-orange-50 to-rose-50 p-4 flex flex-wrap justify-between items-center border-b border-gray-100">
            <div>
              <span class="text-sm text-gray-500">Order #{{ order.orderNumber }}</span>
              <p class="text-xs text-gray-400">{{ formatDate(order.date) }}</p>
            </div>
            <div class="flex items-center gap-3">
              <span :class="getStatusBadge(order.status)">{{ order.status }}</span>
              <span class="text-lg font-bold text-orange-600">${{ order.total.toFixed(2) }}</span>
            </div>
          </div>

          <!-- Order Items -->
          <div class="p-4">
            <div class="space-y-2">
              <div v-for="item in order.items.slice(0, 2)" :key="item.id" class="flex justify-between text-sm">
                <span class="text-gray-600">{{ item.quantity }}x {{ item.name }}</span>
                <span class="text-gray-800">${{ (item.price * item.quantity).toFixed(2) }}</span>
              </div>
              <div v-if="order.items.length > 2" class="text-xs text-gray-400">
                +{{ order.items.length - 2 }} more item(s)
              </div>
            </div>

            <!-- Delivery Address (short) -->
            <div class="mt-3 text-xs text-gray-400 flex items-center gap-1">
              <span>📍</span> {{ order.address.city }}, {{ order.address.state }}
            </div>

            <!-- Action Buttons -->
            <div class="mt-4 flex gap-3">
              <button @click="viewOrderDetails(order)" class="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                View Details
              </button>
              <button v-if="order.status !== 'Delivered'" @click="trackOrder(order)" class="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
                Track Order
              </button>
              <button @click="reorder(order)" class="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition">
                Reorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Details Modal -->
    <Transition name="modal">
      <div v-if="selectedOrder" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" @click.self="selectedOrder = null">
        <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div class="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
            <h3 class="text-xl font-bold">Order Details</h3>
            <button @click="selectedOrder = null" class="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div class="p-4 space-y-4">
            <div>
              <p class="text-sm text-gray-500">Order #{{ selectedOrder.orderNumber }}</p>
              <p class="text-xs text-gray-400">{{ formatDate(selectedOrder.date) }}</p>
            </div>
            <div class="border-t border-gray-100 pt-3">
              <h4 class="font-semibold mb-2">Items</h4>
              <div class="space-y-1">
                <div v-for="item in selectedOrder.items" :key="item.id" class="flex justify-between text-sm">
                  <span>{{ item.quantity }}x {{ item.name }}</span>
                  <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-3">
              <h4 class="font-semibold mb-2">Delivery Address</h4>
              <p class="text-sm text-gray-600">{{ selectedOrder.address.street }}, {{ selectedOrder.address.city }}, {{ selectedOrder.address.state }} {{ selectedOrder.address.zip }}</p>
            </div>
            <div class="border-t border-gray-100 pt-3">
              <div class="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${{ selectedOrder.subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>${{ selectedOrder.deliveryFee.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span>Tax</span>
                <span>${{ selectedOrder.tax.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between font-bold mt-2 pt-2 border-t">
                <span>Total</span>
                <span class="text-orange-600">${{ selectedOrder.total.toFixed(2) }}</span>
              </div>
            </div>
            <div v-if="selectedOrder.status !== 'Delivered'" class="bg-orange-50 p-3 rounded-lg">
              <p class="text-sm text-orange-700">Status: {{ selectedOrder.status }}</p>
              <p class="text-xs text-orange-600 mt-1">Estimated delivery: {{ estimatedDelivery(selectedOrder.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="toastMessage" class="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-2">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<script setup>

import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

// Mock orders data
// Dish image mapping for mock orders
const dishImages = {
  1: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
  2: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop',
  3: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop',
  4: 'https://images.unsplash.com/photo-1546833999-b9f581a4f7b6?w=100&h=100&fit=crop',
  5: 'https://images.unsplash.com/photo-1550304943-4f24f54dd7c9?w=100&h=100&fit=crop',
  6: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=100&h=100&fit=crop',
}

const mockOrders = [
  {
    id: 1,
    orderNumber: '1001',
    date: new Date(2025, 3, 5, 19, 30),
    status: 'Delivered',
    total: 38.97,
    subtotal: 34.99,
    deliveryFee: 2.99,
    tax: 3.50,
    items: [
      { id: 1, name: 'Classic Cheeseburger', price: 12.99, quantity: 2, image: dishImages[1] },
      { id: 3, name: 'Rainbow Sushi Roll', price: 21.99, quantity: 1, image: dishImages[3] }
    ],
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    }
  },
  {
    id: 2,
    orderNumber: '1002',
    date: new Date(2025, 3, 3, 20, 15),
    status: 'Out for Delivery',
    total: 32.47,
    subtotal: 28.99,
    deliveryFee: 2.99,
    tax: 2.90,
    items: [
      { id: 2, name: 'Margherita Pizza', price: 16.49, quantity: 1, image: dishImages[2] },
      { id: 5, name: 'Caesar Salad', price: 9.99, quantity: 1, image: dishImages[5] }
    ],
    address: {
      street: '456 Oak Ave',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201'
    }
  },
  {
    id: 3,
    orderNumber: '1003',
    date: new Date(2025, 3, 1, 18, 45),
    status: 'Preparing',
    total: 45.95,
    subtotal: 41.99,
    deliveryFee: 2.99,
    tax: 4.20,
    items: [
      { id: 4, name: 'Creamy Alfredo Pasta', price: 14.99, quantity: 2, image: dishImages[4] },
      { id: 6, name: 'Chocolate Lava Cake', price: 6.99, quantity: 2, image: dishImages[6] }
    ],
    address: {
      street: '789 Pine Ln',
      city: 'Queens',
      state: 'NY',
      zip: '11354'
    }
  }
]

// State
const activeTab = ref('active')
const loading = ref(false)
const selectedOrder = ref(null)
const toastMessage = ref('')
let toastTimeout = null

// Filter orders based on tab
const activeOrders = computed(() => {
  return mockOrders.filter(order => order.status !== 'Delivered')
})
const historyOrders = computed(() => {
  return mockOrders.filter(order => order.status === 'Delivered')
})
const filteredOrders = computed(() => {
  return activeTab.value === 'active' ? activeOrders.value : historyOrders.value
})

// Helper functions
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date)
}

const getStatusBadge = (status) => {
  const classes = {
    'Preparing': 'bg-yellow-100 text-yellow-700',
    'Out for Delivery': 'bg-blue-100 text-blue-700',
    'Delivered': 'bg-green-100 text-green-700'
  }
  return `px-3 py-1 rounded-full text-xs font-semibold ${classes[status] || 'bg-gray-100 text-gray-700'}`
}

const estimatedDelivery = (orderDate) => {
  // Mock: add 45 minutes to order time
  const est = new Date(orderDate)
  est.setMinutes(est.getMinutes() + 45)
  return formatDate(est)
}

// Actions
const viewOrderDetails = (order) => {
  selectedOrder.value = order
}

const trackOrder = (order) => {
  // Could navigate to a tracking page, but we'll show a toast for demo
  toastMessage.value = `Tracking order #${order.orderNumber}`
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => { toastMessage.value = '' }, 2000)
}

const reorder = (order) => {
  // Convert order items to cart items format
  const itemsToAdd = order.items.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image
  }))
  if (cartStore.setCartFromOrder) {
    cartStore.setCartFromOrder(itemsToAdd)
  } else {
    // fallback: clear and add items
    cartStore.clearCart && cartStore.clearCart()
    itemsToAdd.forEach(i => cartStore.addItem && cartStore.addItem(i))
  }
  toastMessage.value = `Added items from order #${order.orderNumber} to cart`
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => { toastMessage.value = '' }, 2000)
  // Optionally navigate to checkout
  // navigateTo('/checkout')
}

// SEO
useHead({
  title: 'My Orders - Durian',
  meta: [
    { name: 'description', content: 'View your order history, track active orders, and reorder your favorite meals.' }
  ]
})
</script>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}
</style>