<script setup>
definePageMeta({
  middleware: ["auth"],
});
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { createClient } from "@supabase/supabase-js";

const store = useStore();
const supabase = createClient(
  "https://iokcanuplcasnxjfqmbj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlva2NhbnVwbGNhc254amZxbWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2MzM0ODYsImV4cCI6MjAwNDIwOTQ4Nn0.olguMW34EO9BFr-1-mbnaIpC86sbINYIAgJ9GRBLW-4"
);

const games = computed(() => store.games);

onMounted(async () => {
  // Call loadGames when the component is mounted
  await store.loadGames();

  // Access the games data from the store
  games.value = store.games;
  console.log(games.value[0].id);
});

async function updateInfo() {
  await store.loadGames();
  games.value = store.games;
}

let inputText = ref("");
let code = ref("");

const insertGame = async () => {
  await store.insertGame({ name: inputText.value, code: code.value });

  // Clear input fields
  inputText.value = "";
  code.value = "";
}

const deleteGame = async (gameId) => {
  // Call deleteGame from the store
  await store.deleteGame(gameId);

  // Access the updated games data from the store
  games.value = store.games;
};

let currentGame = storeToRefs(store).currentGame;
let filteredGames = games;

let NoteText = storeToRefs(store).NoteBerechnen;

// function updateFilter() {
//   filteredGames.value = games.value.filter((game) => game.id !== "0");
// }

// function addGame() {
//   if (inputText.value === "" || code.value === "") {
//     return;
//   }
//   games.value.push({
//     id: crypto.randomUUID(),
//     name: inputText.value,
//     key: code.value,
//     date: Date.now(),
//     day: 1,
//   });
//   inputText.value = "";
//   code.value = "";
//   updateFilter();
// }


// async function deleteGame(gameId) {
//   const { data, error } = await supabase
//     .from("games-test")
//     .delete()
//     .match({ id: gameId });

//   if (error) {
//     console.error("Error deleting data:", error);
//   } else {
//     console.log("Data deleted successfully:", data);
//     // After deleting, reload the games from the store
//     await store.loadGames();
//   }
// }


function setCurrentGame(id) {
  currentGame.value = id;
  console.log(id);
}
// function deleteGame(id) {
//   currentGame.value = 1;
//   games.value = games.value.filter((game) => game.id !== id);
//   updateFilter();
// }
</script>

<template>
  <!-- 
  <a class="" @click="setCurrentGame(game.id)" :href="'/games/' + game.id">
              <p>{{ game.name }}</p>
            </a>
 -->

  <div class="h-[85vh] min-h-[55rem] text-black flex justify-center items-center">
    <div class="flex flex-col w-[40rem] h-fit shadow-xl bg-white p-5 space-y-2 rounded-3xl">
      <h1 class="text-xl font-semibold">Überblick</h1>
      <div class="max-h-[40rem] flex flex-col space-y-2 overflow-auto">
        <ul class="menu" v-for="(game, index) in filteredGames" :key="game.id">
          <div class="flex flex-col space-y-4 border border-black p-2 rounded-lg">
            <div class="flex flex-row space-x-2">
              <p class="w-6 border border-black rounded-full text-center">{{ index + 1 }}</p>
              <h1 class="w-full">{{ game.name }}</h1>
            </div>

            <div class="flex flex-col">
              <h1 class="text-center">Aufgaben erledigt: {{ game.round }}/12</h1>
              <progress class="progress w-full" :value="game.round" max="12"></progress>
            </div>

            <div class="flex flex-col space-y-2">
              <a class="rounded-3xl py-[2px] w-[150px] text-center hover:bg-gray-700 font-bold bg-black text-white"
                @click="setCurrentGame(game.id)" :href="'/games/' + game.id">
                <p>Aufgaben ansehen</p>
              </a>
              <div class="flex flex-row space-x-2">
                <h1>Spielstand:</h1>
                <p>{{ NoteText }}</p>
              </div>
            </div>

            <div class="flex justify-end">
              <button class="rounded-3xl h-6 w-20 hover:bg-gray-700 font-bold bg-black text-white"
                @click="() => deleteGame(game.id)">
                Löschen
              </button>
            </div>
          </div>
        </ul>
      </div>

      <button class="w-[190px] hover:bg-gray-700 font-bold bg-black text-white p-1 rounded-full"
        onclick="my_modal_1.showModal()">
        Erstelle neues Spiel
      </button>
    </div>

    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-white">
        <div class="flex flex-col space-y-2">
          <input type="text" class="input input-bordered bg-white w-fit" placeholder="Spielname" v-model="inputText" />
          <input type="text" class="input input-bordered bg-white w-fit" placeholder="Zugangsschlüssel" v-model="code" />
        </div>

        <div class="modal-action flex flex-row justify-between">
          <button class="btn hover:bg-gray-700 font-bold bg-black text-white" @click="insertGame">
            Spiel Erstellen
          </button>
          <form method="dialog">
            <button class="btn  hover:bg-gray-700 font-bold bg-black text-white">
              Schließen
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
