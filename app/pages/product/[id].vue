<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-28">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
          
          <button @click="$router.back()" class="text-lg">←</button>
  
          <h1 class="font-semibold text-[#D35400] truncate">
            {{ product.name }}
          </h1>
  
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
  
        <!-- 🖼️ Product Image -->
        <div class="bg-white p-6 flex justify-center">
          <div class="w-56 h-56 bg-gray-200 rounded-xl flex items-center justify-center shadow">
            <span class="text-6xl">🥭</span>
          </div>
        </div>
  
        <!-- 📦 Info -->
        <div class="px-4 mt-4">
  
          <h2 class="text-xl font-bold">{{ product.name }}</h2>
  
          <p class="text-sm text-gray-500 mt-1">
            Homemade • No preservatives • Fresh batch
          </p>
  
          <!-- ⭐ Rating -->
          <div class="flex items-center gap-2 mt-2 text-sm">
            <span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">4.5 ★</span>
            <span class="text-gray-500">(120 reviews)</span>
          </div>
  
        </div>
  
        <!-- 🔥 Highlights -->
        <div class="px-4 mt-6 grid grid-cols-3 gap-3 text-center text-xs">
          <div class="bg-white p-3 rounded-xl shadow">
            🏡 <br /> Homemade
          </div>
          <div class="bg-white p-3 rounded-xl shadow">
            🌿 <br /> No Preservatives
          </div>
          <div class="bg-white p-3 rounded-xl shadow">
            🚚 <br /> Fast Delivery
          </div>
        </div>
  
        <!-- 🧾 Description -->
        <div class="px-4 mt-6">
          <h3 class="font-semibold mb-2">About this product</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            This achar is prepared using traditional recipes with fresh ingredients.
            Packed with authentic flavors and made with love ❤️. Perfect for daily meals.
          </p>
        </div>
  
        <!-- 🧠 Why choose -->
        <div class="px-4 mt-6">
          <h3 class="font-semibold mb-2">Why choose this?</h3>
  
          <ul class="text-sm text-gray-600 space-y-1">
            <li>✔ Authentic homemade taste</li>
            <li>✔ No artificial chemicals</li>
            <li>✔ Prepared in small batches</li>
          </ul>
        </div>

        <!-- 🧡 Similar Products -->
        <div class="px-4 mt-8">

        <h3 class="font-semibold mb-3">You may also like</h3>

        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

        <div 
            v-for="item in similarProducts" 
            :key="item.id"
            class="min-w-[150px]"
        >
            <ProductCard :product="item" />
        </div>

        </div>

        </div>
  
      </div>
  
      <!-- 🛒 Sticky Bottom Bar -->
      <div class="fixed bottom-0 left-0 w-full bg-white  p-4 flex items-center justify-between">
  
        <!-- Price -->
        <div>
          <p class="text-xs text-gray-500">Price</p>
          <p class="text-lg font-bold text-[#D35400]">
            ₹{{ product.price }}
          </p>
        </div>
  
        <!-- CTA -->
        <div class="w-1/2">
  
          <!-- Quantity -->
          <div v-if="cartItem" class="flex items-center justify-between bg-[#D35400] text-white rounded-xl px-4 py-2">
  
            <button @click="cart.decrease(product.id)" class="text-lg font-bold">-</button>
  
            <span class="font-semibold">
              {{ cartItem.quantity }}
            </span>
  
            <button @click="cart.increase(product.id)" class="text-lg font-bold">+</button>
  
          </div>
  
          <!-- Add -->
          <button
            v-else
            @click="cart.addToCart(product)"
            class="w-full bg-[#D35400] text-white py-3 rounded-xl font-semibold"
          >
            Add to Cart
          </button>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { useCartStore } from '@/stores/cart'
  import ProductCard from '@/components/ProductCard.vue'

  const similarProducts = computed(() => {
  return products.filter(p => p.id != product?.id)
  })
  
  const route = useRoute()
  const cart = useCartStore()
  
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

<style  scoped>

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

</style>