<script setup>

definePageMeta({
    middleware: ["auth"],
});
import logo from "~/assets/Logo.png";

const navItems = [
    { name: "Spiele", link: "/" },
    { name: "Hilfe", link: "/help" },
    { name: "Über Uns", link: "/aboutus" },
    { name: "Profil", link: "/profile" },
];

</script>

<template>
    <div class="flex flex-wrap flex-row min-h-[100px] gap-2 bg-white shadow-md mb-5 p-2 justify-between pr-5">
        <!-- Logo section -->
        <div class="flex w-fit h-full">
            <div class="flex items-center space-x-3">
                <a href="/"><img id="logoPicture" :src="logo" alt="Logo" class="rounded-lg w-[80px] bg-white" /></a>
                <div class="flex flex-col bg-white">
                    <h1 class="text-5xl text-black">Unternehmensplanspiel</h1>
                    <p class="text-lg text-black">Deine Wirtschaftssimulation!</p>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="flex w-fit h-full items-center justify-end">
            <div class="flex h-fit space-x-6 bg-white">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out font-bold bg-black p-2 w-[130px] text-white text-center rounded-xl shadow">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>
</template>