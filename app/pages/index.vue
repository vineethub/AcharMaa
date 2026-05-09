<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-16">
      
      <!-- Container -->
      <div class="max-w-6xl mx-auto">
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

          <NuxtLink
            v-for="cat in categories"
            :key="cat.name"
            :to="`/shop?category=${cat.name}`"
            class="min-w-[90px] bg-white rounded-xl p-3 text-center shadow hover:shadow-md hover:-translate-y-1 transition"
          >
            <div class="text-2xl">{{ cat.icon }}</div>
            <p class="text-xs mt-1">{{ cat.name }}</p>
          </NuxtLink>

        </div>
      </section>
  
        <!-- 🛍️ Best Sellers -->
        <section class="px-4 md:px-8 mt-6">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold">Best Sellers</h3>
            <span class="text-xs text-[#D35400] cursor-pointer hover:underline"><NuxtLink to="/shop">See all</NuxtLink></span>
          </div>
  
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard 
            v-for="item in products" 
            :key="item.id" 
            :product="item" 
          />
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
  
    </div>
  </template>
  
<script setup>

import { useCartStore } from '@/stores/cart'

import ProductCard from '@/components/ProductCard.vue'

import { useProductsStore } from '@/stores/products'

const productsStore = useProductsStore()

const cart = useCartStore()

  const categories = [
    { name: 'Mango', icon: '🥭' },
    { name: 'Lemon', icon: '🍋' },
    { name: 'Spicy', icon: '🌶️' },
    { name: 'Mixed', icon: '🥗' },
  ]
  
  const products = productsStore.products;
  
  const trending = [
    { name: 'Garlic Achar' },
    { name: 'Green Chilli Achar' },
    { name: 'Punjabi Mix Achar' },
  ]
  </script>