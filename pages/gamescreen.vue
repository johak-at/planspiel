<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(() => {
  // Call loadBilanzen when the component is mounted
  store.loadBilanzen();
});
console.log(bilanzen.value);

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-row">
      <div class="w-[10%]">
        <label
          for="my-drawer"
          class="btn drawer-button hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-2 px-9 text-white"
          >Slide öffnen</label
        >
      </div>
      <Content class="w-[80%]" />
      <Ampel class="w-[10%]" />
    </div>
    <div class="drawer-side z-50">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-[50rem] min-h-full bg-slate-100">
        <sidebarContent class="text-black" />
      </ul>
    </div>
  </div>
</template>
