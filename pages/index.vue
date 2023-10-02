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
  <div id="app" class="gap-y-10">
    <div class="content h-screen text-black flex items-center justify-center">
      <a class="group hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-5 px-10 text-white text-center rounded-full"
        href="/gamescreen">
        Start Game
      </a>
    </div>
  </div>
</template>

<style>
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
  grid-template-columns: 1fr 2.5fr 1fr;
  /* first column takes one fourth of the space, second column takes three fourths */
  grid-template-rows: auto auto auto;
  /* three rows with auto height */
  gap: 10px;
  /* gap between grid items */
  grid-template-areas:
    ". content .";
  background-color: #f4f4f4;
  color: black;
}

.content {
  grid-area: content;
}
</style>
