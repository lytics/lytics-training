<script setup>
const nutritionData = [
  {
    name: 'Classic Vanilla Bean',
    serving: '6 oz (170g)',
    calories: 180,
    fat: 4,
    saturatedFat: 2.5,
    carbs: 32,
    sugar: 24,
    protein: 6,
    sodium: 95
  },
  {
    name: 'Double Chocolate Fudge',
    serving: '6 oz (170g)',
    calories: 210,
    fat: 5,
    saturatedFat: 3,
    carbs: 38,
    sugar: 28,
    protein: 7,
    sodium: 110
  },
  {
    name: 'Strawberry Bliss',
    serving: '6 oz (170g)',
    calories: 170,
    fat: 3.5,
    saturatedFat: 2,
    carbs: 30,
    sugar: 22,
    protein: 5,
    sodium: 85
  },
  {
    name: 'Matcha Zen Garden',
    serving: '6 oz (170g)',
    calories: 175,
    fat: 4,
    saturatedFat: 2.5,
    carbs: 29,
    sugar: 21,
    protein: 6,
    sodium: 90
  },
  {
    name: 'Tropical Mango Paradise',
    serving: '6 oz (170g)',
    calories: 165,
    fat: 3,
    saturatedFat: 2,
    carbs: 31,
    sugar: 25,
    protein: 5,
    sodium: 80
  },
  {
    name: 'Salted Caramel Pretzel',
    serving: '6 oz (170g)',
    calories: 220,
    fat: 6,
    saturatedFat: 3.5,
    carbs: 36,
    sugar: 26,
    protein: 6,
    sodium: 180
  },
  {
    name: 'Blueberry Mochi Dream',
    serving: '6 oz (170g)',
    calories: 185,
    fat: 4,
    saturatedFat: 2.5,
    carbs: 33,
    sugar: 23,
    protein: 5,
    sodium: 95
  },
  {
    name: 'Cookie Monster Craze',
    serving: '6 oz (170g)',
    calories: 240,
    fat: 7,
    saturatedFat: 4,
    carbs: 40,
    sugar: 30,
    protein: 6,
    sodium: 150
  }
]

const dailyValues = {
  calories: 2000,
  fat: 78,
  saturatedFat: 20,
  carbs: 275,
  sugar: 50,
  protein: 50,
  sodium: 2300
}

const getDV = (value, nutrient) => {
  return Math.round((value / dailyValues[nutrient]) * 100)
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 bg-freeze-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Nutrition Information
          </h1>
          <p class="text-freeze-text-muted max-w-2xl mx-auto">
            Making informed choices is important. Here's the nutritional breakdown of our most popular flavors.
          </p>
        </div>
      </div>
    </section>

    <!-- Nutrition Table -->
    <section class="py-12 md:py-16 bg-freeze-dark">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Desktop Table -->
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-freeze-border">
                <th class="text-left py-4 px-4 text-freeze-text-muted font-medium">Flavor</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Serving</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Calories</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Fat (g)</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Carbs (g)</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Sugar (g)</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Protein (g)</th>
                <th class="text-center py-4 px-3 text-freeze-text-muted font-medium">Sodium (mg)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in nutritionData"
                :key="item.name"
                class="border-b border-freeze-border/50 hover:bg-freeze-card/50 transition-colors"
              >
                <td class="py-4 px-4 text-white font-medium">{{ item.name }}</td>
                <td class="py-4 px-3 text-center text-freeze-text-muted text-sm">{{ item.serving }}</td>
                <td class="py-4 px-3 text-center text-freeze-cyan font-semibold">{{ item.calories }}</td>
                <td class="py-4 px-3 text-center text-freeze-text">{{ item.fat }}</td>
                <td class="py-4 px-3 text-center text-freeze-text">{{ item.carbs }}</td>
                <td class="py-4 px-3 text-center text-freeze-text">{{ item.sugar }}</td>
                <td class="py-4 px-3 text-center text-freeze-text">{{ item.protein }}</td>
                <td class="py-4 px-3 text-center text-freeze-text">{{ item.sodium }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Cards -->
        <div class="md:hidden space-y-4">
          <div
            v-for="item in nutritionData"
            :key="item.name"
            class="bg-freeze-card border border-freeze-border rounded-xl p-4"
          >
            <h3 class="text-white font-semibold mb-3">{{ item.name }}</h3>
            <p class="text-freeze-text-muted text-sm mb-3">Serving: {{ item.serving }}</p>
            <div class="grid grid-cols-2 gap-2 text-sm">
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Calories</span>
                <span class="text-freeze-cyan font-semibold">{{ item.calories }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Fat</span>
                <span class="text-freeze-text">{{ item.fat }}g</span>
              </div>
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Carbs</span>
                <span class="text-freeze-text">{{ item.carbs }}g</span>
              </div>
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Sugar</span>
                <span class="text-freeze-text">{{ item.sugar }}g</span>
              </div>
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Protein</span>
                <span class="text-freeze-text">{{ item.protein }}g</span>
              </div>
              <div class="flex justify-between">
                <span class="text-freeze-text-muted">Sodium</span>
                <span class="text-freeze-text">{{ item.sodium }}mg</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="mt-8 p-6 bg-freeze-card border border-freeze-border rounded-xl">
          <h3 class="text-white font-semibold mb-2">Important Notes</h3>
          <ul class="text-freeze-text-muted text-sm space-y-2">
            <li>* Percent Daily Values are based on a 2,000 calorie diet.</li>
            <li>* Nutrition information is for base frozen yogurt only. Toppings will add additional calories and nutrients.</li>
            <li>* Values may vary slightly based on serving size and preparation.</li>
            <li>* For specific dietary concerns, please speak with our staff.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
