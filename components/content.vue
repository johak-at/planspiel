<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let currentGame = storeToRefs(store).currentGame;
let games = storeToRefs(store).games;
let currentGameInfo = ref(games.value.find(game => game.id === currentGame.value));
function changeDay() {
  if (currentGameInfo.value.day === 4) {
    currentGameInfo.value.day = 1;
    return;
  }
  currentGameInfo.value.day++;
}
</script>

<template>
  <div class="flex flex-col items-center h-screen justify-center space-y-3">
    <optionsOne v-if="currentGameInfo.day === 1"></optionsOne>
    <optionsTwo v-if="currentGameInfo.day === 2"></optionsTwo>
    <optionsThree v-if="currentGameInfo.day === 3"></optionsThree>
    <optionsFour v-if="currentGameInfo.day === 4"></optionsFour>

    <button class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
      @click="changeDay">Weiter</button>
  </div>
</template>
