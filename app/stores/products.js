import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Mango Achar',
        category: 'Mango',
        images: [
          '/images/mango1.jpg',
          '/images/mango2.jpg',
          '/images/mango3.jpg'
        ],
        variants: [
          { id: '1-250', label: '250g', price: 199 },
          { id: '1-500', label: '500g', price: 349 },
          { id: '1-1kg', label: '1kg', price: 649 }
        ]
      },

      {
        id: 2,
        name: 'Lemon Achar',
        category: 'Lemon',
        images: [
          '/images/lemon1.jpg',
          '/images/lemon2.jpg'
        ],
        variants: [
          { id: '2-250', label: '250g', price: 149 },
          { id: '2-500', label: '500g', price: 279 },
          { id: '2-1kg', label: '1kg', price: 499 }
        ]
      },

      {
        id: 3,
        name: 'Mix Achar',
        category: 'Mixed',
        images: [
          '/images/mix1.jpg',
          '/images/mix2.jpg'
        ],
        variants: [
          { id: '3-250', label: '250g', price: 179 },
          { id: '3-500', label: '500g', price: 329 },
          { id: '3-1kg', label: '1kg', price: 599 }
        ]
      },

      {
        id: 4,
        name: 'Chilli Achar',
        category: 'Spicy',
        images: [
          '/images/chilli1.jpg',
          '/images/chilli2.jpg'
        ],
        variants: [
          { id: '4-250', label: '250g', price: 129 },
          { id: '4-500', label: '500g', price: 249 },
          { id: '4-1kg', label: '1kg', price: 469 }
        ]
      }
    ]
  }),

  getters: {
    getProductById: (state) => {
      return (id) => state.products.find(p => p.id == id)
    },

    getProductsByCategory: (state) => {
      return (category) =>
        state.products.filter(p => p.category === category)
    },
    searchedProducts: (state) => {
      return state.products.filter(product =>
        product.name.toLowerCase().includes(state.search.toLowerCase())
      )
    },
  }
})