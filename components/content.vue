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
let showResults = ref(false);
let showEndResults = ref(false);
</script>

<template>
  <div class="flex flex-col items-center h-screen justify-center space-y-3">
    <div v-if="showEndResults == false" class="flex flex-col items-center justify-center space-y-3">
      <div v-if="showResults == false">
        <optionsOne v-if="currentGameInfo.day === 1"></optionsOne>
        <optionsTwo v-if="currentGameInfo.day === 2"></optionsTwo>
        <optionsThree v-if="currentGameInfo.day === 3"></optionsThree>
        <optionsFour v-if="currentGameInfo.day === 4"></optionsFour>
      </div>

      <div v-if="showResults" class="card w-[40rem] shadow-xl bg-slate-200">
        <div class="card-body space-y-3">
          <h2 class="card-title text-black">Ergebnis aus Runde {{ currentGameInfo.day }}</h2>
          <div class="flex flex-col space-y-1">
            <p class="text-black">Du kost goanix</p>
          </div>
        </div>
      </div>

      <button v-if="showResults == false"
        class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
        @click="showResults = true">Weiter</button>
      <button v-if="showResults && currentGameInfo.day <= 3"
        class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
        @click="changeDay(), showResults = false">Nächste Fragen</button>
    </div>


    <div v-if="showEndResults" class="card w-[40rem] shadow-xl bg-slate-200">
      <div class="card-body space-y-3">
        <h2 class="card-title text-black">Dein Endresultat</h2>
        <div class="flex flex-col space-y-1">
          <p class="text-black">Du kost immerno goanix</p>
        </div>
      </div>
    </div>

    <button v-if="showResults && currentGameInfo.day == 4"
      class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
      @click="showEndResults = true, showResults = false">Endresultat</button>
    <button v-if="showEndResults" class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
      @click="showEndResults = false, currentGameInfo.day = 1">Neues Spiel</button>
  </div>
</template>
