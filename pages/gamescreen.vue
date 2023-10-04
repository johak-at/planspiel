<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import ContentComponent from "~/components/content.vue";
import AmpelComponent from "~/components/ampel.vue";
import AusgangslageComponent from "~/components/bilanzen.vue";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <div id="app">
    <AusgangslageComponent class="ausgangslage" />
    <ContentComponent class="content" />
    <AmpelComponent class="ampel" />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outline-width: 1px;
  outline-style: solid;
  outline-color: red; */

  /* border: 1px solid red; */
}

#app {
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  /* first column takes one fourth of the space, second column takes three fourths */
  grid-template-rows: auto auto auto;
  /* three rows with auto height */
  gap: 10px;
  /* gap between grid items */
  grid-template-areas:
    "ausgangslage content ampel";
  background-color: #f4f4f4;
  color: black;
}

/* assign order values to each component */
.ausgangslage {
  grid-area: ausgangslage;
}

.content {
  grid-area: content;
}

.ampel {
  grid-area: ampel;
}
</style>
