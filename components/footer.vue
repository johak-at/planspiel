<script setup>
import { Icon } from "@iconify/vue";


definePageMeta({
  middleware: ["auth"],
});

import logo from "~/assets/Logo-mit-Text.png";
</script>


<template>
  <div class="flex flex-col bg-white items-center mt-[200px]">

    <div class="flex flex-row w-full p-2">
      <img :src="logo" alt="Logo" class="w-[400px]">
      <div class="flex flex-row w-full ml-10 space-x-3">
        <Icon icon="mdi:facebook-box" class="text-6xl hover:text-blue-600" />
        <Icon icon="mdi:instagram" class="text-6xl hover:text-pink-500" />
        <Icon icon="ic:baseline-tiktok" class="text-6xl hover:text-black" />
        <Icon icon="mdi:youtube" class="text-6xl hover:text-red-600" />
      </div>
    </div>



    <div class="container p-6">
      <div class="grid grid-cols-4 text-center text-black text-lg">
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">Informationen</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="#!">Datenschutzerklärung</a>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">Kontakt</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="mailto:terstena.manuel@johak.at">terstena.manuel@johak.at</a>
            </li>
            <h5 class="uppercase font-bold mb-2.5 mt-5">Adresse</h5>
            <li>Bundeshandelsakademie</li>
            <li>Alte Bundesstraße 11</li>
            <li>5600 St. Johann im Pongau</li>
          </ul>
        </div>
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">Über uns</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="#!">Unsere Geschichte</a>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">My Account</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="#!">Anmelden/Registrieren</a>
            </li>
            <li>
              <a href="#!">Meine Spiele</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-4 bg-gray-200 w-full">
      © 2023 Unternehmensplanspiel - Deine Wirtschaftssimulation!
    </div>
  </div>
</template>