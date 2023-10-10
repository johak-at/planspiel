<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import ContentComponent from "~/components/content.vue";
import AmpelComponent from "~/components/ampel.vue";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <div id="app">
    <Sidebar></Sidebar>
    <ContentComponent />
    <AmpelComponent />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  gap: 10px;
  background-color: #f4f4f4;
  color: black;
}

.content {
  grid-area: content;
}
</style>
