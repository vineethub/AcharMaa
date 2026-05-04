<template>
  <!-- ✅ Clickable Card -->
  <div 
    @click="goToProduct"
    class="bg-white rounded-xl p-3 shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
  >

    <!-- Image -->
    <div class="h-28 bg-gray-200 rounded-lg mb-2"></div>

    <!-- Info -->
    <h4 class="text-sm font-semibold">{{ product.name }}</h4>
    <p class="text-xs text-gray-500">₹{{ product.price }}</p>

    <!-- ✅ Cart UI -->
    <div 
      v-if="cartItem" 
      class="flex items-center justify-between mt-2 bg-[#D35400] text-white rounded-lg px-2"
      @click.stop
    >
      <button 
        @click="cart.decrease(product.id)" 
        class="w-8 h-8 flex items-center justify-center text-lg font-bold active:scale-90 transition"
      >
        -
      </button>

      <span class="text-sm font-semibold">
        {{ cartItem.quantity }}
      </span>

      <button 
        @click="cart.increase(product.id)" 
        class="w-8 h-8 flex items-center justify-center text-lg font-bold active:scale-90 transition"
      >
        +
      </button>
    </div>

    <!-- Add Button -->
    <button
      v-else
      @click.stop="cart.addToCart(product)"
      class="mt-2 w-full bg-[#D35400] text-white text-sm py-1.5 rounded-lg hover:bg-[#b84300] transition active:scale-95"
    >
      Add
    </button>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'

const props = defineProps({
  product: Object
})

const cart = useCartStore()
const router = useRouter()

const cartItem = computed(() => {
  return cart.items.find(i => i.id === props.product.id)
})

const goToProduct = () => {
  router.push(`/product/${props.product.id}`)
}
</script>