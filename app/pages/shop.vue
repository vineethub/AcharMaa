<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <!-- <AppHeader :showBack="true" />  -->
  
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
  
    </div>
  </template>
  
<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart' 
import ProductCard from '@/components/ProductCard.vue'
import { useProductsStore } from '@/stores/products'


const productsStore = useProductsStore()
const cart = useCartStore()
const activeCategory = ref('Mango')
  
  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
const products = productsStore.products;
  
const filteredProducts = computed(() => {
  return products.filter(p => p.category === activeCategory.value)
})
  </script>