<script setup>

definePageMeta({
    middleware: ['auth'],
});

import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
const store = useStore();
const supabase = useSupabaseClient();
const profiles = storeToRefs(store).profiles;
const user = useSupabaseUser();
let klasse = ref(null);
async function loadProfiles() {
    const res = await supabase.from("profiles_view").select("*");
    profiles.value = res.data;
}
loadProfiles();

let klasseAuswahl = ref(null);

async function selectKlasse() {
    for (let i = 0; i < profiles.value.length; i++) {
        if (profiles.value[i].id == user.value.id) {
            klasse.value = profiles.value[i].klasse;
        }
    }
}
selectKlasse();
console.log(klasse.value);

async function updateKlasse() {
    const { data, error } = await supabase
        .from("profiles")
        .update({ klasse: klasseAuswahl.value })
        .eq("id", user.value.id);
    console.log(data);
    console.log(error);
}
</script>

<template>
    <div class="h-[85vh] min-h-[65rem] text-black flex flex-col justify-center items-center gap-5">
        <div>
            <h1 class="text-4xl font-bold">Willkommen in der Klasse {{ klasse }}</h1>
        </div>
        <input type="text" v-model="klasseAuswahl" class="bg-transparent border border-black" />
        <button @click="updateKlasse" class="bg-black text-white p-2 rounded-md">Klasse ändern</button>
    </div>
</template>