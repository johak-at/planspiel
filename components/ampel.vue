<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";



const store = useStore();

let NoteText = storeToRefs(store).NoteText;


</script>

<template>
    <div>
        {{NoteText}}
    </div>
</template>