<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const client = useSupabaseClient();
const store = useStore();
const name = storeToRefs(store).name;

onMounted(async () => {
  let { data: bilanzen, error } = await client.from("bilanzen").select("*");
  console.log(bilanzen);
  console.log("hello");
});
</script>

<template>
  <button class="btn btn-active text-red-900">Default</button>
  <button class="btn btn-active btn-neutral">Neutral</button>
  <button class="btn btn-active btn-primary">Primary</button>
  <button class="btn btn-active btn-secondary">Secondary</button>
  <button class="btn btn-active btn-accent">Accent</button>
  <button class="btn btn-active btn-ghost">Ghost</button>
  <button class="btn btn-active btn-link">Link</button>
  <div class="text-white">{{ name }}</div>
</template>
