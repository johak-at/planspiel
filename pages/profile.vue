<script setup>
import { Icon } from "@iconify/vue"
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

definePageMeta({
    middleware: ['auth'],
});

const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();
const store = useStore();
const supabase = useSupabaseClient();

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

])

let vollendeteSpiele = ref(SpieleTest.value.filter((spiel) => spiel.status === "vollendet"));
let nichtVollendeteSpiele = ref(SpieleTest.value.filter((spiel) => spiel.status === "nicht vollendet"));
let vollendetCounter = ref(vollendeteSpiele.value.length);
let nichtVollendetCounter = ref(nichtVollendeteSpiele.value.length);
let changeUsername = ref(false);
let changeEmail = ref(false);
let changeKlasse = ref(false);
let changePassword = ref(false);

let open = ref("Einstellungen");

let newUsername = ref(null);
let newEmail = ref(null);
let newKlasse = ref(null);
let newPassword = ref(null);

console.log(user.value);
async function logout() {
    try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        router.push('/login');
    } catch (error) {
        console.log(error.message);
    }
}

const profiles = storeToRefs(store).profiles;
let profileInfo = ref(null);
async function loadProfiles() {
    const res = await supabase.from("profiles_view").select("*");
    profiles.value = res.data;
}
loadProfiles();

async function selectProfileInfo() {
    for (let i = 0; i < profiles.value.length; i++) {
        if (profiles.value[i].id == user.value.id) {
            profileInfo.value = profiles.value[i];
        }
    }
}
selectProfileInfo();

async function updateUsername() {
    const { data, error } = await supabase
        .from("profiles")
        .update({ username: newUsername.value })
        .eq("id", user.value.id);
    console.log(data);
    console.log(error);
    changeUsername.value = false;
    selectProfileInfo();
}

async function updateKlasse() {
    const { data, error } = await supabase
        .from("profiles")
        .update({ klasse: newKlasse.value })
        .eq("id", user.value.id);
    console.log(data);
    console.log(error);
    changeKlasse.value = false;
    selectProfileInfo();
}

async function updateEmail() {
    changeEmail.value = false;
}

async function updatePassword() {
    changePassword.value = false;
}
</script>

<template>
    <main class="h-[85vh] min-h-[65rem] text-black flex justify-center items-center">
        <div class="flex flex-row w-[98%] max-w-[90rem] h-[60rem] shadow-xl bg-white rounded-3xl">
            <div class="flex flex-col w-[15rem] h-full space-y-4 p-4 bg-gray-300 rounded-l-3xl">
                <div class="flex flex-row space-x-2">
                    <img :src="profileInfo.avatar_url"
                        class="w-[50px] h-[50px] object-cover object-center rounded-full border-2 border-black" />
                    <div class="flex flex-col text-center">
                        <h1 class="font-semibold">{{ profileInfo.username }}</h1>
                        <p class="text-gray-600">Benutzer</p>
                    </div>
                </div>
                <button :class="{
                    'flex w-[200px] border border-black hover:bg-gray-200 font-semibold bg-white space-x-4': true,
                    'bg-zinc-300 hover:bg-zinc-300': open === 'Spiele'
                }" @click="open = 'Spiele'">
                    <Icon icon="streamline:controller-1-solid" class="text-2xl ml-2" />
                    <p class="w-full text-left">Meine Spiele</p>
                </button>
                <button :class="{
                    'flex w-[200px] border border-black hover:bg-gray-200 font-semibold bg-white space-x-4': true,
                    'bg-zinc-300 hover:bg-zinc-300': open === 'Einstellungen'
                }" @click="open = 'Einstellungen'">
                    <Icon icon="mdi:gear" class="text-2xl ml-2" />
                    <p class="w-full text-left">Einstellungen</p>
                </button>
                <div class="flex w-full h-full justify-center items-end p-1">
                    <button class="rounded-full h-8 w-[160px] hover:bg-gray-700 font-semibold bg-black text-white"
                        @click="logout">Abmelden</button>
                </div>
            </div>
            <div v-if="open === 'Spiele'" class="flex flex-col w-[85rem] rounded-r-lg p-14 space-y-6">
                <div class="flex flex-row h-[25%] space-x-6">
                    <div
                        class="flex flex-col w-[25%] h-full border border-black rounded-3xl items-center justify-center space-y-14">
                        <h1 class="text-xl text-center">Vollendete Spiele</h1>
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
                        <h1 class="text-xl text-center">Nicht vollendete Spiele</h1>
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
                    <img :src="profileInfo.avatar_url"
                        class="w-[150px] h-[150px] object-cover object-center rounded-full border-2 border-black" />
                    <button
                        class="font-semibold text-xl h-8 w-[220px] bg-gray-200 rounded-full hover:bg-gray-300">Profilbild
                        bearbeiten</button>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Benutzername:</h1>
                        <input v-if="changeUsername" v-model="newUsername" type="text" id="username" name="username"
                            placeholder="Neuer Benutzername" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ profileInfo.username }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeUsername"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeUsername = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="updateUsername">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">E-Mail:</h1>
                        <input v-if="changeEmail" v-model="newEmail" type="email" id="email" name="email"
                            placeholder="Neue E-Mail" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ user.email }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeEmail"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeEmail = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="updateEmail">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Klasse:</h1>
                        <input v-if="changeKlasse" v-model="newKlasse" type="text" id="klasse" name="klasse"
                            placeholder="Neue Klasse" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl">{{ profileInfo.klasse }}</p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changeKlasse"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changeKlasse = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="updateKlasse">Speichern</button>
                    </div>
                </div>

                <div class="flex border border-black justify-between rounded-lg p-2">
                    <div class="flex items-center">
                        <h1 class="font-semibold text-xl w-[200px]">Passwort:</h1>
                        <input v-if="changePassword" v-model="newPassword" type="password" id="password" name="password"
                            placeholder="Neues Passwort" class="text-xl bg-white text-black" />
                        <p v-else class="text-xl"></p>
                    </div>
                    <div class="flex space-x-4">
                        <button v-if="!changePassword"
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="changePassword = true">Ändern</button>
                        <button v-else
                            class="font-semibold text-xl h-8 w-[120px] bg-gray-200 rounded-full hover:bg-gray-300"
                            @click="updatePassword">Speichern</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
