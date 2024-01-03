<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { computed } from 'vue';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iokcanuplcasnxjfqmbj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlva2NhbnVwbGNhc254amZxbWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MzM0ODYsImV4cCI6MjAwNDIwOTQ4Nn0.olguMW34EO9BFr-1-mbnaIpC86sbINYIAgJ9GRBLW-4"
);
const store = useStore();



let currentGame = storeToRefs(store).currentGame;
let games = storeToRefs(store).games;

let currentGameInfo = ref(null);

let roundHere = ref(1);

const totalRoundCount = computed(() => {
  if (currentGameInfo && currentGameInfo.value) {
    return currentGameInfo.value.round;
  }
  return 0; // Default value if currentGameInfo.value is not set
});
onMounted(async () => {
  await store.loadGames();

  if (games.value !== null && games.value.length > 0) {
    const foundGame = games.value.find(game => game.id === currentGame.value);

    if (foundGame) {
      // Assign the found game directly
      currentGameInfo.value = foundGame;
    } else {
      console.error('Current game not found in games array.');
    }
  } else {
    console.error('Games array is null or empty.');
  }

  roundHere.value = currentGameInfo.value.round

  console.log(games.value);
  console.log(roundHere);
});

const day = computed(() => {
  const foundGame = games.value.find(game => game.id === currentGame.value);
  return foundGame ? foundGame.day : null;
});




let showResults = ref(false);
let showEndResults = ref(false);

async function changeDay() {
  if (!currentGameInfo.value || !currentGameInfo.value.id) {
    console.error('Current game information is not available');
    return;
  }

  let newDay = currentGameInfo.value.day === 4 ? 1 : currentGameInfo.value.day + 1;

  try {
    const { data, error } = await supabase.from('games-test').update({
      day: newDay
    }).match({ id: currentGameInfo.value.id });

    if (error) {
      console.error('Error updating day in the database:', error);
      return;
    }

    currentGameInfo.value.day = newDay;
    console.log('Day updated successfully:', data);
  } catch (error) {
    console.error("Error updating day in the database:", error);
  }

  store.updateGameDay(currentGameInfo.value.id, newDay);
}

function test () {
  console.log(totalRoundCount.value);
}

// Pass gameid to nextRoundUpload function
function nextRound() {
  console.log("round: " + totalRoundCount.value);
  console.log("id: " + currentGameInfo.value.id);
  store.nextRoundUpload(totalRoundCount.value, currentGameInfo.value.id);
}

async function test2() {
  await store.loadGames();

  if (games.value !== null && games.value.length > 0) {
    const foundGame = games.value.find(game => game.id === currentGame.value);

    if (foundGame) {
      // Assign the found game directly
      currentGameInfo.value = foundGame;
    } else {
      console.error('Current game not found in games array.');
    }
  } else {
    console.error('Games array is null or empty.');
  }
  roundHere.value = currentGameInfo.value.round;
  console.log("round: " + currentGameInfo.value.round);
}

</script>





<template>
  <div class="flex flex-col items-center h-[100vh] justify-center space-y-3">
    <div v-if="showEndResults == false" class="flex flex-col items-center justify-center space-y-3">
      <div v-if="showResults == false">
        <optionsOne @callParentFunction="test2" v-if="day === 1"></optionsOne>
        <optionsTwo @callParentFunction="test2" v-if="day === 2"></optionsTwo>
        <optionsThree @callParentFunction="test2" v-if="day === 3"></optionsThree>
        <optionsFour @callParentFunction="test2" v-if="day === 4"></optionsFour>
      </div>

      <div v-if="showResults" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
          <h2 class="card-title text-black">Ergebnis aus Runde {{ day }}</h2>
          <div class="flex flex-col space-y-1">
            <p class="text-black">Du kost goanix</p>
          </div>
        </div>
      </div>

      <button v-if="showResults == false && roundHere===3" class="btn hover:bg-gray-700 font-bold bg-black text-white"
        @click="showResults = true">Weiter1</button>
        <p>{{ roundHere }}</p>
        
        
        <button v-if="showResults && day <= 3" class="btn hover:bg-gray-700 font-bold bg-black text-white"
  @click="changeDay(); showResults = false">
  Nächste Fragen
</button>
    </div>


    <div v-if="showEndResults" class="card w-[40rem] shadow-xl bg-white">
      <div class="card-body space-y-3">
        <h2 class="card-title text-black">Dein Endresultat</h2>
        <div class="flex flex-col space-y-1">
          <p class="text-black">Du kost immerno goanix</p>
        </div>
      </div>
    </div>

    <button v-if="showResults && day == 4" class="btn hover:bg-gray-700 font-bold bg-black text-white"
      @click="showEndResults = true, showResults = false">Endresultat</button>
    <!-- <button v-if="showEndResults" class="btn hover:bg-gray-700 font-bold bg-black text-white"
      @click="showEndResults = false, changeDay(), day = 1">Neues Spiel</button> -->
  </div>
</template>
