<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { products, categories, getProductsByCategory } from '../data/products.js'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const cartStore = useCartStore()

const selectedCategory = ref('all')

const updateCategoryFromRoute = () => {
  if (route.query.new === 'true') {
    selectedCategory.value = 'new'
  } else if (route.query.category) {
    selectedCategory.value = route.query.category
  } else {
    selectedCategory.value = 'all'
  }
}

// Watch for route query changes
watch(() => route.query, updateCategoryFromRoute, { immediate: true })

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'new') {
    return products.filter(p => p.new)
  }
  return getProductsByCategory(selectedCategory.value)
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const quickAdd = (product, event) => {
  event.preventDefault()
  event.stopPropagation()
  cartStore.addItem(product, 'medium', 1)
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            15+ handcrafted flavors made with premium ingredients. Find your perfect swirl.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="sticky top-16 md:top-20 z-40 bg-freeze-dark/95 backdrop-blur-md border-b border-freeze-border py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="category in [{ id: 'new', name: 'New Arrivals', icon: '🆕' }, ...categories]"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'category-pill whitespace-nowrap',
              selectedCategory === category.id ? 'active' : ''
            ]"
          >
            <span class="mr-1">{{ category.icon }}</span>
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-12 md:py-16 bg-freeze-dark min-h-[60vh]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <p class="text-freeze-text-muted text-lg">No products found in this category.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <router-link
            v-for="product in filteredProducts"
            :key="product.id"
            :to="`/menu/${product.id}`"
            class="product-card group"
          >
            <div class="relative aspect-square overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Quick Add Button -->
              <button
                @click="quickAdd(product, $event)"
                class="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-freeze-cyan text-freeze-darker opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:glow-cyan"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <!-- Badges -->
              <div class="absolute top-4 left-4 flex flex-col gap-2">
                <span v-if="product.new" class="px-2 py-1 bg-freeze-magenta text-white text-xs font-medium rounded-full">
                  NEW
                </span>
                <span v-if="product.featured" class="px-2 py-1 bg-freeze-purple text-white text-xs font-medium rounded-full">
                  POPULAR
                </span>
              </div>
            </div>

            <div class="p-4">
              <span class="text-freeze-cyan text-xs uppercase tracking-wider">
                {{ categories.find(c => c.id === product.category)?.name || product.category }}
              </span>
              <h3 class="text-white font-semibold mt-1 group-hover:text-freeze-cyan transition-colors">
                {{ product.name }}
              </h3>
              <p class="text-freeze-text-muted text-sm mt-1 line-clamp-2">
                {{ product.description }}
              </p>
              <div class="flex items-center justify-between mt-3">
                <p class="text-freeze-cyan font-semibold">
                  {{ formatPrice(product.price.small) }} - {{ formatPrice(product.price.large) }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
