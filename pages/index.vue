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

let games = storeToRefs(store).games;
let gamesValue = ref(games._rawValue);
console.log(gamesValue.value);
let currentGame = storeToRefs(store).currentGame;
// let filteredGames = ref(games.value.filter((game) => game.id !== "0"));

// function updateFilter() {
//   filteredGames.value = games.value.filter((game) => game.id !== "0");
// }

function addGame() {
  if (inputText.value === "" || code.value === "") {
    return;
  }
  games.value.push({
    id: crypto.randomUUID(),
    name: inputText.value,
    key: code.value,
    date: Date.now(),
    day: 1,
  });
  inputText.value = "";
  code.value = "";
  updateFilter();
}
let inputText = ref("");
let code = ref("");

async function insertGame() {
  const { data, error } = await supabase.from("games-test").insert([
    {
      id: crypto.randomUUID(),
      date: new Date().toISOString(), // This will give you a date string in ISO 8601 format
      name: inputText.value,
      key: code.value,
      day: 1,
    },
  ]);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
}

function setCurrentGame(id) {
  currentGame.value = id;
}
function deleteGame(id) {
  currentGame.value = 1;
  games.value = games.value.filter((game) => game.id !== id);
  updateFilter();
}
</script>

<template>
  <div class="content h-[80vh] text-black flex items-center justify-center">
    <div class="card w-[40rem] shadow-xl bg-slate-200">
      <div class="card-body space-y-3">
        <h2 class="card-title">Derzeitige Spiele</h2>
        <ul class="menu" v-for="game in filteredGames" :key="game.id">
          <li class="flex flex-row">
            <a
              class="w-[25rem]"
              @click="setCurrentGame(game.id)"
              href="/gamescreen"
            >
              <p>{{ game.name }}</p>
            </a>
            <button
              class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
              @click="deleteGame(game.id)"
            >
              Löschen
            </button>
          </li>
        </ul>
        <button
          class="btn w-[190px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
          onclick="my_modal_1.showModal()"
        >
          Erstelle neues Spiel
        </button>
      </div>
    </div>

    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-slate-200">
        <div class="flex flex-col space-y-2">
          <input
            type="text"
            class="input input-bordered bg-slate-300 w-fit"
            placeholder="Spielname"
            v-model="inputText"
          />
          <input
            type="text"
            class="input input-bordered bg-slate-300 w-fit"
            placeholder="Zugangsschlüssel"
            v-model="code"
          />
        </div>

        <div class="modal-action flex flex-row justify-between">
          <button
            class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
            @click="insertGame"
          >
            Spiel Erstellen
          </button>
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button
              class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
            >
              Schließen
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
