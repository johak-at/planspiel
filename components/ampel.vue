<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let NoteText = storeToRefs(store).NoteBerechnen;

</script>

<template>
    <div>
        <div class="text-black">{{ NoteText }}</div>

        <div class="ampel mt-4 p-4 bg-gray-300 rounded-lg shadow-lg w-28 flex flex-col items-center">
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
