<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { useStore } from "~/store/store";


const onMountedHandler = async () => {
  // Get the store instance
  const store = useStore();

  // Call loadGames when the component is mounted
  const loadedGames = await store.loadGames();

  // Decide which game object to check (for example, the first game)
  const selectedGame = loadedGames[0].id;

  // Log the entire data of the selected game
  console.log('Selected Game Data:', selectedGame);
};

// Use the onMounted hook to run the function when the component is mounted
onMounted(onMountedHandler);


</script>
<template>
    <SidebarContent></SidebarContent>
</template>