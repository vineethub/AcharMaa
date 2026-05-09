<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()

onMounted(() => {
  cart.loadCart()
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
       <NuxtPage />
    </NuxtLayout>
  </div>
</template>
