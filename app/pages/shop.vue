<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
          <h1 class="text-lg md:text-xl font-bold text-[#D35400]">AcharMaa</h1>
          <div class="flex items-center gap-6 text-xl">
            <span>🔍</span>
            <span>🛒</span>
          </div>
        </header>
  
        <!-- 🏷️ Title -->
        <!-- <section class="px-4 md:px-8 mt-4">
          <h2 class="text-lg md:text-2xl font-bold">Shop Pickles 🥭</h2>
        </section> -->
  
        <!-- 🧱 Layout -->
<div class="flex mt-0">

<!-- 🧭 Left Category Rail -->
<aside class="w-20 bg-white sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">

  <div
    v-for="cat in categories"
    :key="cat.name"
    @click="activeCategory = cat.name"
    class="flex flex-col items-center py-4 cursor-pointer relative"
  >
    
    <!-- Active Indicator -->
    <div 
      v-if="activeCategory === cat.name"
      class="absolute left-0 top-2 bottom-2 w-1 bg-[#D35400] rounded-r"
    ></div>

    <!-- Icon -->
    <div 
      :class="[
        'w-11 h-11 flex items-center justify-center rounded-full text-xl transition',
        activeCategory === cat.name 
          ? 'bg-[#FFF5E1]' 
          : 'bg-gray-100'
      ]"
    >
      {{ cat.icon }}
    </div>

    <!-- Label -->
    <p 
      class="text-[11px] mt-1 text-center leading-tight px-1"
      :class="activeCategory === cat.name ? 'text-[#D35400] font-semibold' : 'text-gray-500'"
    >
      {{ cat.name }}
    </p>

  </div>

</aside>

<!-- 🛍️ Products -->
<section class="flex-1 px-4 md:px-6">

  <!-- ✅ Category Title (IMPORTANT) -->
  <h3 class="text-base md:text-lg font-semibold mb-4">
    {{ activeCategory }} Pickles
  </h3>

  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

    <div
      v-for="item in filteredProducts"
      :key="item.id"
      class="bg-white rounded-xl p-3 shadow hover:shadow-lg hover:-translate-y-1 transition"
    >
      <div class="h-28 bg-gray-200 rounded-lg mb-2"></div>

      <h4 class="text-sm font-semibold">{{ item.name }}</h4>
      <p class="text-xs text-gray-500">₹{{ item.price }}</p>

      <button class="mt-2 w-full bg-[#D35400] text-white text-sm py-1.5 rounded-lg hover:bg-[#b84300] transition">
        Add
      </button>
    </div>

  </div>

</section>

</div>
</div>
  
      <!-- 📱 Bottom Nav -->
      <nav class="fixed md:hidden bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 text-sm">
        <div class="flex flex-col items-center">
          <span>🏠</span>
          <span>Home</span>
        </div>
        <div class="flex flex-col items-center text-[#D35400]">
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
  import { ref, computed } from 'vue'
  
  const activeCategory = ref('Mango')
  
  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
  const products = [
    { id: 1, name: 'Mango Achar', price: 199, category: 'Mango' },
    { id: 2, name: 'Lemon Achar', price: 149, category: 'Lemon' },
    { id: 3, name: 'Mix Achar', price: 179, category: 'Spicy' },
    { id: 4, name: 'Chilli Achar', price: 129, category: 'Spicy' },
  ]
  
  const filteredProducts = computed(() => {
    return products.filter(p => p.category === activeCategory.value)
  })
  </script>