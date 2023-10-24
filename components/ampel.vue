<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
let NoteText = storeToRefs(store).NoteText;

</script>

<template>
    <div>
        {{ NoteText }}
        <div class="ampel">
            <div class="w-16 h-16 bg-green-950 rounded-full"></div>
            <div class="w-16 h-16 bg-yellow-950 rounded-full"></div>
            <div class="w-16 h-16 bg-red-950 rounded-full"></div>
        </div>
    </div>
</template>
