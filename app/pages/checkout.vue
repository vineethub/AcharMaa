<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-24">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 md:px-8 py-3 flex items-center justify-between">
  
          <div class="flex items-center gap-2">
            <button @click="$router.back()" class="text-lg">←</button>
            <h1 class="text-lg md:text-xl font-bold text-[#D35400]">
                Guest Checkout
            </h1>
          </div>
  
          <NuxtLink to="/cart" class="text-xl">🛒</NuxtLink>
  
        </header>
  
        <!-- 🏠 Address -->
        <section class="px-4 md:px-8 mt-6">
          <h3 class="font-semibold mb-2">Delivery Address</h3>
  
          <div class="bg-white rounded-xl p-4 shadow space-y-3">

            <input 
            v-model="name"
            placeholder="Full Name"
            class="w-full border rounded-lg p-2 text-sm outline-none"
            />

            <input 
            v-model="phone"
            placeholder="Phone Number"
            class="w-full border rounded-lg p-2 text-sm outline-none"
            />

            <textarea 
            v-model="address"
            placeholder="Full Address"
            class="w-full border rounded-lg p-2 text-sm outline-none"
            rows="2"
            ></textarea>

            </div>
            <p class="text-xs text-gray-500 mt-2">
             No account needed. We'll just use this info for delivery.
            </p>

        </section>
  
        <!-- 💳 Payment -->
        <section class="px-4 md:px-8 mt-6">
          <h3 class="font-semibold mb-2">Payment Method</h3>
  
          <div class="bg-white rounded-xl p-4 shadow flex items-center justify-between">
            <span>Cash on Delivery</span>
            <span>💵</span>
          </div>
        </section>
  
        <!-- 🧾 Order Summary -->
        <section class="px-4 md:px-8 mt-6">
          <h3 class="font-semibold mb-2">Order Summary</h3>
  
          <div class="bg-white rounded-xl p-4 shadow space-y-3">
  
            <div 
              v-for="item in cart.items" 
              :key="item.id"
              class="flex justify-between text-sm"
            >
              <span>{{ item.name }} x{{ item.quantity }}</span>
              <span>₹{{ item.price * item.quantity }}</span>
            </div>
  
            <hr />
  
            <div class="flex justify-between font-semibold">
              <span>Total</span>
              <span class="text-[#D35400]">₹{{ cart.totalPrice }}</span>
            </div>
  
          </div>
        </section>
  
      </div>
  
      <!-- Place Order Button -->
      <div class="fixed bottom-0 left-0 w-full bg-white border-t p-4">
  
        <button 
          @click="placeOrder"
          class="w-full bg-[#D35400] text-white py-3 rounded-xl text-lg font-semibold"
        >
          Place Order 
        </button>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCartStore } from '@/stores/cart'
  import { useRouter } from 'vue-router'
  
  const cart = useCartStore()
  const router = useRouter()
  const name = ref('')
  const phone = ref('')
  const address = ref('')

  const placeOrder = () => {
  if (!name.value || !phone.value || !address.value) {
    alert('Please fill all details')
    return
  }

  if (!cart.items.length) {
    alert('Cart is empty')
    return
  }

  alert('Order placed successfully! 🎉')

  cart.items = []
  router.push('/')
}

  </script>