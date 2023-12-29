<script setup>
import { ref } from "vue";
definePageMeta({
  middleware: ["auth"],
});

const showSidebar = ref(false);

const toggleSidebar = () => {
    showSidebar.value = !showSidebar.value;
};
</script>

<template>
    <div class="flex h-screen col-start-1 col-end-2">
        <button @click="toggleSidebar" class="toggle-btn p-2 bg-blue-500 text-white fixed top-13 z-30">
            Toggle
        </button>
        <div :class="{ 'translate-x-0': showSidebar, '-translate-x-full': !showSidebar }"
            class="transition-transform duration-300 ease-in-out fixed top-13 w-[50%] h-[85vh] z-10">
            <div v-show="showSidebar"
                class="w-full h-full bg-gray-200 overflow-x-hidden rounded-tr-md rounded-br-md border-t border-r border-b border-gray-300 overflow-y-auto"
                style="direction: rtl;">
                <div class="sidebar-content" style="direction: ltr;">
                    <SidebarContent />
                </div>
            </div>
        </div>
    </div>
</template>
