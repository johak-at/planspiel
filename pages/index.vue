<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let games = storeToRefs(store).games;
let currentGame = storeToRefs(store).currentGame;
let filteredGames = ref(games.value.filter(game => game.id !== '0'));

function updateFilter() {
  filteredGames.value = games.value.filter(game => game.id !== '0');
}

function addGame() {
  if (inputText.value === '' || code.value === '') {
    return;
  }
  games.value.push({
    id: crypto.randomUUID(),
    name: inputText.value,
    key: code.value,
    date: Date.now(),
    day: 1,
  });
  inputText.value = '';
  code.value = '';
  updateFilter();
}

let inputText = ref('');
let code = ref('');

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
  <div class="content h-screen text-black flex items-center justify-center">
    <div class="card w-[40rem] shadow-xl bg-slate-200">
      <div class="card-body space-y-3">
        <h2 class="card-title">Derzeitige Spiele</h2>
        <ul class="menu" v-for="game in filteredGames" :key="game.id">
          <li class="flex flex-row">
            <a class="w-[25rem]" @click="setCurrentGame(game.id)" href="/gamescreen">
              <p>{{ game.name }}</p>

            </a>
            <button class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
              @click="deleteGame(game.id)">Löschen</button>
          </li>
        </ul>
        <button class="btn w-[190px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
          onclick="my_modal_1.showModal()">Erstelle neues Spiel</button>
      </div>
    </div>

    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-slate-200">
        <div class="flex flex-col space-y-2">
          <input type="text" class="input input-bordered bg-slate-300 w-fit" placeholder="Spielname"
            v-model="inputText" />
          <input type="text" class="input input-bordered bg-slate-300 w-fit" placeholder="Zugangsschlüssel"
            v-model="code" />
        </div>

        <div class="modal-action flex flex-row justify-between">
          <button class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
            @click="addGame">Spiel Erstellen</button>
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button
              class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white">Schließen</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>