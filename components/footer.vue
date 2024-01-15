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
        <a href="https://www.facebook.com/haksanktjohann/" target="_blank">
          <Icon icon="mdi:facebook-box" class="text-6xl hover:text-blue-600" />
        </a>
        <a href="https://www.instagram.com/johak.pongau/" target="_blank">
          <Icon icon="mdi:instagram" class="text-6xl hover:text-pink-500" />
        </a>
        <a href="https://www.tiktok.com/@johak.pongau" target="_blank">
          <Icon icon="ic:baseline-tiktok" class="text-6xl hover:text-black" />
        </a>
        <a href="https://www.youtube.com/channel/UCqGulRXcMRgynfSrCcYGcFw/featured" target="_blank">
          <Icon icon="mdi:youtube" class="text-6xl hover:text-red-600" />
        </a>
      </div>
    </div>



    <div class="container p-6">
      <div class="grid grid-cols-4 text-center text-black text-lg">
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">Informationen</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="/Datenschutzerklaerung">Datenschutzerklärung</a>
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
            <li>Alte Bundesstraße 1<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">1</a></li>
            <li>5600 St. Johann im Pongau</li>
          </ul>
        </div>
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">Über uns</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="/aboutus">Unsere Geschichte</a>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h5 class="uppercase font-bold mb-2.5">My Account</h5>
          <ul class="list-none mb-0">
            <li>
              <a href="/profile">Profil</a>
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