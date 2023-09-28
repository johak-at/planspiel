<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import LogoComponent from "~/pages/components/logo.vue";
import NavComponent from "~/pages/components/navigation.vue";
import ContentComponent from "~/pages/components/content.vue";
import FooterComponent from "~/pages/components/footer.vue";
import NavComponent2 from "~/pages/components/navigation2.vue";
import Ampel from "~/pages/components/ampel.vue";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(async () => {
  await store.loadBilanzen();
});
</script>

<template>
  <div id="app" class="gap-y-10">
    <LogoComponent class="logo" />
    <NavComponent class="nav1" />
    <div class="content h-screen text-black flex items-center justify-center">
      <a class="group hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-5 px-10 text-white text-center rounded-full"
        href="/gamescreen">
        Start Game
      </a>
    </div>
    <FooterComponent class="footer" />
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
    "logo logo logo"
    "nav1 nav1 nav1"
    "nav2 content ."
    "footer footer footer";
  background-color: #f4f4f4;
  color: black;
}

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
