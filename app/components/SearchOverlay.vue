<template>
    <div class="fixed inset-0 bg-white z-[999] flex flex-col">
  
      <!-- Top -->
      <div class="p-4 border-b flex items-center gap-3">
  
        <!-- Back -->
        <button
          @click="$emit('close')"
          class="text-xl"
        >
          ←
        </button>
  
        <!-- Input -->
        <input
          v-model="search"
          type="text"
          placeholder="Search achar..."
          class="flex-1 bg-gray-100 rounded-xl px-4 py-3 outline-none text-sm"
        />
  
      </div>
  
      <!-- Results -->
      <div class="flex-1 overflow-y-auto p-4">
  
        <!-- Empty -->
        <div
          v-if="!filteredProducts.length"
          class="text-center text-gray-400 mt-10"
        >
          No products found 😢
        </div>
  
        <!-- Products -->
        <div class="space-y-3">
  
          <NuxtLink
            v-for="product in filteredProducts"
            :key="product.id"
            :to="`/product/${product.id}`"
            class="bg-[#FFF5E1] rounded-xl p-3 flex items-center gap-3"
            @click="$emit('close')"
          >
  
            <!-- Image -->
            <div class="w-16 h-16 bg-gray-200 rounded-lg"></div>
  
            <!-- Info -->
            <div>
              <h4 class="font-semibold text-sm">
                {{ product.name }}
              </h4>
  
              <p class="text-xs text-gray-500">
                ₹{{ product.variants[0].price }}
              </p>
            </div>
  
          </NuxtLink>
  
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useProductsStore } from '@/stores/products'
  
  defineEmits(['close'])
  
  const productsStore = useProductsStore()
  
  const search = ref('')
  
  const filteredProducts = computed(() => {
    return productsStore.products.filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
  })
  </script>