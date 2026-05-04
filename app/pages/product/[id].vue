<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-24">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
          
          <button @click="$router.back()" class="text-lg">←</button>
  
          <h1 class="font-semibold text-[#D35400]">Product</h1>
  
          <NuxtLink to="/cart" class="relative text-xl">
            🛒
            <span 
              v-if="cart.totalItems"
              class="absolute -top-2 -right-2 bg-[#D35400] text-white text-xs px-1 rounded-full"
            >
              {{ cart.totalItems }}
            </span>
          </NuxtLink>
  
        </header>
  
        <!-- 🖼️ Image -->
        <div class="p-4">
          <div class="h-60 bg-white rounded-xl shadow flex items-center justify-center">
            <span class="text-5xl">🥭</span>
          </div>
        </div>
  
        <!-- 📦 Info -->
        <div class="px-4">
  
          <h2 class="text-xl font-bold">{{ product.name }}</h2>
          <p class="text-gray-500 text-sm mt-1">Homemade & Fresh</p>
  
          <p class="text-2xl font-bold text-[#D35400] mt-2">
            ₹{{ product.price }}
          </p>
  
          <!-- ⭐ Rating (fake for now) -->
          <div class="text-sm text-gray-500 mt-1">
            ⭐ 4.5 • 120 reviews
          </div>
  
        </div>
  
        <!-- 🧾 Description -->
        <div class="px-4 mt-6">
          <h3 class="font-semibold mb-2">About Product</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Authentic homemade achar made with traditional recipes and fresh ingredients.
            No preservatives, full of flavor, and made with love ❤️
          </p>
        </div>
  
      </div>
  
      <!-- 🛒 Bottom CTA -->
      <div class="fixed bottom-0 left-0 w-full bg-white border-t p-4">
  
        <!-- ✅ Cart UI -->
        <div v-if="cartItem" class="flex items-center justify-between bg-[#D35400] text-white rounded-xl px-4 py-2">
  
          <button @click="cart.decrease(product.id)" class="text-lg font-bold">-</button>
  
          <span class="font-semibold">
            {{ cartItem.quantity }}
          </span>
  
          <button @click="cart.increase(product.id)" class="text-lg font-bold">+</button>
  
        </div>
  
        <!-- Add Button -->
        <button
          v-else
          @click="cart.addToCart(product)"
          class="w-full bg-[#D35400] text-white py-3 rounded-xl text-lg font-semibold"
        >
          Add to Cart
        </button>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { useCartStore } from '@/stores/cart'
  
  const route = useRoute()
  const cart = useCartStore()
  
  // Dummy data (later from API)
  const products = [
    { id: 1, name: 'Mango Achar', price: 199 },
    { id: 2, name: 'Lemon Achar', price: 149 },
    { id: 3, name: 'Mix Achar', price: 179 },
    { id: 4, name: 'Chilli Achar', price: 129 },
  ]
  
  const product = products.find(p => p.id == route.params.id)
  
  const cartItem = computed(() => {
    return cart.items.find(i => i.id == product?.id)
  })
  </script>