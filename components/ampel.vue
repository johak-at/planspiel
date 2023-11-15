<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let NoteText = storeToRefs(store).NoteBerechnen;
let currentGame = storeToRefs(store).currentGame;
let games = storeToRefs(store).games;
let currentGameInfo = ref(games.value.find(game => game.id === currentGame.value));
</script>

<template>
    <div>
        <div class="text-black">
            <h1 class="text-xl font-bold">Derzeitiges Spiel:</h1>
            <p>{{ currentGameInfo.name }}</p>
            <h1 class="text-xl font-bold">Derzeitige Runde:</h1>
            <p>{{ currentGameInfo.day }}</p>
            <h1 class="text-xl font-bold">Note:</h1>
            <p>{{ NoteText }}</p>
        </div>

        <div class="mt-4 p-4 bg-gray-300 rounded-lg shadow-lg w-28 flex flex-col items-center">
            <div
                :class="{ 'w-20 h-20 mb-2 rounded-full bg-green-600': true, 'bg-green-950': NoteText !== 'Gut!' && NoteText !== 'Sehr Gut!' }">
            </div>
            <div
                :class="{ 'w-20 h-20 mb-2 rounded-full bg-yellow-500': true, 'bg-yellow-950': NoteText !== 'Befriedigend!' }">
            </div>
            <div
                :class="{ 'w-20 h-20 rounded-full bg-red-600': true, 'bg-red-950': NoteText !== 'Genügend!' && NoteText !== 'Nicht Genügend!' }">
            </div>
        </div>
    </div>
</template>
