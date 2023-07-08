<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const theme = storeToRefs(store).daisyTheme;
</script>

<template>
  <div :data-theme="theme" class="min-h-screen">
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>
</template>
