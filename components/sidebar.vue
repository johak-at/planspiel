<template>
    <div :class="['sidebar', isOpen ? 'open' : '']">
        <h1>Sidebar Content</h1>
        <!-- Add your sidebar content here -->
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const { isOpen } = defineProps(['isOpen']);
</script>
  
<style scoped>
.sidebar {
    width: 0;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.5s;
    background-color: #111;
    color: #fff;
    padding-top: 60px;
}

.sidebar.open {
    width: 250px;
}
</style>