import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import usersData from '../data/users.json'

// Demo users loaded from JSON file
const DEMO_USERS = usersData.users

// Mock order history
const MOCK_ORDERS = [
  {
    id: 'FRZ-001',
    date: '2026-01-15',
    status: 'Completed',
    items: [
      { name: 'Matcha Zen Garden', size: 'Large', quantity: 1, price: 11.49 },
      { name: 'Blueberry Mochi Dream', size: 'Medium', quantity: 2, price: 8.99 }
    ],
    total: 29.47
  },
  {
    id: 'FRZ-002',
    date: '2026-01-10',
    status: 'Completed',
    items: [
      { name: 'Cookie Monster Craze', size: 'Medium', quantity: 1, price: 8.99 }
    ],
    total: 9.71
  },
  {
    id: 'FRZ-003',
    date: '2026-01-05',
    status: 'Completed',
    items: [
      { name: 'Tropical Mango Paradise', size: 'Small', quantity: 3, price: 5.99 },
      { name: 'Açaí Power Bowl', size: 'Large', quantity: 1, price: 11.49 }
    ],
    total: 30.90
  }
]

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoginModalOpen = ref(false)
  const loginError = ref(null)

  // Try to restore user from localStorage
  const savedUser = localStorage.getItem('freeze_user')
  if (savedUser) {
    try {
      user.value = JSON.parse(savedUser)
    } catch (e) {
      localStorage.removeItem('freeze_user')
    }
  }

  // Computed
  const isAuthenticated = computed(() => !!user.value)

  const orders = computed(() => {
    if (!user.value) return []
    return MOCK_ORDERS
  })

  // Actions
  function login(email, password) {
    loginError.value = null

    const foundUser = DEMO_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      user.value = userWithoutPassword
      localStorage.setItem('freeze_user', JSON.stringify(userWithoutPassword))
      isLoginModalOpen.value = false
      return true
    } else {
      loginError.value = 'Invalid email or password'
      return false
    }
  }

  function logout() {
    user.value = null
    localStorage.removeItem('freeze_user')
  }

  function openLoginModal() {
    loginError.value = null
    isLoginModalOpen.value = true
  }

  function closeLoginModal() {
    isLoginModalOpen.value = false
    loginError.value = null
  }

  return {
    user,
    isLoginModalOpen,
    loginError,
    isAuthenticated,
    orders,
    login,
    logout,
    openLoginModal,
    closeLoginModal
  }
})
