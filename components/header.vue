<script setup>
import logo from "~/assets/Platzhalter.png";

const navItems = [
    { name: "Spiele", link: "/" },
    { name: "Einstellungen", link: "/settings" },
    { name: "Hilfe", link: "/help" },
    { name: "Über Uns", link: "/aboutus" },
    { name: "Profil", link: "/profile" },
];

</script>

<template>
    <div class="header flex flex-wrap justify-between bg-white py-1 px-2 shadow-md">
        <!-- Logo section -->
        <div class="flex items-center gap-3 w-full md:w-auto">
            <img id="logoPicture" :src="logo" alt="Logo" class="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-white" />
            <div class="flex flex-col bg-white">
                <h1 class="text-3xl sm:text-4xl md:text-5xl text-black">Unternehmensplanspiel</h1>
                <p class="text-sm sm:text-base md:text-lg text-black">Deine Wirtschaftssimulation!</p>
            </div>
        </div>
        <!-- Dropdown menu -->
        <div class="md:hidden dropdown dropdown-bottom">
            <div tabindex="0" role="button" class="m-1"><svg viewBox="0 0 20 20" fill="currentColor" class="menu w-10 h-10">
                    <path fill-rule="evenodd"
                        d="M2 4.5A1.5 1.5 0 013.5 3h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 4.5zm0 6A1.5 1.5 0 013.5 9h13a1.5 1.5 0 010 3h-13A1.5 1.5 0 012 10.5zm1.5 6a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z"
                        clip-rule="evenodd" />
                </svg></div>
            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-md bg-white rounded-box w-52">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="hover:bg-gray-200 transition-all duration-300 ease-in-out font-bold py-2 px-9 text-black text-center rounded">
                    {{ item.name }}
                </a>
            </ul>
        </div>
        <!-- Navigation -->
        <div :class="{ 'hidden': !isNavOpen, 'md:flex': true }" class="w-full md:w-auto">
            <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 bg-white">
                <a v-for="item in navItems" :key="item.name" :href="item.link"
                    class="hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out font-bold bg-slate-500 py-2 px-9 text-white text-center rounded shadow">
                    {{ item.name }}
                </a>
            </div>
        </div>
    </div>
</template>