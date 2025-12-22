<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProductById, products, categories } from '../data/products.js'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const product = computed(() => {
  return getProductById(route.params.id)
})

const selectedSize = ref('medium')
const quantity = ref(1)

const sizes = [
  { id: 'small', label: 'Small', description: '8 oz' },
  { id: 'medium', label: 'Medium', description: '12 oz' },
  { id: 'large', label: 'Large', description: '16 oz' }
]

const currentPrice = computed(() => {
  if (!product.value) return 0
  return product.value.price[selectedSize.value] * quantity.value
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const addToCart = () => {
  if (product.value) {
    cartStore.addItem(product.value, selectedSize.value, quantity.value)
  }
}

const buyNow = () => {
  if (product.value) {
    cartStore.addItem(product.value, selectedSize.value, quantity.value)
    router.push('/checkout')
  }
}

const relatedProducts = computed(() => {
  if (!product.value) return []
  return products
    .filter(p => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 4)
})

const categoryName = computed(() => {
  if (!product.value) return ''
  return categories.find(c => c.id === product.value.category)?.name || product.value.category
})
</script>

<template>
  <div v-if="product">
    <!-- Breadcrumb -->
    <div class="bg-freeze-darker py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-freeze-text-muted">
          <router-link to="/" class="hover:text-freeze-cyan transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/menu" class="hover:text-freeze-cyan transition-colors">Menu</router-link>
          <span>/</span>
          <span class="text-freeze-cyan">{{ product.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Product Detail -->
    <section class="py-8 md:py-16 bg-freeze-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Product Image -->
          <div class="relative">
            <div class="aspect-square rounded-2xl overflow-hidden bg-freeze-card">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Badges -->
            <div class="absolute top-4 left-4 flex flex-col gap-2">
              <span v-if="product.new" class="px-3 py-1 bg-freeze-magenta text-white text-sm font-medium rounded-full">
                NEW
              </span>
              <span v-if="product.featured" class="px-3 py-1 bg-freeze-purple text-white text-sm font-medium rounded-full">
                POPULAR
              </span>
            </div>
          </div>

          <!-- Product Info -->
          <div class="flex flex-col">
            <span class="text-freeze-cyan text-sm uppercase tracking-wider mb-2">
              {{ categoryName }}
            </span>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
              {{ product.name }}
            </h1>
            <p class="text-freeze-text-muted text-lg mb-6">
              {{ product.description }}
            </p>

            <!-- Ingredients -->
            <div class="mb-6">
              <h3 class="text-white font-medium mb-2">Ingredients</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="ingredient in product.ingredients"
                  :key="ingredient"
                  class="px-3 py-1 bg-freeze-card border border-freeze-border rounded-full text-sm text-freeze-text-muted"
                >
                  {{ ingredient }}
                </span>
              </div>
            </div>

            <!-- Size Selection -->
            <div class="mb-6">
              <h3 class="text-white font-medium mb-3">Select Size</h3>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="size in sizes"
                  :key="size.id"
                  @click="selectedSize = size.id"
                  :class="[
                    'p-4 rounded-xl border transition-all duration-300 text-center',
                    selectedSize === size.id
                      ? 'border-freeze-cyan bg-freeze-cyan/10 text-freeze-cyan'
                      : 'border-freeze-border bg-freeze-card text-freeze-text-muted hover:border-freeze-cyan/50'
                  ]"
                >
                  <div class="font-semibold">{{ size.label }}</div>
                  <div class="text-sm opacity-70">{{ size.description }}</div>
                  <div class="font-bold mt-1">{{ formatPrice(product.price[size.id]) }}</div>
                </button>
              </div>
            </div>

            <!-- Quantity -->
            <div class="mb-8">
              <h3 class="text-white font-medium mb-3">Quantity</h3>
              <div class="flex items-center gap-4">
                <div class="flex items-center bg-freeze-card rounded-lg border border-freeze-border">
                  <button
                    @click="quantity = Math.max(1, quantity - 1)"
                    class="w-12 h-12 flex items-center justify-center text-freeze-text-muted hover:text-freeze-cyan transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span class="w-12 text-center text-white font-semibold">{{ quantity }}</span>
                  <button
                    @click="quantity++"
                    class="w-12 h-12 flex items-center justify-center text-freeze-text-muted hover:text-freeze-cyan transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div class="text-2xl font-bold text-freeze-cyan">
                  {{ formatPrice(currentPrice) }}
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="addToCart" class="btn-primary flex-1 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <button @click="buyNow" class="btn-magenta flex-1">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Products -->
    <section v-if="relatedProducts.length > 0" class="py-12 md:py-16 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">
          You Might Also Like
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link
            v-for="related in relatedProducts"
            :key="related.id"
            :to="`/menu/${related.id}`"
            class="product-card group"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="related.image"
                :alt="related.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <h3 class="text-white font-semibold group-hover:text-freeze-cyan transition-colors">
                {{ related.name }}
              </h3>
              <p class="text-freeze-cyan font-semibold mt-1">
                From {{ formatPrice(related.price.small) }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found -->
  <div v-else class="py-24 bg-freeze-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Product Not Found</h1>
      <p class="text-freeze-text-muted mb-8">The product you're looking for doesn't exist or has been removed.</p>
      <router-link to="/menu" class="btn-primary">
        Browse Menu
      </router-link>
    </div>
  </div>
</template>
