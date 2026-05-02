<template>
    {{ param }}
</template>
<script leng="ts" setup>

const param = useRoute().params.ItemId;
</script>