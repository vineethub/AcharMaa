<template>
    <div class="bg-[#FFF5E1] min-h-screen pb-28">
  
      <div class="max-w-6xl mx-auto">
  
        <!-- 🔝 Header -->
        <header class="sticky top-0 bg-white z-50 shadow-sm px-4 py-3 flex items-center justify-between">
          
          <button @click="$router.back()" class="text-lg">←</button>
  
          <h1 class="font-semibold text-[#D35400] truncate">
            {{ product.name }}
          </h1>
  
          <NuxtLink to="/cart" class="relative text-xl">
            🛒
            <span 
              v-if="cart.totalItems"
              class="absolute -top-2 -right-2 bg-[#D35400] text-white text-xs px-1 rounded-full"
            >
              {{ cart.totalItems }}
            </span>
          </NuxtLink>
  
        </header>
  
        <!-- 🖼️ Product Image -->
        <div class="bg-white p-6 flex justify-center">
          <div class="w-56 h-56 bg-gray-200 rounded-xl flex items-center justify-center shadow">
            <span class="text-6xl">🥭</span>
          </div>
        </div>
  
        <!-- 📦 Info -->
        <div class="px-4 mt-4">
  
          <h2 class="text-xl font-bold">{{ product.name }}</h2>
  
          <p class="text-sm text-gray-500 mt-1">
            Homemade • No preservatives • Fresh batch
          </p>
  
          <!-- ⭐ Rating -->
          <div class="flex items-center gap-2 mt-2 text-sm">
            <span class="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">4.5 ★</span>
            <span class="text-gray-500">(120 reviews)</span>
          </div>
  
        </div>

        <!-- 📦 Variants -->
        <div class="px-4 mt-6">
        <h3 class="font-semibold mb-2">Select Size</h3>

        <div class="flex gap-2">
            <button
            v-for="variant in product.variants"
            :key="variant.id"
            @click="selectedVariant = variant"
            :class="[
                'px-3 py-2 rounded-lg text-sm border',
                selectedVariant?.id === variant.id
                ? 'bg-[#D35400] text-white border-[#D35400]'
                : 'bg-white text-gray-600 border-gray-300'
            ]"
            >
            {{ variant.label }}
            </button>
        </div>
        </div>
  
        <!-- 🔥 Highlights -->
        <div class="px-4 mt-6 grid grid-cols-3 gap-3 text-center text-xs">
          <div class="bg-white p-3 rounded-xl shadow">
            🏡 <br /> Homemade
          </div>
          <div class="bg-white p-3 rounded-xl shadow">
            🌿 <br /> No Preservatives
          </div>
          <div class="bg-white p-3 rounded-xl shadow">
            🚚 <br /> Fast Delivery
          </div>
        </div>
  
        <!-- 🧾 Description -->
        <div class="px-4 mt-6">
          <h3 class="font-semibold mb-2">About this product</h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            This achar is prepared using traditional recipes with fresh ingredients.
            Packed with authentic flavors and made with love ❤️. Perfect for daily meals.
          </p>
        </div>
  
        <!-- 🧠 Why choose -->
        <div class="px-4 mt-6">
          <h3 class="font-semibold mb-2">Why choose this?</h3>
  
          <ul class="text-sm text-gray-600 space-y-1">
            <li>✔ Authentic homemade taste</li>
            <li>✔ No artificial chemicals</li>
            <li>✔ Prepared in small batches</li>
          </ul>
        </div>

        <!-- 🧡 Similar Products -->
        <div class="px-4 mt-8">

        <h3 class="font-semibold mb-3">You may also like</h3>

        <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">

        <div 
            v-for="item in similarProducts" 
            :key="item.id"
            class="min-w-[150px]"
        >
            <ProductCard :product="item" />
        </div>

        </div>

        </div>
  
      </div>
  
      <!-- 🛒 Sticky Bottom Bar -->
      <div class="fixed bottom-0 left-0 w-full bg-white  p-4 flex items-center justify-between">
  
        <!-- Price -->
        <div>
          <p class="text-xs text-gray-500">Price</p>
          <p class="text-lg font-bold text-[#D35400]">
            ₹{{ selectedVariant?.price }}
          </p>
        </div>
  
        <!-- CTA -->
        <div class="w-1/2">
  
          <!-- Quantity -->
          <div v-if="cartItem" class="flex items-center justify-between bg-[#D35400] text-white rounded-xl px-4 py-2">
  
            <button @click="cart.decrease(product.id)" class="text-lg font-bold">-</button>
  
            <span class="font-semibold">
              {{ cartItem.quantity }}
            </span>
  
            <button @click="cart.increase(selectedVariant.id)" class="text-lg font-bold">+</button>
  
          </div>
  
          <!-- Add -->
          <button
            v-else
            @click="addToCart"
            class="w-full bg-[#D35400] text-white py-3 rounded-xl font-semibold"
          >
            Add to Cart
          </button>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const cart = useCartStore()

// ✅ Products
const products = [
  {
    id: 1,
    name: 'Mango Achar',
    variants: [
      { id: '1-250', label: '250g', price: 199 },
      { id: '1-500', label: '500g', price: 349 },
      { id: '1-1kg', label: '1kg', price: 649 }
    ]
  },
  {
    id: 2,
    name: 'Lemon Achar',
    variants: [
      { id: '2-250', label: '250g', price: 149 },
      { id: '2-500', label: '500g', price: 279 },
      { id: '2-1kg', label: '1kg', price: 499 }
    ]
  },
  {
    id: 3,
    name: 'Mix Achar',
    variants: [
      { id: '3-250', label: '250g', price: 179 },
      { id: '3-500', label: '500g', price: 329 },
      { id: '3-1kg', label: '1kg', price: 599 }
    ]
  },
  {
    id: 4,
    name: 'Chilli Achar',
    variants: [
      { id: '4-250', label: '250g', price: 129 },
      { id: '4-500', label: '500g', price: 249 },
      { id: '4-1kg', label: '1kg', price: 469 }
    ]
  }
]

// ✅ Current product
const product = computed(() => {
  return products.find(p => p.id == route.params.id)
})

// ✅ Selected Variant
const selectedVariant = ref(null)

if (product.value?.variants?.length) {
  selectedVariant.value = product.value.variants[0]
}

// ✅ Cart item (variant based)
const cartItem = computed(() => {
  return cart.items.find(i => i.variantId === selectedVariant.value?.id)
})

// ✅ Similar products
const similarProducts = computed(() => {
  return products.filter(p => p.id != product.value?.id)
})

// ✅ Add to cart
const addToCart = () => {
  cart.addToCart({
    id: product.value.id,
    name: product.value.name,
    variantId: selectedVariant.value.id,
    variantLabel: selectedVariant.value.label,
    price: selectedVariant.value.price
  })
}
</script>

<style  scoped>

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

</style>