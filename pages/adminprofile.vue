<script setup>
import { Icon } from "@iconify/vue"
definePageMeta({
    middleware: ['auth'],
});

const username = ref("t.manuel06");
const klasse = ref("5 BHK");
const email = ref("terstena.manuel@johak.at");
const password = ref("123456789");
const passwordHidden = ref(password.value.replace(/./g, "*"));

let SpieleTest = ref([
    {
        id: 1,
        name: "Spiel 1",
        status: "vollendet",
        Schüler: [
            {
                id: 1,
                name: "Manuel",

            },
            {
                id: 2,
                name: "Manuel",

            },
            {
                id: 3,
                name: "Manuel",

            },
            {
                id: 4,
                name: "Manuel",

            },
        ],
    },
    {
        id: 2,
        name: "Spiel 2",
        status: "vollendet",
        Schüler: [
            {
                id: 1,
                name: "Manuel",

            },
            {
                id: 2,
                name: "Manuel",

            },
            {
                id: 3,
                name: "Manuel",

            },
            {
                id: 4,
                name: "Manuel",

            },
        ],
    },
    {
        id: 3,
        name: "Spiel 3",
        status: "vollendet",
        Schüler: [
            {
                id: 1,
                name: "Manuel",

            },
            {
                id: 2,
                name: "Manuel",

            },
            {
                id: 3,
                name: "Manuel",

            },
            {
                id: 4,
                name: "Manuel",

            },
        ],
    },
    {
        id: 4,
        name: "Spiel 4",
        status: "nicht vollendet",
        Schüler: [
            {
                id: 1,
                name: "Manuel",

            },
            {
                id: 2,
                name: "Manuel",

            },
            {
                id: 3,
                name: "Manuel",

            },
            {
                id: 4,
                name: "Manuel",

            },
        ],
    },
    {
        id: 5,
        name: "Spiel 5",
        status: "vollendet",
        Schüler: [
            {
                id: 1,
                name: "Manuel",

            },
            {
                id: 2,
                name: "Manuel",

            },
            {
                id: 3,
                name: "Manuel",

            },
            {
                id: 4,
                name: "Manuel",

            },
        ],
    },

])
let vollendeteSpiele = ref(SpieleTest.value.filter((spiel) => spiel.status === "vollendet"));
let nichtVollendeteSpiele = ref(SpieleTest.value.filter((spiel) => spiel.status === "nicht vollendet"));
let vollendetCounter = ref(vollendeteSpiele.value.length);
let nichtVollendetCounter = ref(nichtVollendeteSpiele.value.length);
let changeUsername = ref(false);
let changeEmail = ref(false);
let changeKlasse = ref(false);
let changePassword = ref(false);

let open = ref("Spiele");
</script>

<template>
    <main class="min-h-[80rem] h-screen text-black flex justify-center">
        <div class="flex flex-row w-[100rem] h-[60rem] shadow-xl bg-white rounded-lg mt-10">
            <div class="flex flex-col w-[15rem] h-full space-y-4 p-4 bg-gray-300 rounded-l-lg">
                <div class="flex flex-row space-x-2">
                    <img src="../assets/Manuel.jpg"
                        class="w-[50px] h-[50px] object-cover object-center rounded-full border-2 border-black" />
                    <div class="flex flex-col text-center">
                        <h1 class="font-semibold">{{ username }}</h1>
                        <p class="text-gray-600">Benutzer</p>
                    </div>
                </div>
                <button
                    :class="{ 'flex w-[200px] border border-black bg-white hover:bg-gray-200 space-x-4': true, 'bg-slate-300 hover:bg-slate-300': open === 'Spiele' }"
                    @click="open = 'Spiele'">
                    <Icon icon="streamline:controller-1-solid" class="text-2xl ml-2" />
                    <p class="w-full text-left">Meine Spiele</p>
                </button>
                <button
                    :class="{ 'flex w-[200px] border border-black bg-white hover:bg-gray-200 space-x-4': true, 'bg-slate-300 hover:bg-slate-300': open === 'Einstellungen' }"
                    @click="open = 'Einstellungen'">
                    <Icon icon="mdi:gear" class="text-2xl ml-2" />
                    <p class="w-full text-left">Einstellungen</p>
                </button>
                <div class="flex w-full h-full justify-center items-end p-1">
                    <button
                        class="rounded-full h-8 w-[160px] hover:bg-gray-700 font-semibold bg-black text-white">Abmelden</button>
                </div>
            </div>
            <div v-if="open === 'Spiele'" class="flex flex-col w-[85rem] rounded-r-lg p-14 space-y-6">
                <div class="flex flex-row h-[25%] space-x-6">
                    <div
                        class="flex flex-col w-[25%] h-full border border-black rounded-3xl items-center justify-center space-y-14">
                        <h1 class="text-xl">Vollendete Spiele</h1>
                        <h1 class="text-3xl text-blue-500 font-semibold">{{ vollendetCounter }}</h1>
                    </div>
                    <div class="flex w-full h-full border border-black rounded-3xl p-5">
                        <div class="flex flex-col h-full w-full space-y-1">
                            <h1 class="text-xl">Teams</h1>
                            <div class="flex flex-col space-y-2 overflow-auto">
                                <ul v-for="spiel in vollendeteSpiele">
                                    <div
                                        class="flex flex-row w-full space-x-2 border-2 border-black rounded-lg bg-blue-100">
                                        <h1 class="w-fit ml-5">{{ spiel.name }}:</h1>
                                        <div class="flex flex-row space-x-2 w-[85%] justify-center">
                                            <ul class="flex flex-row" v-for="schüler in spiel.Schüler">
                                                <li>{{ schüler.name }}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row h-[25%] space-x-6">
                    <div
                        class="flex flex-col w-[25%] h-full border border-black rounded-3xl items-center justify-center space-y-14">
                        <h1 class="text-xl">Nicht vollendete Spiele</h1>
                        <h1 class="text-3xl text-blue-500 font-semibold">{{ nichtVollendetCounter }}</h1>
                    </div>
                    <div class="flex w-full h-full border border-black rounded-3xl p-5">
                        <div class="flex flex-col h-full w-full space-y-1">
                            <h1 class="text-xl">Teams</h1>
                            <div class="flex flex-col space-y-2 overflow-auto">
                                <ul v-for="spiel in nichtVollendeteSpiele">
                                    <div
                                        class="flex flex-row w-full space-x-2 border-2 border-black rounded-lg bg-blue-100">
                                        <h1 class="w-fit ml-5">{{ spiel.name }}:</h1>
                                        <div class="flex flex-row space-x-2 w-[85%] justify-center">
                                            <ul class="flex flex-row" v-for="schüler in spiel.Schüler">
                                                <li>{{ schüler.name }}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full h-[50%] border border-black rounded-3xl"></div>
            </div>
            <div v-if="open === 'Einstellungen'" class="flex flex-col w-[85rem] rounded-r-lg p-8 space-y-6">
                <div class="flex w-fit space-x-10 items-center mb-20">
                    <img src="../assets/Manuel.jpg"
                        class="w-[150px] h-[150px] object-cover object-center rounded-full border-2 border-black" />
                    <button
                        class="font-semibold text-xl h-8 w-[220px] bg-gray-200 rounded-full hover:bg-gray-300">Profilbild
                        bearbeiten</button>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Benutzername:</h1>
                        <input v-if="changeUsername" type="text" id="username" name="username"
                            placeholder="Neuer Benutzername" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ username }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeUsername"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeUsername = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeUsername = false">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">E-Mail:</h1>
                        <input v-if="changeEmail" type="email" id="email" name="email" placeholder="Neue E-Mail"
                            class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ email }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeEmail"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeEmail = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeEmail = false">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Klasse:</h1>
                        <input v-if="changeKlasse" type="text" id="klasse" name="klasse" placeholder="Neue Klasse"
                            class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ klasse }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeKlasse"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeKlasse = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeKlasse = false">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Passwort:</h1>
                        <input v-if="changePassword" type="password" id="password" name="password"
                            placeholder="Neues Passwort" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ passwordHidden }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changePassword"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changePassword = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changePassword = false">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
