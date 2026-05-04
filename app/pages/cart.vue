<template>
  <div class="bg-[#FFF5E1] min-h-screen pb-28">

    <!-- 🔝 Header -->
    <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
      <h1 class="font-semibold text-[#D35400]">Your Cart</h1>
      <NuxtLink to="/" class="text-sm text-gray-500">Home</NuxtLink>
    </header>

    <!-- 🛒 Empty State -->
    <div v-if="!cart.items.length" class="text-center mt-20 text-gray-500">
      <p>Your cart is empty 🛒</p>
    </div>

    <!-- 🧾 Cart Items -->
    <div v-else class="p-4 space-y-4">

      <div 
        v-for="item in cart.items" 
        :key="item.variantId"
        class="bg-white rounded-xl p-4 shadow flex justify-between items-center"
      >

        <!-- Info -->
        <div>
          <h3 class="font-semibold text-sm">
            {{ item.name }}
          </h3>

          <!-- ✅ Variant -->
          <p class="text-xs text-gray-500">
            {{ item.variantLabel }}
          </p>

          <p class="text-sm text-[#D35400] font-semibold mt-1">
            ₹{{ item.price }}
          </p>
        </div>

        <!-- Quantity -->
        <div class="flex items-center bg-[#D35400] text-white rounded-lg px-3 py-1">

          <button 
            @click="cart.decrease(item.variantId)"
            class="px-2 text-lg font-bold"
          >
            -
          </button>

          <span class="px-2">
            {{ item.quantity }}
          </span>

          <button 
            @click="cart.increase(item.variantId)"
            class="px-2 text-lg font-bold"
          >
            +
          </button>

        </div>

      </div>

    </div>

    <!-- 💳 Bottom Summary -->
    <div 
      v-if="cart.items.length"
      class="fixed bottom-0 left-0 w-full bg-white border-t p-4"
    >

      <div class="flex justify-between mb-3">
        <span class="text-sm text-gray-500">Total</span>
        <span class="font-bold text-[#D35400]">
          ₹{{ cart.totalPrice }}
        </span>
      </div>

      <NuxtLink
        to="/checkout"
        class="block w-full bg-[#D35400] text-white text-center py-3 rounded-xl font-semibold"
      >
        Proceed to Checkout
      </NuxtLink>

    </div>

  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
</script>