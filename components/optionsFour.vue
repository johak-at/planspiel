<script setup>
definePageMeta({
    middleware: ["auth"],
});

import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

const roundHere = ref(1)

let currentGame = storeToRefs(store).currentGame;
let games = storeToRefs(store).games;
let currentGameInfo = ref(null);
let totalRoundCount = ref(0)

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

  if (currentGameInfo && currentGameInfo.value) {
    totalRoundCount.value = currentGameInfo.value.round;
}

  console.log(games.value);
  console.log(totalRoundCount.value);
});

function nextRound() {
  console.log("round: " + totalRoundCount.value);
  console.log("id: " + currentGameInfo.value.id);
  store.nextRoundUpload(totalRoundCount.value, currentGameInfo.value.id);
}

const emit = defineEmits(['callParentFunction']);

function triggerParentFunction() {
  // Emit a custom event
  emit('callParentFunction');
}
</script>

<template>
    <div v-if="totalRoundCount===9" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 1: Für welchen Baum entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
    <div v-else-if="roundHere===10" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 2: Für welchen Haus entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
    <div v-else-if="roundHere===11" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 3: Für welchen Juan entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), totalRoundCount++, nextRound(), triggerParentFunction()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
    <div v-else class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Die erste Runde ist vorbei, klicke auf "WEITER" um fortzufahren!</h2>
            <div class="flex flex-col space-y-1">
                </div>
        </div>
    </div>
</template>