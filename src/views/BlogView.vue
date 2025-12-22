<script setup>
import { blogPosts, getAllCategories } from '../data/blog.js'

const categories = getAllCategories()

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            The Freeze Blog
          </h1>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            Tips, stories, recipes, and the latest news from the world of frozen yogurt.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="bg-freeze-dark border-b border-freeze-border py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-2 overflow-x-auto pb-2">
          <span class="category-pill active">All Posts</span>
          <span
            v-for="category in categories"
            :key="category"
            class="category-pill"
          >
            {{ category }}
          </span>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-12 md:py-16 bg-freeze-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link
          :to="`/blog/${blogPosts[0].slug}`"
          class="group block relative rounded-3xl overflow-hidden"
        >
          <div class="aspect-[21/9] md:aspect-[3/1]">
            <img
              :src="blogPosts[0].image"
              :alt="blogPosts[0].title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-freeze-darker via-freeze-darker/40 to-transparent" />
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <span class="inline-block px-3 py-1 bg-freeze-cyan/20 border border-freeze-cyan rounded-full text-freeze-cyan text-sm font-medium mb-4">
              {{ blogPosts[0].category }}
            </span>
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-3 group-hover:text-freeze-cyan transition-colors">
              {{ blogPosts[0].title }}
            </h2>
            <p class="text-freeze-text-muted text-lg max-w-2xl mb-4 hidden md:block">
              {{ blogPosts[0].excerpt }}
            </p>
            <div class="flex items-center gap-4 text-sm text-freeze-text-muted">
              <span>{{ blogPosts[0].author }}</span>
              <span>{{ formatDate(blogPosts[0].date) }}</span>
              <span>{{ blogPosts[0].readTime }} min read</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- All Posts Grid -->
    <section class="py-12 md:py-16 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">All Posts</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link
            v-for="post in blogPosts"
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
            <div class="p-5">
              <div class="flex items-center gap-3 mb-3">
                <span class="px-2 py-1 bg-freeze-cyan/20 text-freeze-cyan text-xs rounded-full">
                  {{ post.category }}
                </span>
                <span class="text-freeze-text-muted text-xs">{{ post.readTime }} min read</span>
              </div>
              <h3 class="text-lg font-semibold text-white group-hover:text-freeze-cyan transition-colors mb-2">
                {{ post.title }}
              </h3>
              <p class="text-freeze-text-muted text-sm line-clamp-2 mb-4">
                {{ post.excerpt }}
              </p>
              <div class="flex items-center justify-between text-sm">
                <span class="text-freeze-text-muted">{{ post.author }}</span>
                <span class="text-freeze-text-muted">{{ formatDate(post.date) }}</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-16 md:py-24 bg-freeze-dark">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p class="text-freeze-text-muted mb-8">
          Subscribe to our newsletter for the latest flavors, promotions, and frozen yogurt tips.
        </p>
        <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" @submit.prevent>
          <input
            type="email"
            placeholder="your@email.com"
            class="input-dark flex-1"
          />
          <button type="submit" class="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p class="text-freeze-text-muted text-sm mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  </div>
</template>
