<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let durchSchnittsnoten = storeToRefs(store).durchschnitt;
let noten = storeToRefs(store).noten;
let noten2 = storeToRefs(store).noten2;

</script>

<template>
    <div>
        {{ (noten + noten2) / 2 }}
    </div>
</template>