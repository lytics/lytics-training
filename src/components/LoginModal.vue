<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useAuthStore } from '../stores/auth'
import usersData from '../data/users.json'

const authStore = useAuthStore()
const demoUsers = usersData.users

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const showDemoCredentials = ref(false)

// Konami-style code: up up down down left right
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
let inputSequence = []

const handleKeydown = (e) => {
  // Only track arrow keys
  if (!e.key.startsWith('Arrow')) return

  inputSequence.push(e.key)

  // Keep only the last N keys (length of secret code)
  if (inputSequence.length > secretCode.length) {
    inputSequence.shift()
  }

  // Check if sequence matches
  if (inputSequence.length === secretCode.length &&
      inputSequence.every((key, i) => key === secretCode[i])) {
    showDemoCredentials.value = true
    inputSequence = []
  }
}

// Add/remove listener when modal opens/closes
watch(() => authStore.isLoginModalOpen, (isOpen) => {
  if (isOpen) {
    window.addEventListener('keydown', handleKeydown)
  } else {
    window.removeEventListener('keydown', handleKeydown)
    showDemoCredentials.value = false
    inputSequence = []
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const handleSubmit = async () => {
  isLoading.value = true

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))

  authStore.login(email.value, password.value)

  isLoading.value = false

  if (authStore.isAuthenticated) {
    email.value = ''
    password.value = ''
  }
}

const handleClose = () => {
  email.value = ''
  password.value = ''
  authStore.closeLoginModal()
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
      v-if="authStore.isLoginModalOpen"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click.self="handleClose"
    >
      <!-- Modal -->
      <transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="authStore.isLoginModalOpen"
          class="w-full max-w-md bg-freeze-darker border border-freeze-border rounded-2xl p-6 md:p-8"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-white">Sign In</h2>
            <button
              @click="handleClose"
              class="p-2 text-freeze-text-muted hover:text-freeze-cyan transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-freeze-text-muted mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="you@example.com"
                class="input-dark"
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-freeze-text-muted mb-2">
                Password
              </label>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="••••••••"
                class="input-dark"
              />
            </div>

            <!-- Error Message -->
            <div v-if="authStore.loginError" class="p-3 bg-freeze-magenta/20 border border-freeze-magenta rounded-lg text-freeze-magenta text-sm">
              {{ authStore.loginError }}
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="btn-primary w-full flex items-center justify-center gap-2"
            >
              <svg v-if="isLoading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{{ isLoading ? 'Signing in...' : 'Sign In' }}</span>
            </button>
          </form>

          <!-- Demo Credentials (hidden until secret code entered) -->
          <transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="showDemoCredentials" class="mt-6 p-4 bg-freeze-card rounded-lg border border-freeze-cyan/50 overflow-hidden">
              <p class="text-freeze-cyan text-sm mb-2 font-medium">Demo credentials unlocked!</p>
              <p class="text-freeze-text text-sm mb-2">Password for all users: <span class="text-freeze-cyan font-mono">imademouser</span></p>
              <div class="max-h-32 overflow-y-auto space-y-1 text-sm">
                <p v-for="user in demoUsers" :key="user.id" class="text-freeze-text">
                  <span class="text-freeze-cyan">{{ user.email }}</span>
                  <span v-if="user.role === 'admin'" class="ml-1 text-freeze-magenta text-xs">(admin)</span>
                </p>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </transition>
</template>
