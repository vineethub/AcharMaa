<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
  
      <!-- 🔝 Header -->
      <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-bold text-[#D35400]">AcharMaa</h1>
        <div class="flex items-center gap-4 text-xl">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </header>
  
      <!-- 🎯 Hero -->
      <section class="p-4">
        <div class="bg-[#D35400] text-white rounded-xl p-4">
          <h2 class="text-lg font-bold">Ghar ka swaad ❤️</h2>
          <p class="text-sm opacity-90">Authentic homemade achar</p>
          <button class="mt-3 bg-white text-[#D35400] px-4 py-2 rounded-lg text-sm font-semibold">
            Shop Now
          </button>
        </div>
      </section>
  
      <!-- 🧭 Categories -->
      <section class="px-4">
        <h3 class="font-semibold mb-3">Categories</h3>
        <div class="flex gap-3 overflow-x-auto pb-2">
          <div
            v-for="cat in categories"
            :key="cat.name"
            class="min-w-[80px] bg-white rounded-xl p-3 text-center shadow"
          >
            <div class="text-2xl">{{ cat.icon }}</div>
            <p class="text-xs mt-1">{{ cat.name }}</p>
          </div>
        </div>
      </section>
  
      <!-- 🛍️ Best Sellers -->
      <section class="px-4 mt-5">
        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold">Best Sellers</h3>
          <span class="text-xs text-[#D35400]">See all</span>
        </div>
  
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div
            v-for="item in products"
            :key="item.name"
            class="bg-white rounded-xl p-2 shadow"
          >
            <!-- Image -->
            <div class="h-24 bg-gray-200 rounded-lg mb-2"></div>
  
            <!-- Info -->
            <h4 class="text-sm font-semibold">{{ item.name }}</h4>
            <p class="text-xs text-gray-500">₹{{ item.price }}</p>
  
            <!-- Button -->
            <button
              class="mt-2 w-full bg-[#D35400] text-white text-sm py-1.5 rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
      </section>
  
      <!-- 🔥 Trending -->
      <section class="px-4 mt-6">
        <h3 class="font-semibold mb-3">🔥 Trending</h3>
        <div class="flex gap-3 overflow-x-auto pb-2">
          <div
            v-for="item in trending"
            :key="item.name"
            class="min-w-[140px] bg-white rounded-xl p-2 shadow"
          >
            <div class="h-20 bg-gray-200 rounded-lg mb-2"></div>
            <p class="text-sm font-semibold">{{ item.name }}</p>
          </div>
        </div>
      </section>
  
      <!-- ❤️ Trust -->
      <section class="px-4 mt-6">
        <div class="bg-white rounded-xl p-4 grid grid-cols-3 text-center text-xs">
          <div>
            <p class="text-xl">🏡</p>
            <p>Homemade</p>
          </div>
          <div>
            <p class="text-xl">🌿</p>
            <p>No Preservatives</p>
          </div>
          <div>
            <p class="text-xl">🚚</p>
            <p>Fast Delivery</p>
          </div>
        </div>
      </section>
  
      <!-- 📱 Bottom Nav -->
      <nav class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 text-sm">
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
  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
  const products = [
    { name: 'Mango Achar', price: 199 },
    { name: 'Lemon Achar', price: 149 },
    { name: 'Mix Achar', price: 179 },
    { name: 'Chilli Achar', price: 129 },
  ]
  
  const trending = [
    { name: 'Garlic Achar' },
    { name: 'Green Chilli Achar' },
    { name: 'Punjabi Mix Achar' },
  ]
  </script>