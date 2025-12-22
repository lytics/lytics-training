<script setup>
const allergenInfo = [
  {
    name: 'Milk/Dairy',
    icon: '🥛',
    description: 'All of our frozen yogurt products contain milk and dairy derivatives.',
    products: 'Present in all menu items'
  },
  {
    name: 'Nuts',
    icon: '🥜',
    description: 'Some toppings and flavors contain tree nuts or peanuts.',
    products: 'Cookie Monster Craze, Salted Caramel Pretzel, select toppings'
  },
  {
    name: 'Soy',
    icon: '🫘',
    description: 'Soy lecithin is used in some of our chocolate-based products.',
    products: 'Double Chocolate Fudge, Cookie Monster Craze'
  },
  {
    name: 'Gluten',
    icon: '🌾',
    description: 'Some flavors contain wheat-based ingredients or cookie pieces.',
    products: 'Cookie Monster Craze, Salted Caramel Pretzel, certain toppings'
  },
  {
    name: 'Eggs',
    icon: '🥚',
    description: 'Some of our premium flavors contain egg products.',
    products: 'Classic Vanilla Bean, select specialty flavors'
  }
]

const safetyNote = `
Our facility processes products containing all major allergens. While we take precautions to prevent cross-contamination,
we cannot guarantee that any item is completely free from allergens. If you have a severe allergy, please consult with
our staff before ordering.
`
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Allergen Information
          </h1>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            We want you to enjoy our frozen yogurt safely. Here's everything you need to know about allergens in our products.
          </p>
        </div>
      </div>
    </section>

    <!-- Allergen Grid -->
    <section class="py-12 md:py-16 bg-freeze-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6">
          <div
            v-for="allergen in allergenInfo"
            :key="allergen.name"
            class="bg-freeze-card border border-freeze-border rounded-xl p-6"
          >
            <div class="flex items-start gap-4">
              <span class="text-4xl">{{ allergen.icon }}</span>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-white mb-2">{{ allergen.name }}</h3>
                <p class="text-freeze-text-muted mb-3">{{ allergen.description }}</p>
                <p class="text-sm">
                  <span class="text-freeze-cyan font-medium">Found in: </span>
                  <span class="text-freeze-text">{{ allergen.products }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Safety Note -->
        <div class="mt-8 p-6 bg-freeze-magenta/10 border border-freeze-magenta/30 rounded-xl">
          <div class="flex items-start gap-4">
            <span class="text-2xl">⚠️</span>
            <div>
              <h3 class="text-lg font-semibold text-freeze-magenta mb-2">Important Safety Information</h3>
              <p class="text-freeze-text-muted text-sm leading-relaxed">{{ safetyNote }}</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="mt-8 text-center">
          <p class="text-freeze-text-muted mb-4">Have specific questions about allergens?</p>
          <router-link to="/contact" class="btn-primary">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
