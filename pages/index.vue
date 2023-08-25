<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <!-- <button class="btn btn-active text-red-900">Default</button>
  <button class="btn btn-active btn-neutral">Neutral</button>
  <button class="btn btn-active btn-primary">Primary</button>
  <button class="btn btn-active btn-secondary">Secondary</button>
  <button class="btn btn-active btn-accent">Accent</button>
  <button class="btn btn-active btn-ghost">Ghost</button>
  <button class="btn btn-active btn-link">Link</button>
  <div>{{ name }}</div>
  <div v-if="bilanzen">{{ bilanzen }}</div> -->
<div class="w-screen h-screen">
  <button class="w-10 h-20 items-center content-center">asd</button>
</div>
  
  
</template>

<style>
*{
  outline-width: 1px;
  outline-style: solid;
  outline-color: red;

  /* border: 1px solid red; */
}
/* .div{
  align-items: center;
  align-content: center;
} */
</style>

