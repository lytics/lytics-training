<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import CartDrawer from './components/CartDrawer.vue'
import LoginModal from './components/LoginModal.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-freeze-dark">
    <Header />
    <main class="flex-1 pt-16 md:pt-20">
      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />

    <!-- Global Components -->
    <CartDrawer />
    <LoginModal />
  </div>
</template>
