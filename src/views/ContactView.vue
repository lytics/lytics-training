<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
}

const contactInfo = [
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Visit Us',
    lines: ['123 Freeze Lane', 'Portland, OR 97204']
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email Us',
    lines: ['hello@freeze.com', 'support@freeze.com']
  },
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Call Us',
    lines: ['(555) 123-4567', 'Mon-Sun: 11am - 10pm']
  }
]

const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 9:00 PM' },
  { day: 'Friday - Saturday', time: '11:00 AM - 10:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 8:00 PM' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="py-12 md:py-16 bg-freeze-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="info in contactInfo"
            :key="info.title"
            class="bg-freeze-card rounded-2xl border border-freeze-border p-6 text-center hover:border-freeze-cyan transition-colors"
          >
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-freeze-cyan/20 flex items-center justify-center">
              <svg class="w-7 h-7 text-freeze-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
              </svg>
            </div>
            <h3 class="text-white font-semibold text-lg mb-2">{{ info.title }}</h3>
            <p v-for="line in info.lines" :key="line" class="text-freeze-text-muted">
              {{ line }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Hours -->
    <section class="py-12 md:py-16 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">Send Us a Message</h2>

            <div v-if="isSubmitted" class="bg-freeze-cyan/20 border border-freeze-cyan rounded-xl p-6 text-center">
              <svg class="w-12 h-12 mx-auto mb-4 text-freeze-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <h3 class="text-white font-semibold text-lg mb-2">Message Sent!</h3>
              <p class="text-freeze-text-muted">Thanks for reaching out. We'll get back to you soon.</p>
              <button @click="isSubmitted = false" class="mt-4 text-freeze-cyan hover:underline">
                Send another message
              </button>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-freeze-text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Your name"
                    class="input-dark"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-freeze-text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    class="input-dark"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-freeze-text-muted mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  class="input-dark"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-freeze-text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Your message..."
                  class="input-dark resize-none"
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="btn-primary w-full flex items-center justify-center gap-2"
              >
                <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>
          </div>

          <!-- Store Hours & Map -->
          <div class="space-y-8">
            <!-- Hours -->
            <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6">
              <h3 class="text-xl font-bold text-white mb-4">Store Hours</h3>
              <div class="space-y-3">
                <div
                  v-for="hour in hours"
                  :key="hour.day"
                  class="flex justify-between items-center"
                >
                  <span class="text-freeze-text-muted">{{ hour.day }}</span>
                  <span class="text-white font-medium">{{ hour.time }}</span>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-freeze-card rounded-2xl border border-freeze-border overflow-hidden">
              <div class="aspect-video bg-freeze-darker flex items-center justify-center">
                <div class="text-center">
                  <svg class="w-12 h-12 mx-auto mb-3 text-freeze-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p class="text-freeze-text-muted">123 Freeze Lane</p>
                  <p class="text-freeze-text-muted">Portland, OR 97204</p>
                  <a href="#" class="text-freeze-cyan hover:underline text-sm mt-2 inline-block">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <!-- Social -->
            <div class="bg-freeze-card rounded-2xl border border-freeze-border p-6">
              <h3 class="text-xl font-bold text-white mb-4">Follow Us</h3>
              <p class="text-freeze-text-muted mb-4">Stay connected for the latest flavors and promotions.</p>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-freeze-border text-freeze-text-muted hover:text-freeze-cyan hover:border-freeze-cyan transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
