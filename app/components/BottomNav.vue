<template>
    <nav class="fixed md:hidden bottom-0 left-0 w-full bg-white flex justify-around py-2 text-sm z-50">
  
      <NuxtLink
        to="/"
        class="flex flex-col items-center"
        :class="route.path === '/' ? 'text-[#D35400]' : 'text-gray-500'"
      >
        <span>🏠</span>
        <span>Home</span>
      </NuxtLink>
  
      <NuxtLink
        to="/shop"
        class="flex flex-col items-center"
        :class="route.path === '/shop' ? 'text-[#D35400]' : 'text-gray-500'"
      >
        <span>🛍️</span>
        <span>Shop</span>
      </NuxtLink>
  
      <NuxtLink
        to="/cart"
        class="flex flex-col items-center relative"
        :class="route.path === '/cart' ? 'text-[#D35400]' : 'text-gray-500'"
      >
        <span>🛒</span>
        <span>Cart</span>
  
        <span
          v-if="cart.totalItems"
          class="absolute top-0 right-1 bg-[#D35400] text-white text-[10px] px-1 rounded-full"
        >
          {{ cart.totalItems }}
        </span>
      </NuxtLink>
  
      <NuxtLink
        to="/profile"
        class="flex flex-col items-center"
        :class="route.path === '/profile' ? 'text-[#D35400]' : 'text-gray-500'"
      >
        <span>👤</span>
        <span>Profile</span>
      </NuxtLink>
  
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { useCartStore } from '@/stores/cart'
  
  const route = useRoute()
  const cart = useCartStore()
  </script>