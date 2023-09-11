<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import LogoComponent from "~/pages/components/logo.vue";
import NavComponent from "~/pages/components/navigation.vue";
import ContentComponent from "~/pages/components/content.vue";
import FooterComponent from "~/pages/components/footer.vue";
import NavComponent2 from "~/pages/components/navigation2.vue";

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
  <div id="app" class="gap-y-10">
    <LogoComponent class="logo" />
    <NavComponent class="nav1" />
    <!-- <NavComponent2 class="nav2"/> -->
    <ContentComponent class="content" />
    <FooterComponent class="footer" />
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
  grid-template-columns: 1fr 2fr 1fr; /* first column takes one fourth of the space, second column takes three fourths */
  grid-template-rows: auto auto auto; /* three rows with auto height */
  gap: 10px; /* gap between grid items */
  grid-template-areas:
    ". logo . "
    ". nav1 ."
    "nav2 content ."
    "footer footer footer";
  background-color: white;
  color: black;
}

/* assign order values to each component */
.logo {
  grid-area: logo;
}

.nav1 {
  grid-area: nav1;
}

.nav2 {
  grid-area: nav2;
}

.content {
  grid-area: content;
}

.footer {
  grid-area: footer;
}
</style>
