<script setup>
let games = ref([
  {
    id: "1",
    name: 'Spiel 1',
    date: '2021-10-10'
  },
  {
    id: "2",
    name: 'Spiel 2',
    date: '2021-10-11'
  },
  {
    id: "3",
    name: 'Spiel 3',
    date: '2021-10-12'
  },
  {
    id: "4",
    name: 'Spiel 4',
    date: '2021-10-13'
  }
]);

function addGame() {
  if (inputText.value === '') {
    return;
  }
  games.value.push({
    id: crypto.randomUUID(),
    name: inputText.value,
    date: Date.now()
  });
  inputText.value = '';
}

let inputText = ref('');
</script>

<template>
  <div class="content h-screen text-black flex items-center justify-center">
    <div class="card w-[40rem] shadow-xl bg-slate-200">
      <div class="card-body space-y-3">
        <h2 class="card-title">Derzeitige Spiele</h2>
        <ul class="menu" v-for="game in games" :key="game.id">
          <li><a href="/gamescreen">{{ game.name }}</a></li>
        </ul>
        <button class="btn w-[190px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white"
          onclick="my_modal_1.showModal()">Erstelle neues Spiel</button>
      </div>
    </div>

    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-slate-200">
        <input type="text" class="input input-bordered bg-slate-300" placeholder="Spielname" v-model="inputText" />
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