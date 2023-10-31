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
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-row">
      <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
      <Content class="w-[80%]" />
      <Ampel />
    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-[50%] min-h-full bg-slate-100">
        <!-- Sidebar content here -->
        <Bilanzen class="text-black" />

      </ul>
    </div>
  </div>
</template>

