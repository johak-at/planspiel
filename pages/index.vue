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
  <div class="content h-[80vh] text-black flex items-center justify-center">
    <div class="card w-[40rem] shadow-xl bg-white">
      <div class="card-body space-y-3">
        <h2 class="card-title">Derzeitige Spiele</h2>
        <ul class="menu" v-for="game in filteredGames" :key="game.id">
          <li class="flex flex-row">
            <a class="w-[25rem]" @click="setCurrentGame(game.id)" :href="'/games/' + game.id">
              <p>{{ game.name }}</p>
            </a>
            <button class="btn hover:bg-gray-700 font-bold bg-black text-white" @click="() => deleteGame(game.id)">
              Löschen
            </button>
          </li>
        </ul>
        <button class="btn w-[190px] hover:bg-gray-700 font-bold bg-black text-white" onclick="my_modal_1.showModal()">
          Erstelle neues Spiel
        </button>
      </div>
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
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn  hover:bg-gray-700 font-bold bg-black text-white">
              Schließen
            </button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>
