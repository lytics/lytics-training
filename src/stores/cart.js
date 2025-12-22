import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isOpen = ref(false)

  // Computed
  const itemCount = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const tax = computed(() => {
    return subtotal.value * 0.08 // 8% tax
  })

  const total = computed(() => {
    return subtotal.value + tax.value
  })

  // Actions
  function addItem(product, size = 'medium', quantity = 1) {
    const existingItem = items.value.find(
      item => item.productId === product.id && item.size === size
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({
        id: Date.now(),
        productId: product.id,
        name: product.name,
        image: product.image,
        size,
        price: product.price[size],
        quantity
      })
    }

    // Open cart drawer when item is added
    isOpen.value = true
  }

  function removeItem(itemId) {
    const index = items.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(itemId, quantity) {
    const item = items.value.find(item => item.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeItem(itemId)
      } else {
        item.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  function toggleCart() {
    isOpen.value = !isOpen.value
  }

  function openCart() {
    isOpen.value = true
  }

  function closeCart() {
    isOpen.value = false
  }

  return {
    items,
    isOpen,
    itemCount,
    subtotal,
    tax,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
  }
})
