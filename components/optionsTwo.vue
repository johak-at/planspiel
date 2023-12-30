<script setup>
definePageMeta({
    middleware: ["auth"],
});
</script>

<template>
    <div class="card w-[40rem] shadow-xl bg-white">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Für welchen Lieferanten entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Günstig</button>
                <button class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Mittig</button>
                <button class="btn w-[100px] hover:bg-gray-700 font-bold bg-black text-white">Teuer</button>
            </div>
        </div>
    </div>
</template>