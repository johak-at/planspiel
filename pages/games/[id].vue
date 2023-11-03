<template>
    <span>Game ID: {{ $forceUpdate.params.id }}</span>
</template>

<script setup>
const route = useRoute()
console.log(route.params)
</script>