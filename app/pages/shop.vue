<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
          <h1 class="text-lg md:text-xl font-bold text-[#D35400]"><NuxtLink to="/">AcharMaa</NuxtLink></h1>
          <div class="flex items-center gap-6 text-xl">
            <span>🔍</span>
            <NuxtLink to="/cart" class="relative">
  🛒
  <span 
    v-if="cart.totalItems"
    class="absolute -top-2 -right-2 bg-[#D35400] text-white text-xs px-1 rounded-full"
  >
    {{ cart.totalItems }}
  </span>
</NuxtLink>
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

    <ProductCard 
        v-for="item in filteredProducts" 
        :key="item.id" 
        :product="item" 
      />
  </div>
  <div v-if="!filteredProducts.length" class="text-center text-gray-400 mt-10">
      No products found 😢
    </div>

</section>

</div>
</div>
  
      <!-- 📱 Bottom Nav -->
      <nav class="fixed md:hidden bottom-0 left-0 w-full bg-white flex justify-around py-3 text-sm">
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
  import { useCartStore } from '@/stores/cart'

  const cart = useCartStore()
  const activeCategory = ref('Mango')

  import ProductCard from '@/components/ProductCard.vue'
  
  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
  const products = [
  {
    id: 1,
    name: 'Mango Achar',
    category: 'Mango',
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
    variants: [
      { id: '4-250', label: '250g', price: 129 },
      { id: '4-500', label: '500g', price: 249 },
      { id: '4-1kg', label: '1kg', price: 469 }
    ]
  }
]
  
const filteredProducts = computed(() => {
  return products.filter(p => p.category === activeCategory.value)
})
  </script>