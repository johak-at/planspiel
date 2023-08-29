

<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import NavComponent from "~/pages/components/navigation.vue";
import ContentComponent from "~/pages/components/content.vue";
import FooterComponent from "~/pages/components/footer.vue";


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
  <div id="app">
    <NavComponent />
    <ContentComponent />
    <FooterComponent />
  </div>
</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  


  outline-width: 1px;
  outline-style: solid;
  outline-color: red;

  /* border: 1px solid red; */
}

#app{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 100vh;
  width: 100vw;

}

/* .div{
  align-items: center;
  align-content: center;
} */
</style>

