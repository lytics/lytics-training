<script setup>
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

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

const proceedToCheckout = () => {
  cartStore.closeCart()
  router.push('/checkout')
}
</script>

<template>
  <!-- Backdrop -->
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="cartStore.isOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
      @click="cartStore.closeCart"
    />
  </transition>

  <!-- Drawer -->
  <transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="cartStore.isOpen"
      class="fixed top-0 right-0 h-full w-full max-w-md bg-freeze-darker border-l border-freeze-border z-50 flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-freeze-border">
        <h2 class="text-xl font-bold text-white">Your Cart</h2>
        <button
          @click="cartStore.closeCart"
          class="p-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto p-4">
        <div v-if="cartStore.items.length === 0" class="flex flex-col items-center justify-center h-full text-center">
          <svg class="w-16 h-16 text-freeze-text-muted mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p class="text-freeze-text-muted mb-2">Your cart is empty</p>
          <router-link
            to="/menu"
            @click="cartStore.closeCart"
            class="text-freeze-cyan hover:underline"
          >
            Start shopping
          </router-link>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="flex gap-4 p-3 bg-freeze-card rounded-xl border border-freeze-border"
          >
            <!-- Image -->
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-cover rounded-lg"
            />

            <!-- Details -->
            <div class="flex-1 min-w-0">
              <h3 class="text-white font-medium truncate">{{ item.name }}</h3>
              <p class="text-freeze-text-muted text-sm">Size: {{ sizeLabels[item.size] }}</p>
              <p class="text-freeze-cyan font-semibold">{{ formatPrice(item.price) }}</p>
            </div>

            <!-- Quantity & Remove -->
            <div class="flex flex-col items-end justify-between">
              <button
                @click="cartStore.removeItem(item.id)"
                class="text-freeze-text-muted hover:text-freeze-magenta transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              <div class="flex items-center gap-2">
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                  class="w-7 h-7 flex items-center justify-center rounded-full bg-freeze-border text-white hover:bg-freeze-cyan hover:text-freeze-darker transition-colors"
                >
                  -
                </button>
                <span class="text-white w-6 text-center">{{ item.quantity }}</span>
                <button
                  @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                  class="w-7 h-7 flex items-center justify-center rounded-full bg-freeze-border text-white hover:bg-freeze-cyan hover:text-freeze-darker transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div v-if="cartStore.items.length > 0" class="p-4 border-t border-freeze-border space-y-4">
        <div class="space-y-2">
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

        <button
          @click="proceedToCheckout"
          class="btn-primary w-full"
        >
          Checkout
        </button>

        <button
          @click="cartStore.clearCart"
          class="w-full text-center text-freeze-text-muted hover:text-freeze-magenta transition-colors text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </transition>
</template>
