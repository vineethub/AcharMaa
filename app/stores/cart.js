// stores/cart.js

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
    addToCart(product) {
      const existing = this.items.find(
        i => i.variantId === product.variantId
      )

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
    },

    increase(variantId) {
      const item = this.items.find(i => i.variantId === variantId)
      if (item) item.quantity++
    },

    decrease(variantId) {
      const item = this.items.find(i => i.variantId === variantId)

      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.items = this.items.filter(i => i.variantId !== variantId)
      }
    }
  }
})