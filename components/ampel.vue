<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let NoteText = storeToRefs(store).NoteBerechnen;
let currentGame = storeToRefs(store).currentGame;
let games = ref(null);
const currentGameInfo = computed(() => {
  return store.games.find(game => game.id === currentGame.value);
});


onMounted(async () => {
  await store.loadGames();
  games.value = store.games;
  // console.log(currentGame.value);
  // console.log(games.value);

  // Check if games is not null before finding the current game
  if (games.value !== null && games.value.length > 0) {
    const foundGame = games.value.find(game => game.id === currentGame.value);

    if (foundGame) {
      currentGameInfo.value = ref(foundGame);
      // console.log(currentGameInfo.value ? currentGameInfo.value._rawValue : null);
    } else {
      console.error('Current game not found in games array.');
    }
  } else {
    console.error('Games array is null or empty.');
  }

});

let currentGamesName = computed(() => currentGameInfo.value ? currentGameInfo.value.name : null);
let currentGamesDay = computed(() => currentGameInfo.value ? currentGameInfo.value.day : null);



</script>

<template>
  <div>
    <div class="text-black">
      <h1 class="text-xl font-bold">Derzeitiges Spiel:</h1>
      <p>{{ currentGamesName }}</p>
      <h1 class="text-xl font-bold">Derzeitige Runde:</h1>
      <p>{{ currentGamesDay }}</p>
      <h1 class="text-xl font-bold">Note:</h1>
      <p>{{ NoteText }}</p>
    </div>

    <div class="mt-4 p-4 bg-black rounded-lg shadow-lg w-28 flex flex-col items-center">
      <div
        :class="{ 'w-20 h-20 mb-2 rounded-full bg-green-600': true, 'bg-green-900': NoteText !== 'Gut!' && NoteText !== 'Sehr Gut!' }">
      </div>
      <div :class="{ 'w-20 h-20 mb-2 rounded-full bg-yellow-500': true, 'bg-yellow-900': NoteText !== 'Befriedigend!' }">
      </div>
      <div
        :class="{ 'w-20 h-20 rounded-full bg-red-600': true, 'bg-red-900': NoteText !== 'Genügend!' && NoteText !== 'Nicht Genügend!' }">
      </div>
    </div>
  </div>
</template>
