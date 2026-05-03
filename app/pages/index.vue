<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
      
      <!-- Container -->
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
          <h1 class="text-lg md:text-xl font-bold text-[#D35400]">AcharMaa</h1>
          <div class="flex items-center gap-6 text-xl">
            <span class="cursor-pointer hover:scale-110 transition">🔍</span>
            <span class="cursor-pointer hover:scale-110 transition">🛒</span>
          </div>
        </header>
  
        <!-- 🎯 Hero -->
        <section class="p-4 md:p-8">
          <div class="bg-[#D35400] text-white rounded-xl p-5 md:p-10 flex flex-col md:flex-row items-center justify-between">
            
            <div>
              <h2 class="text-lg md:text-3xl font-bold">Ghar ka swaad ❤️</h2>
              <p class="text-sm md:text-base opacity-90 mt-1">
                Authentic homemade achar delivered fast
              </p>
  
              <button class="mt-4 bg-white text-[#D35400] px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
                Shop Now
              </button>
            </div>
  
            <!-- image placeholder -->
            <div class="hidden md:block w-56 h-36 bg-white/20 rounded-lg"></div>
  
          </div>
        </section>
  
        <!-- 🧭 Categories -->
        <section class="px-4 md:px-8">
          <h3 class="font-semibold mb-3">Categories</h3>
  
          <div class="flex md:grid md:grid-cols-4 gap-3 overflow-x-auto md:overflow-visible pb-2">
            <div
              v-for="cat in categories"
              :key="cat.name"
              class="min-w-[90px] bg-white rounded-xl p-3 text-center shadow hover:shadow-md hover:-translate-y-1 transition"
            >
              <div class="text-2xl">{{ cat.icon }}</div>
              <p class="text-xs mt-1">{{ cat.name }}</p>
            </div>
          </div>
        </section>
  
        <!-- 🛍️ Best Sellers -->
        <section class="px-4 md:px-8 mt-6">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold">Best Sellers</h3>
            <span class="text-xs text-[#D35400] cursor-pointer hover:underline"><NuxtLink to="/shop">See all</NuxtLink></span>
          </div>
  
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="item in products"
              :key="item.name"
              class="bg-white rounded-xl p-3 shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <!-- Image -->
              <div class="h-28 bg-gray-200 rounded-lg mb-2"></div>
  
              <!-- Info -->
              <h4 class="text-sm font-semibold">{{ item.name }}</h4>
              <p class="text-xs text-gray-500">₹{{ item.price }}</p>
  
              <!-- Button -->
              <!-- ✅ Correct Cart Logic -->
              <div 
                  v-if="getCartItem(item.id)" 
                  class="flex items-center justify-between mt-2 bg-[#D35400] text-white rounded-lg px-2">

                  <!-- Minus -->
                  <button 
                    @click="cart.decrease(item.id)" 
                    class="w-8 h-8 flex items-center justify-center text-lg font-bold active:scale-90 transition">
                    -
                  </button>

                  <!-- Count -->
                  <span class="text-sm font-semibold">
                    {{ getCartItem(item.id).quantity }}
                  </span>

                  <!-- Plus -->
                  <button 
                    @click="cart.increase(item.id)" 
                    class="w-8 h-8 flex items-center justify-center text-lg font-bold active:scale-90 transition">
                    +
                  </button>

                </div>
                <button
                v-else
                class="mt-2 w-full bg-[#D35400] text-white text-sm py-1.5 rounded-lg hover:bg-[#b84300] transition"
                @click="cart.addToCart(item)">
                Add
                </button>
            </div>
          </div>
        </section>
  
        <!-- 🔥 Trending -->
        <section class="px-4 md:px-8 mt-6">
          <h3 class="font-semibold mb-3">🔥 Trending</h3>
  
          <div class="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto md:overflow-visible pb-2">
            <div
              v-for="item in trending"
              :key="item.name"
              class="min-w-[150px] bg-white rounded-xl p-3 shadow hover:shadow-md hover:-translate-y-1 transition"
            >
              <div class="h-24 bg-gray-200 rounded-lg mb-2"></div>
              <p class="text-sm font-semibold">{{ item.name }}</p>
            </div>
          </div>
        </section>
  
        <!-- ❤️ Trust -->
        <section class="px-4 md:px-8 mt-6 mb-6">
          <div class="bg-white rounded-xl p-4 md:p-6 grid grid-cols-3 text-center text-xs md:text-sm">
            <div class="hover:scale-105 transition">
              <p class="text-xl">🏡</p>
              <p>Homemade</p>
            </div>
            <div class="hover:scale-105 transition">
              <p class="text-xl">🌿</p>
              <p>No Preservatives</p>
            </div>
            <div class="hover:scale-105 transition">
              <p class="text-xl">🚚</p>
              <p>Fast Delivery</p>
            </div>
          </div>
        </section>
  
      </div>
  
      <!-- 📱 Bottom Nav (mobile only) -->
      <nav class="fixed md:hidden bottom-0 left-0 w-full bg-white flex justify-around py-2 text-sm">
        <div class="flex flex-col items-center text-[#D35400]">
          <span>🏠</span>
          <span>Home</span>
        </div>
        <div class="flex flex-col items-center">
          <span>🛍️</span>
          <span>Shop</span>
        </div>
        <div class="flex flex-col items-center">
          <span>🛒</span>
          <span>Cart</span>
        </div>
        <div class="flex flex-col items-center">
          <span>👤</span>
          <span>Profile</span>
        </div>
      </nav>
  
    </div>
  </template>
  
<script setup>

import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

const getCartItem = (id) => {
  return cart.items.find(i => i.id === id)
}

  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
  const products = [
  { id: 1, name: 'Mango Achar', price: 199 },
  { id: 2, name: 'Lemon Achar', price: 149 },
  { id: 3, name: 'Mix Achar', price: 179 },
  { id: 4, name: 'Chilli Achar', price: 129 },
]
  
  const trending = [
    { name: 'Garlic Achar' },
    { name: 'Green Chilli Achar' },
    { name: 'Punjabi Mix Achar' },
  ]
  </script>