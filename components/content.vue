<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { computed } from 'vue';

const store = useStore();

let currentGame = storeToRefs(store).currentGame;

let games = ref(null);
let currentGameInfo = ref(null);

onMounted(async () => {
  await store.loadGames();
  games.value = store.games;
  console.log(currentGame.value);
  console.log(games.value);

  // Check if games is not null before finding the current game
  if (games.value !== null && games.value.length > 0) {
    const foundGame = games.value.find(game => game.id === currentGame.value);

    if (foundGame) {
      currentGameInfo.value = ref(foundGame);
      console.log(currentGameInfo.value ? currentGameInfo.value._rawValue.day : null);
    } else {
      console.error('Current game not found in games array.');
    }
  } else {
    console.error('Games array is null or empty.');
  }
});

let day = computed(() => currentGameInfo.value ? currentGameInfo.value._rawValue.day : null);

function changeDay() {
  if (day.value === 4) {
    // Assuming you want to update the computed property `day`
    day.value = 1;
    return;
  }
  // Do something with `day.value`, e.g., return it or use it
}

let showResults = ref(false);
let showEndResults = ref(false);
</script>





<template>
  <div class="flex flex-col items-center h-screen justify-center space-y-3">
    <div v-if="showEndResults == false" class="flex flex-col items-center justify-center space-y-3">
      <div v-if="showResults == false">
        <optionsOne v-if="day === 1"></optionsOne>
        <optionsTwo v-if="day === 2"></optionsTwo>
        <optionsThree v-if="day === 3"></optionsThree>
        <optionsFour v-if="day === 4"></optionsFour>
      </div>

      <div v-if="showResults" class="card w-[40rem] shadow-xl bg-slate-200">
        <div class="card-body space-y-3">
          <h2 class="card-title text-black">Ergebnis aus Runde {{ day }}</h2>
          <div class="flex flex-col space-y-1">
            <p class="text-black">Du kost goanix</p>
          </div>
        </div>
      </div>

      <button v-if="showResults == false"
        class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
        @click="showResults = true">Weiter</button>
      <button v-if="showResults && day <= 3"
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

    <button v-if="showResults && day == 4"
      class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
      @click="showEndResults = true, showResults = false">Endresultat</button>
    <button v-if="showEndResults" class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
      @click="showEndResults = false, day = 1">Neues Spiel</button>
  </div>
</template>
