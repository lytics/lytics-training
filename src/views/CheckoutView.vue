<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const cartStore = useCartStore()
const authStore = useAuthStore()

const isProcessing = ref(false)
const orderComplete = ref(false)
const orderId = ref('')

const form = ref({
  name: authStore.user?.name || '',
  email: authStore.user?.email || '',
  phone: ''
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const sizeLabels = {
  small: 'S',
  medium: 'M',
  large: 'L'
}

const generateOrderId = () => {
  return 'FRZ-' + Math.random().toString(36).substr(2, 6).toUpperCase()
}

const handleSubmit = async () => {
  isProcessing.value = true

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  orderId.value = generateOrderId()
  orderComplete.value = true
  cartStore.clearCart()
  isProcessing.value = false
}

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-freeze-dark py-8 md:py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Order Complete State -->
      <div v-if="orderComplete" class="text-center py-16">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-freeze-cyan/20 flex items-center justify-center">
          <svg class="w-10 h-10 text-freeze-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
        <p class="text-freeze-text-muted text-lg mb-2">Thank you for your order.</p>
        <p class="text-freeze-cyan font-mono text-lg mb-8">Order ID: {{ orderId }}</p>
        <p class="text-freeze-text-muted mb-8">
          This is a demo checkout. No actual order has been placed.
        </p>
        <button @click="goHome" class="btn-primary">
          Back to Home
        </button>
      </div>

      <!-- Checkout Form -->
      <div v-else>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-8">Checkout</h1>

        <!-- Empty Cart -->
        <div v-if="cartStore.items.length === 0" class="text-center py-16">
          <p class="text-freeze-text-muted text-lg mb-8">Your cart is empty.</p>
          <router-link to="/menu" class="btn-primary">
            Browse Menu
          </router-link>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Order Form -->
          <div>
            <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6">
              <h2 class="text-xl font-bold text-white mb-6">Contact Information</h2>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-freeze-text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="John Doe"
                    class="input-dark"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-freeze-text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    class="input-dark"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-freeze-text-muted mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    class="input-dark"
                  />
                </div>

                <!-- Demo Notice -->
                <div class="p-4 bg-freeze-purple/20 border border-freeze-purple rounded-lg">
                  <p class="text-freeze-purple text-sm">
                    This is a demo checkout. No payment will be processed and no actual order will be placed.
                  </p>
                </div>

                <button
                  type="submit"
                  :disabled="isProcessing"
                  class="btn-magenta w-full flex items-center justify-center gap-2"
                >
                  <svg v-if="isProcessing" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>{{ isProcessing ? 'Processing...' : 'Place Order' }}</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Order Summary -->
          <div>
            <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6 sticky top-24">
              <h2 class="text-xl font-bold text-white mb-6">Order Summary</h2>

              <div class="space-y-4 mb-6">
                <div
                  v-for="item in cartStore.items"
                  :key="item.id"
                  class="flex gap-4"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-16 h-16 object-cover rounded-lg"
                  />
                  <div class="flex-1 min-w-0">
                    <h3 class="text-white font-medium truncate">{{ item.name }}</h3>
                    <p class="text-freeze-text-muted text-sm">
                      Size: {{ sizeLabels[item.size] }} &times; {{ item.quantity }}
                    </p>
                  </div>
                  <p class="text-freeze-cyan font-semibold">
                    {{ formatPrice(item.price * item.quantity) }}
                  </p>
                </div>
              </div>

              <div class="border-t border-freeze-border pt-4 space-y-2">
                <div class="flex justify-between text-freeze-text-muted">
                  <span>Subtotal</span>
                  <span>{{ formatPrice(cartStore.subtotal) }}</span>
                </div>
                <div class="flex justify-between text-freeze-text-muted">
                  <span>Tax (8%)</span>
                  <span>{{ formatPrice(cartStore.tax) }}</span>
                </div>
                <div class="flex justify-between text-white font-bold text-lg pt-2 border-t border-freeze-border">
                  <span>Total</span>
                  <span class="text-freeze-cyan">{{ formatPrice(cartStore.total) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
