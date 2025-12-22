<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug, getRecentPosts } from '../data/blog.js'

const route = useRoute()

const post = computed(() => {
  return getPostBySlug(route.params.slug)
})

const recentPosts = computed(() => {
  return getRecentPosts(3).filter(p => p.slug !== route.params.slug)
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div v-if="post">
    <!-- Hero -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-freeze-text-muted mb-8">
          <router-link to="/" class="hover:text-freeze-cyan transition-colors">Home</router-link>
          <span>/</span>
          <router-link to="/blog" class="hover:text-freeze-cyan transition-colors">Blog</router-link>
          <span>/</span>
          <span class="text-freeze-cyan truncate">{{ post.title }}</span>
        </nav>

        <span class="inline-block px-3 py-1 bg-freeze-cyan/20 border border-freeze-cyan rounded-full text-freeze-cyan text-sm font-medium mb-4">
          {{ post.category }}
        </span>
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">
          {{ post.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-freeze-text-muted">
          <span>By {{ post.author }}</span>
          <span>&bull;</span>
          <span>{{ formatDate(post.date) }}</span>
          <span>&bull;</span>
          <span>{{ post.readTime }} min read</span>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section class="bg-freeze-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="aspect-video rounded-2xl overflow-hidden -mt-8 relative z-10">
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-12 md:py-16 bg-freeze-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Article Content -->
          <article class="lg:col-span-2 prose prose-invert prose-lg max-w-none">
            <div
              v-html="post.content"
              class="text-freeze-text-muted [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:mb-2"
            />
          </article>

          <!-- Sidebar -->
          <aside class="lg:col-span-1">
            <div class="sticky top-24 space-y-8">
              <!-- Share -->
              <div class="bg-freeze-card rounded-xl border border-freeze-border p-5">
                <h3 class="text-white font-semibold mb-4">Share this post</h3>
                <div class="flex gap-3">
                  <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Related Posts -->
              <div v-if="recentPosts.length > 0" class="bg-freeze-card rounded-xl border border-freeze-border p-5">
                <h3 class="text-white font-semibold mb-4">Related Posts</h3>
                <div class="space-y-4">
                  <router-link
                    v-for="related in recentPosts"
                    :key="related.slug"
                    :to="`/blog/${related.slug}`"
                    class="flex gap-3 group"
                  >
                    <img
                      :src="related.image"
                      :alt="related.title"
                      class="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h4 class="text-white text-sm font-medium group-hover:text-freeze-cyan transition-colors line-clamp-2">
                        {{ related.title }}
                      </h4>
                      <p class="text-freeze-text-muted text-xs mt-1">
                        {{ related.readTime }} min read
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Back to Blog -->
    <section class="py-8 bg-freeze-darker">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-link to="/blog" class="inline-flex items-center gap-2 text-freeze-cyan hover:underline">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </router-link>
      </div>
    </section>
  </div>

  <!-- Not Found -->
  <div v-else class="py-24 bg-freeze-dark">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Post Not Found</h1>
      <p class="text-freeze-text-muted mb-8">The blog post you're looking for doesn't exist.</p>
      <router-link to="/blog" class="btn-primary">
        Browse Blog
      </router-link>
    </div>
  </div>
</template>
