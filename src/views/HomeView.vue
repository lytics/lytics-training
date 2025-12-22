<script setup>
import { getFeaturedProducts, getNewProducts } from '../data/products.js'
import { getRecentPosts } from '../data/blog.js'

const featuredProducts = getFeaturedProducts()
const newProducts = getNewProducts()
const recentPosts = getRecentPosts(3)

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/images/hero-banner.jpeg"
          alt="Freeze Frozen Yogurt"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-freeze-darker/80 via-freeze-darker/40 to-transparent" />
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="flex flex-col justify-center">
          <span class="inline-block w-fit px-4 py-1 bg-freeze-magenta/20 border border-freeze-magenta rounded-full text-freeze-magenta text-sm font-medium mb-6">
            Winter Escape Sale - 25% Off
          </span>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Taste the
            <span class="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Tropics</span>
          </h1>
          <p class="text-lg md:text-xl text-freeze-text-muted mb-8">
            Premium frozen yogurt crafted with passion. 15+ unique flavors, endless toppings, and the perfect swirl every time.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/menu" class="btn-primary text-center">
              Explore Menu
            </router-link>
            <router-link to="/menu?new=true" class="btn-secondary text-center">
              New Arrivals
            </router-link>
          </div>
        </div>
        <div class="hidden lg:block">
          <!-- Empty right column to balance layout -->
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-freeze-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-16 md:py-24 bg-freeze-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Fan Favorites
          </h2>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            Our most-loved flavors that keep customers coming back for more
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link
            v-for="product in featuredProducts.slice(0, 4)"
            :key="product.id"
            :to="`/menu/${product.id}`"
            class="product-card group"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <h3 class="text-white font-semibold group-hover:text-freeze-cyan transition-colors">
                  {{ product.name }}
                </h3>
                <span v-if="product.new" class="px-2 py-0.5 bg-freeze-magenta text-white text-xs rounded-full">
                  NEW
                </span>
              </div>
              <p class="text-freeze-text-muted text-sm mt-1 line-clamp-2">
                {{ product.description }}
              </p>
              <p class="text-freeze-cyan font-semibold mt-2">
                From {{ formatPrice(product.price.small) }}
              </p>
            </div>
          </router-link>
        </div>

        <div class="text-center mt-10">
          <router-link to="/menu" class="btn-secondary">
            View All Flavors
          </router-link>
        </div>
      </div>
    </section>

    <!-- New Arrivals Banner -->
    <section class="py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-3xl overflow-hidden">
          <img
            src="/images/small-banner.jpeg"
            alt="New Arrivals"
            class="w-full h-64 md:h-96 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
            <div class="p-8 md:p-12 max-w-xl">
              <span class="inline-block px-3 py-1 bg-freeze-cyan/20 border border-freeze-cyan rounded-full text-freeze-cyan text-sm font-medium mb-4">
                Just Dropped
              </span>
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                New Flavors Have Arrived
              </h2>
              <p class="text-freeze-text-muted mb-6">
                Explore our latest creations featuring unique ingredients and bold flavor combinations.
              </p>
              <router-link to="/menu?category=signature" class="btn-primary">
                Try Now
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Preview Section -->
    <section class="py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              From the Blog
            </h2>
            <p class="text-freeze-text-muted">
              Tips, stories, and frozen yogurt wisdom
            </p>
          </div>
          <router-link to="/blog" class="btn-secondary">
            View All Posts
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link
            v-for="post in recentPosts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="product-card group"
          >
            <div class="aspect-video overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <span class="text-freeze-cyan text-sm">{{ post.category }}</span>
              <h3 class="text-white font-semibold mt-1 group-hover:text-freeze-cyan transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-freeze-text-muted text-sm mt-2 line-clamp-2">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center gap-4 mt-3 text-xs text-freeze-text-muted">
                <span>{{ post.author }}</span>
                <span>{{ post.readTime }} min read</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-freeze-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Experience the
          <span class="text-freeze-cyan text-glow-cyan">Perfect Swirl</span>?
        </h2>
        <p class="text-freeze-text-muted text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of frozen yogurt lovers and discover your new favorite flavor today.
        </p>
        <router-link to="/menu" class="btn-magenta">
          Order Now
        </router-link>
      </div>
    </section>
  </div>
</template>
