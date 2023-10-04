<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import HeaderCompontent from "~/components/header.vue";
import FooterComponent from "~/components/footer.vue";

const store = useStore();
const theme = storeToRefs(store).daisyTheme;


import SidebarComponent from './components/sidebar.vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div id="mainStyling" :data-theme="theme" class="min-h-screen">
    <HeaderCompontent class="header" />

    <button @click="toggleSidebar">Toggle Sidebar</button>

    <Sidebar :isOpen="isSidebarOpen"></Sidebar>

    <NuxtPage class="page-content" />
    <FooterComponent class="footer" />
  </div>
</template>


<style>
* {
  background-color: #f4f4f4;
  color: black;
}

.header {
  align-items: center;
  margin-bottom: 20px;
}

.page-content {
  margin: 20px 0;
}

.footer {
  margin-top: 20px;
}

#mainStyling {
  background-color: #f4f4f4;
}
</style>

