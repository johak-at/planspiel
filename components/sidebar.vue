<template>
    <div class="flex h-screen relative">
        <div class="sidebar-container absolute top-0 left-0 h-full" :style="{
            transform: showSidebar ? `translateX(${sidebarWidth.value}px)` : 'translateX(0px)',
        }">
            <button @click="toggleSidebar" class="toggle-btn px-2 py-1 bg-blue-500 text-white absolute top-4"
                :style="{ zIndex: 10 }">
                Toggle
            </button>
            <div v-show="showSidebar" class="sidebar h-full bg-gray-200 overflow-x-hidden">
                <div class="sidebar-content">
                    <BilanzenComponent />
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import BilanzenComponent from "~/components/bilanzen.vue";

const showSidebar = ref(false);

const sidebarWidth = ref(800);

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
};
</script>

<style scoped>
.sidebar {
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    direction: rtl;
    overflow-y: scroll;
    animation: slideIn 0.3s ease-in-out forwards;
    z-index: 5;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

.sidebar.hidden {
    animation: slideOut 0.3s ease-in-out forwards;
}

.sidebar-content {
    direction: ltr;
}

.toggle-btn {
    transition: transform 0.3s ease;
}
</style>
