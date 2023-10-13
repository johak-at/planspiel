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
    <div class="header flex items-center justify-between bg-white py-4 px-10">
        <!-- Logo section -->
        <div class="logo flex items-center gap-5">
            <img id="logoPicture" :src="logo" alt="Logo" class="bg-white" />
            <div class="flex flex-col">
                <h1 class="text-5xl bg-white">Unternehmensplanspiel</h1>
                <p class="bg-white">Deine Wirtschaftssimulation!</p>
            </div>
        </div>
        <!-- Navigation -->
        <div class="navigation">
            <div class="flex space-x-6">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="group hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-2 px-9 text-white text-center transition duration-300 ease-in-out">{{
                        item.name }}</a>
            </div>
        </div>
    </div>
</template>

<style>
#logoPicture {
    width: 100px;
    height: 100px;
}

.logo {
    background-color: white;
}

.header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
