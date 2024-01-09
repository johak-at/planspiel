<script setup></script>

<template>
    <div class="w-[55rem] h-[35rem] text-black shadow-xl bg-white rounded-3xl p-6 flex flex-col text-xl">
        <div class="flex space-x-2">
            <h1 class="font-semibold">Aufgabe:</h1>
            <p>Für welchen Sessel entscheidest du dich?</p>
        </div>
        <div class="h-full flex justify-evenly">
            <div class="flex flex-col justify-center space-y-3">
                <img src="https://via.placeholder.com/1" alt="Logo" class="w-[200px] h-[230px] mb-4">
                <button class="rounded-3xl hover:bg-zinc-300 font-semibold bg-zinc-400 text-white py-1 w-[200px]">
                    Classic</button>
                <button class="rounded-3xl hover:bg-neutral-400 font-semibold bg-neutral-500 text-white py-1 w-[200px]">
                    Info</button>
            </div>

            <div class="flex flex-col justify-center space-y-3">
                <img src="https://via.placeholder.com/1" alt="Logo" class="w-[200px] h-[230px] mb-4">
                <button class="rounded-3xl hover:bg-zinc-300 font-semibold bg-zinc-400 text-white py-1 w-[200px]">
                    Comfort</button>
                <button class="rounded-3xl hover:bg-neutral-400 font-semibold bg-neutral-500 text-white py-1 w-[200px]">
                    Info</button>
            </div>

            <div class="flex flex-col justify-center space-y-3">
                <img src="https://via.placeholder.com/1" alt="Logo" class="w-[200px] h-[230px] mb-4">
                <button class="rounded-3xl hover:bg-zinc-300 font-semibold bg-zinc-400 text-white py-1 w-[200px]">
                    HighEnd</button>
                <button class="rounded-3xl hover:bg-neutral-400 font-semibold bg-neutral-500 text-white py-1 w-[200px]">
                    Info</button>
            </div>
        </div>
        <div class="flex justify-end w-full">
            <button class="rounded-3xl hover:bg-gray-700 font-semibold bg-black text-white w-[120px]">
                Weiter</button>
        </div>
    </div>
</template>