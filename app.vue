<script setup>


</script>

<template>
  <div :data-theme="theme" class="min-h-screen bg-gray-100">
    <Header class="flex items-center mb-5 sticky top-0 z-20"></Header>
    <NuxtPage class="my-5" />
    <Footer class="mt-[150px] sticky z-20"></Footer>
  </div>
</template>
