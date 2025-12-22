<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

// Redirect if not authenticated
if (!authStore.isAuthenticated) {
  authStore.openLoginModal()
  router.push('/')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <div v-if="authStore.isAuthenticated" class="min-h-screen bg-freeze-dark py-8 md:py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">My Account</h1>
          <p class="text-freeze-text-muted">Welcome back, {{ authStore.user.name }}!</p>
        </div>
        <button
          @click="handleLogout"
          class="btn-secondary flex items-center gap-2 w-fit"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Sign Out
        </button>
      </div>

      <!-- Account Info Card -->
      <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6 mb-8">
        <h2 class="text-xl font-bold text-white mb-4">Account Information</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-freeze-text-muted text-sm mb-1">Name</p>
            <p class="text-white">{{ authStore.user.name }}</p>
          </div>
          <div>
            <p class="text-freeze-text-muted text-sm mb-1">Email</p>
            <p class="text-white">{{ authStore.user.email }}</p>
          </div>
        </div>
      </div>

      <!-- Order History -->
      <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6">
        <h2 class="text-xl font-bold text-white mb-6">Order History</h2>

        <div v-if="authStore.orders.length === 0" class="text-center py-8">
          <p class="text-freeze-text-muted mb-4">You haven't placed any orders yet.</p>
          <router-link to="/menu" class="btn-primary">
            Browse Menu
          </router-link>
        </div>

        <div v-else class="space-y-6">
          <div
            v-for="order in authStore.orders"
            :key="order.id"
            class="border border-freeze-border rounded-xl overflow-hidden"
          >
            <!-- Order Header -->
            <div class="bg-freeze-darker px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-4">
                <span class="text-freeze-cyan font-mono">{{ order.id }}</span>
                <span class="text-freeze-text-muted text-sm">{{ formatDate(order.date) }}</span>
              </div>
              <span class="px-3 py-1 bg-freeze-cyan/20 text-freeze-cyan text-sm rounded-full w-fit">
                {{ order.status }}
              </span>
            </div>

            <!-- Order Items -->
            <div class="p-4">
              <div class="space-y-3">
                <div
                  v-for="(item, index) in order.items"
                  :key="index"
                  class="flex justify-between items-center"
                >
                  <div>
                    <p class="text-white">{{ item.name }}</p>
                    <p class="text-freeze-text-muted text-sm">
                      Size: {{ item.size }} &times; {{ item.quantity }}
                    </p>
                  </div>
                  <p class="text-freeze-text-muted">
                    {{ formatPrice(item.price * item.quantity) }}
                  </p>
                </div>
              </div>

              <div class="border-t border-freeze-border mt-4 pt-4 flex justify-between items-center">
                <span class="text-freeze-text-muted">Order Total</span>
                <span class="text-freeze-cyan font-bold text-lg">{{ formatPrice(order.total) }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Demo Notice -->
        <div class="mt-6 p-4 bg-freeze-purple/20 border border-freeze-purple rounded-lg">
          <p class="text-freeze-purple text-sm">
            This is demo data. These orders are simulated for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Authenticated -->
  <div v-else class="min-h-screen bg-freeze-dark py-24">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-3xl font-bold text-white mb-4">Please Sign In</h1>
      <p class="text-freeze-text-muted mb-8">You need to be signed in to view your account.</p>
      <button @click="authStore.openLoginModal" class="btn-primary">
        Sign In
      </button>
    </div>
  </div>
</template>
