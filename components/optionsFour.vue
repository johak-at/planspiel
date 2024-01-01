<script setup>
definePageMeta({
    middleware: ["auth"],
});

import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

const roundHere = ref(1)
</script>

<template>
    <div v-if="roundHere===1" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 1: Für welchen Baum entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus() " class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
    <div v-else-if="roundHere===2" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 2: Für welchen Haus entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
    <div v-else-if="roundHere===3" class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Frage 3: Für welchen Juan entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button @click="roundHere++, store.nextRound(roundHere), store.totalRoundsPlus()" class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
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