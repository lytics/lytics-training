<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: '#' },
  { name: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z', url: '#' },
  { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', url: '#' },
  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' }
]

const footerLinks = [
  {
    title: 'Menu',
    links: [
      { name: 'All Flavors', path: '/menu' },
      { name: 'Signature Swirls', path: '/menu?category=signature' },
      { name: 'Tropical Paradise', path: '/menu?category=tropical' },
      { name: 'New Arrivals', path: '/menu?new=true' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Allergen Info', path: '/allergens' },
      { name: 'Nutrition Info', path: '/nutrition' }
    ]
  }
]
</script>

<template>
  <footer class="bg-freeze-darker border-t border-freeze-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <router-link to="/" class="inline-block mb-4">
            <span class="text-3xl font-bold text-white">Freeze</span>
          </router-link>
          <p class="text-freeze-text-muted mb-6 max-w-sm">
            Premium frozen yogurt crafted with passion. Experience the perfect swirl of flavor, freshness, and fun.
          </p>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-card border border-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan hover:glow-cyan transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Link Columns -->
        <div v-for="column in footerLinks" :key="column.title">
          <h3 class="text-white font-semibold mb-4">{{ column.title }}</h3>
          <ul class="space-y-3">
            <li v-for="link in column.links" :key="link.name">
              <router-link
                :to="link.path"
                class="text-freeze-text-muted hover:text-freeze-cyan transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-freeze-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-freeze-text-muted text-sm">
          &copy; {{ currentYear }} Freeze. All rights reserved.
        </p>
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-freeze-text-muted hover:text-freeze-cyan transition-colors">Privacy Policy</a>
          <a href="#" class="text-freeze-text-muted hover:text-freeze-cyan transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
