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



klasse.value = profiles.value[0].klasse;
console.log(klasse.value);
</script>

<template>
    <div class="h-[85vh] min-h-[65rem] text-black flex justify-center items-center">
        {{ klasse }}
    </div>
</template>