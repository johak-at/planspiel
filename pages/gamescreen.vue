<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { onMounted } from 'vue';

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <div id="app" class="grid grid-cols-[0.5fr,2fr,0.5fr] gap-2 bg-gray-200 text-black">
    <Sidebar class="col-start-1 col-end-2" />
    <Content class="col-start-2 col-end-3" />
    <Ampel class="col-start-3 col-end-4" />
  </div>
</template>

