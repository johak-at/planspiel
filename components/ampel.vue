<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let Note = storeToRefs(store).NoteBerechnen;

let activeColor = computed(() => {
    switch (Note) {
        case "Nicht Genügend!":
            return 'red';
        case "Genügend!":
        case "Befriedigend!":
            return 'yellow';
        case "Gut!":
        case "Sehr Gut!":
            return 'green';
        default:
            return 'off';
    }
});
</script>

<template>
    <div>
        <div class="text-black">{{ Note }}</div>

        <div class="ampel mt-4 p-4 bg-gray-300 rounded-lg shadow-lg w-28 flex flex-col items-center">
            <div
                :class="{ 'w-20 h-20 mb-2 rounded-full': true, 'bg-green-600': activeColor === 'green', 'bg-green-950': activeColor !== 'green' }">
            </div>
            <div
                :class="{ 'w-20 h-20 mb-2 rounded-full': true, 'bg-yellow-500': activeColor === 'yellow', 'bg-yellow-950': activeColor !== 'yellow' }">
            </div>
            <div
                :class="{ 'w-20 h-20 rounded-full': true, 'bg-red-600': activeColor === 'red', 'bg-red-950': activeColor !== 'red' }">
            </div>
        </div>
    </div>
</template>
