<template>
    <h1 class="text-4xl">Hello World!</h1>
    <a href="/about">About page</a>
    <br/>
    <NuxtLink to="/products/"> Product list</NuxtLink>
</template>
<script leng="ts" setup>
useHead({
    title:'Home'
})
</script>