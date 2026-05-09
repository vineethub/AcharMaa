<template>
    <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
  
      <!-- Left -->
      <div class="flex items-center gap-3">
  
        <!-- Back -->
        <button
          v-if="showBack"
          @click="$router.back()"
          class="text-lg"
        >
          ←
        </button>
  
        <!-- Logo -->
        <NuxtLink to="/" class="text-lg font-bold text-[#D35400]">
          AcharMaa
        </NuxtLink>
  
      </div>
  
      <!-- Right -->
      <div class="flex items-center gap-5 text-xl">
  
        <!-- Search -->
        <button @click="showSearch = true">🔍</button>
  
        <!-- Cart -->
        <NuxtLink to="/cart" class="relative">
  
          🛒
  
          <span
            v-if="cart.totalItems"
            class="absolute -top-2 -right-2 bg-[#D35400] text-white text-[10px] px-1.5 rounded-full"
          >
            {{ cart.totalItems }}
          </span>
  
        </NuxtLink>
  
      </div>
      <!-- ✅ Search Overlay -->
    <SearchOverlay
      v-if="showSearch"
      @close="showSearch = false"
      />  
  
    </header>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart'
  import SearchOverlay from '@/components/SearchOverlay.vue'
  
  defineProps({
    showBack: {
      type: Boolean,
      default: false
    }
  })
  
  const cart = useCartStore()
  const showSearch = ref(false)
  </script>