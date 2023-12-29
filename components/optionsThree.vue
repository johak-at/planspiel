<script setup>
definePageMeta({
  middleware: ["auth"],
});</script>

<template>
    <div class="card w-[40rem] shadow-xl bg-slate-200">
        <div class="card-body space-y-3">
            <h2 class="card-title text-black">Für welchen Plan entscheidest du dich?</h2>
            <div class="flex flex-col space-y-1">
                <button
                    class="btn w-[100px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white">Günstig</button>
                <button
                    class="btn w-[100px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white">Mittig</button>
                <button
                    class="btn w-[100px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white">Teuer</button>
                <button class="btn w-[100px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white">Sehr
                    Teuer</button>
            </div>
        </div>
    </div>
</template>