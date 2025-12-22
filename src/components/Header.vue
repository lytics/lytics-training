<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const cartStore = useCartStore()
const authStore = useAuthStore()

const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black">
    <!-- Neon gradient line -->
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-freeze-cyan via-freeze-magenta to-freeze-cyan opacity-60"></div>
    <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-freeze-cyan via-freeze-magenta to-freeze-cyan blur-sm"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 group" @click="closeMobileMenu">
          <img src="/images/logo.jpg" alt="Freeze" class="h-10 md:h-12 w-auto" />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            :class="[
              'text-sm font-medium uppercase tracking-wider transition-all duration-300',
              isActive(item.path)
                ? 'text-freeze-cyan text-glow-cyan'
                : 'text-freeze-text-muted hover:text-freeze-cyan'
            ]"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center gap-4">
          <!-- Account -->
          <div class="hidden md:block">
            <template v-if="authStore.isAuthenticated">
              <router-link
                to="/account"
                class="flex items-center gap-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-sm">{{ authStore.user.name }}</span>
              </router-link>
            </template>
            <template v-else>
              <button
                @click="authStore.openLoginModal"
                class="flex items-center gap-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-sm">Sign In</span>
              </button>
            </template>
          </div>

          <!-- Cart Button -->
          <button
            @click="cartStore.toggleCart"
            class="relative p-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span
              v-if="cartStore.itemCount > 0"
              class="badge"
            >
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="mobileMenuOpen" class="md:hidden pb-4 border-t border-freeze-border mt-2 pt-4">
          <div class="flex flex-col gap-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              @click="closeMobileMenu"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider transition-all',
                isActive(item.path)
                  ? 'bg-freeze-card text-freeze-cyan'
                  : 'text-freeze-text-muted hover:bg-freeze-card hover:text-freeze-cyan'
              ]"
            >
              {{ item.name }}
            </router-link>

            <!-- Mobile auth -->
            <div class="mt-2 pt-2 border-t border-freeze-border">
              <template v-if="authStore.isAuthenticated">
                <router-link
                  to="/account"
                  @click="closeMobileMenu"
                  class="flex items-center gap-2 px-4 py-2 text-freeze-text-muted hover:text-freeze-cyan"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>My Account</span>
                </router-link>
              </template>
              <template v-else>
                <button
                  @click="authStore.openLoginModal(); closeMobileMenu()"
                  class="flex items-center gap-2 px-4 py-2 text-freeze-text-muted hover:text-freeze-cyan w-full"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Sign In</span>
                </button>
              </template>
            </div>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>
