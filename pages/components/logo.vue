<script setup>
import logo from "~/pages/assets/Platzhalter.jpeg";
</script>

<template>
    <div class="flex flex-row items-center gap-x-5">
        <img id="logo" :src="logo" alt="Logo"/>
        <div class="flex flex-col">
            <h1 class="text-5xl">Unternehmensplanspiel</h1>
            <p>Deine Wirtschaftssimulation!</p>
        </div>      
    </div>
    

    
</template>

<style>

*{
  outline-width: 1px;
  outline-style: solid;
  outline-color: red;
}

#logo{
    width: 100px;
    height: 100px;
}
</style>