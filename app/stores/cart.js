import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, i) => sum + i.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  },

  actions: {
    // ✅ Load (CLIENT ONLY)
    loadCart() {
      if (import.meta.client) {
        const data = localStorage.getItem('cart')
        if (data) {
          this.items = JSON.parse(data)
        }
      }
    },

    // ✅ Save
    saveCart() {
      if (import.meta.client) {
        localStorage.setItem('cart', JSON.stringify(this.items))
      }
    },

    addToCart(product) {
      const existing = this.items.find(
        i => i.variantId === product.variantId
      )

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }

      this.saveCart()
    },

    increase(variantId) {
      const item = this.items.find(i => i.variantId === variantId)
      if (item) item.quantity++

      this.saveCart()
    },

    decrease(variantId) {
      const item = this.items.find(i => i.variantId === variantId)

      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.items = this.items.filter(i => i.variantId !== variantId)
      }

      this.saveCart()
    }
  }
})