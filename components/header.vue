<script setup>
import logo from "~/assets/Platzhalter.png";
const navItems = [
    { name: "New Game", link: "/" },
    { name: "Settings", link: "/settings" },
    { name: "Help", link: "/help" },
    { name: "About Us", link: "/aboutus" },
    { name: "Profile", link: "/profile" },
];
</script>

<template>
    <div class="header flex items-center justify-between bg-white py-1 px-10 shadow-md">
        <!-- Logo section -->
        <div class="flex items-center gap-5">
            <img id="logoPicture" :src="logo" alt="Logo" class="w-24 h-24 bg-white" />
            <div class="flex flex-col bg-white">
                <h1 class="text-5xl text-black">Unternehmensplanspiel</h1>
                <p class="text-black">Deine Wirtschaftssimulation!</p>
            </div>
        </div>
        <!-- Navigation -->
        <div>
            <div class="flex space-x-6 bg-white">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-2 px-9 text-white text-center transition duration-300 ease-in-out">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>
</template>
