<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-20">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
            <div class="flex items-center gap-2">
            <button @click="$router.back()" class="text-lg">←</button>
            <h1 class="text-lg md:text-xl font-bold text-[#D35400]">
                Your Cart
            </h1>
            </div>
        </header>
  
        <!-- ❌ Empty State -->
        <div v-if="!cart.items.length" class="flex flex-col items-center justify-center mt-20 text-center">
          <p class="text-lg font-semibold">Your cart is empty 😢</p>
          <NuxtLink 
            to="/shop" 
            class="mt-4 bg-[#D35400] text-white px-5 py-2 rounded-lg"
          >
            Go Shopping
          </NuxtLink>
        </div>
  
        <!-- 🛍️ Cart Items -->
        <section v-else class="px-4 md:px-8 mt-6 space-y-4">
  
          <div 
            v-for="item in cart.items" 
            :key="item.id"
            class="bg-white rounded-xl p-3 shadow flex items-center gap-3"
          >
            
            <!-- Image -->
            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
  
            <!-- Info -->
            <div class="flex-1">
              <h4 class="text-sm font-semibold">{{ item.name }}</h4>
              <p class="text-xs text-gray-500">₹{{ item.price }}</p>
            </div>
  
            <!-- Quantity Controls -->
            <div class="flex items-center bg-[#D35400] text-white rounded-lg px-2">
  
              <button 
                @click="cart.decrease(item.id)" 
                class="w-8 h-8 flex items-center justify-center"
              >
                -
              </button>
  
              <span class="text-sm font-semibold">
                {{ item.quantity }}
              </span>
  
              <button 
                @click="cart.increase(item.id)" 
                class="w-8 h-8 flex items-center justify-center"
              >
                +
              </button>
  
            </div>
  
          </div>
  
        </section>
  
      </div>
  
      <!-- 💰 Bottom Checkout Bar -->
      <div 
        v-if="cart.items.length"
        class="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex items-center justify-between"
      >
        
        <div>
          <p class="text-xs text-gray-500">Total</p>
          <p class="font-bold text-lg text-[#D35400]">
            ₹{{ cart.totalPrice }}
          </p>
        </div>
  
        <button class="bg-[#D35400] text-white px-6 py-2 rounded-lg">
          Checkout
        </button>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart'
  
  const cart = useCartStore()
  </script>