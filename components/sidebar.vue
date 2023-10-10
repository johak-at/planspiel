<template>
    <div class="flex h-screen relative">
        <button @click="toggleSidebar" class="toggle-btn px-2 py-1 bg-blue-500 text-white absolute top-4 left-0" :style="{
            transform: showSidebar
                ? `translateX(${sidebarWidth}px)`
                : 'translateX(0)',
        }">
            Toggle
        </button>
        <div v-if="showSidebar" class="sidebar absolute top-0 left-0 h-full bg-gray-200 overflow-x-hidden"
            :style="{ width: sidebarWidth + 'px' }">
            <div class="sidebar-content">
                <BilanzenComponent />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import BilanzenComponent from "~/components/bilanzen.vue";

const showSidebar = ref(false);

const sidebarWidth = ref(800); // Initial width in pixels

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
};
</script>

<style scoped>
/* Custom style for the sidebar */
.sidebar {
    border-top: 2px solid #ccc;
    /* Top border */
    border-right: 2px solid #ccc;
    /* Right border */
    border-bottom: 2px solid #ccc;
    /* Bottom border */
    border-left: none;
    /* No left border */
    border-top-right-radius: 10px;
    /* Round top-right corner */
    border-bottom-right-radius: 10px;
    /* Round bottom-right corner */
    direction: rtl;
    /* Scrollbar to the left */
    overflow-y: scroll;
    /* Enable vertical scroll */
    transition: width 0.3s ease;
    /* Transition effect */
}

/* Reset the text direction for the sidebar content */
.sidebar-content {
    direction: ltr;
}

/* Transition effect for the button */
.toggle-btn {
    transition: transform 0.3s ease;
}
</style>
