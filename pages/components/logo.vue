<script setup>
import logo from "~/pages/assets/Platzhalter.png";
</script>

<template>
  <div class="flex flex-row items-center gap-x-5">
    <a href="/bilanzen"><img id="logo" :src="logo" alt="Logo" /></a>

    <div class="flex flex-col">
      <h1 class="text-5xl">Unternehmensplanspiel</h1>
      <p>Deine Wirtschaftssimulation!</p>
    </div>
  </div>
</template>

<style>
#logo {
  width: 100px;
  height: 100px;
}
</style>
