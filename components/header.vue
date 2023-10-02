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
    <div class="flex flex-col">
        <div class="logo">
            <div class="flex flex-row items-center gap-x-5">
                <img id="logo" :src="logo" alt="Logo" />

                <div class="flex flex-col">
                    <h1 class="text-5xl">Unternehmensplanspiel</h1>
                    <p>Deine Wirtschaftssimulation!</p>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="bg-slate-500 hover:bg-slate-400 flex justify-evenly">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="group hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 py-2 px-9 text-white text-center flex-grow">{{
                        item.name }}</a>
            </div>
        </div>
    </div>
</template>

<style>
#logo {
    width: 100px;
    height: 100px;
}
</style>