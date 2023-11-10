<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let bilanz = storeToRefs(store).bilanzen;
let passiv = storeToRefs(store).passiva;
let guv = storeToRefs(store).GuVs;
await store.loadBilanzen();
await store.loadPassiva();
await store.loadGuVs();
let bilanzValue = ref(bilanz._rawValue[0]);
let passivaValue = ref(passiv._rawValue[0]);
let guvValue = ref(guv._rawValue[0]);
let currentYear = storeToRefs(store).currentYear;

function changeYear(year) {
  bilanzValue.value = bilanz._rawValue[year];
  passivaValue.value = passiv._rawValue[year];
  guvValue.value = guv._rawValue[year];
  replace();
  currentYear.value = year;
}

function replace() {
  bilanzValue.value = replaceUnderscoresWithSpaces(bilanzValue.value);
  guvValue.value = replaceUnderscoresWithSpaces(guvValue.value);
  passivaValue.value = replaceUnderscoresWithSpaces(passivaValue.value);

  let props = ["id", "created at", "Jahr"];
  props.forEach((prop) => {
    delete bilanzValue.value[prop];
    delete guvValue.value[prop];
    delete passivaValue.value[prop];
  });
}
replace();

function replaceUnderscoresWithSpaces(obj) {
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/_/g, " ");
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}
let activeTable = ref("bilanz");
</script>

<template>
  <div class="flex flex-col gap-x-5 items-center space-y-3">
    <!--
    <div class="h-20">{{ eigenkapitalQuote }} Note: {{ noten }}</div>
    <div class="h-20">{{EbitQuote}} Note: {{ noten2 }}</div>
    <div class="h-20">Durchschnittsnote: {{ (noten + noten2)/2 }}</div>
    -->
    <div>
      <button class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white w-40"
        @click="activeTable = 'bilanz'" v-if="activeTable == 'guv'">
        Bilanz anzeigen
      </button>
      <button class="btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 text-white w-40"
        @click="activeTable = 'guv'" v-if="activeTable == 'bilanz'">
        GuV anzeigen
      </button>
    </div>
    <div class="flex flex-row space-x-4">
      <button @click="changeYear(2)" :class="{
        'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
        'bg-slate-600 hover:bg-slate-400': currentYear === 2,
      }">
        2019
      </button>
      <button @click="changeYear(1)" :class="{
        'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
        'bg-slate-600 hover:bg-slate-400': currentYear === 1,
      }">
        2020
      </button>
      <button @click="changeYear(0)" :class="{
        'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
        'bg-slate-600 hover:bg-slate-400': currentYear === 0,
      }">
        2021
      </button>
    </div>
    <div class="flex flex-row space-x-2" v-if="activeTable == 'bilanz'">
      <div class="flex-grow inline-block align-top">
        <table class="border border-slate-500 rounded-lg p-4 min-w-0">
          <thead>
            <tr class="font-bold text-center">
              <th colspan="2" class="bg-slate-500 text-white py-2">Aktiva</th>
            </tr>
            <tr>
              <th class="border border-slate-500 p-2">Bezeichnung</th>
              <th class="border border-slate-500 p-2">Betrag</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in bilanzValue" :key="key">
              <td class="border border-slate-500 p-2">{{ key }}</td>
              <td class="border border-slate-500 p-2">
                <div class="flex justify-between">
                  <div>€</div>
                  <div class="text-end">
                    {{
                      value.toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                      })
                    }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex-grow inline-block align-top">
        <table class="border border-slate-500 rounded-lg p-4 min-w-0">
          <thead>
            <tr class="font-bold text-center">
              <th colspan="2" class="bg-slate-500 text-white py-2">Passiva</th>
            </tr>
            <tr>
              <th class="border border-slate-500 p-2">Bezeichnung</th>
              <th class="border border-slate-500 p-2">Betrag</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in passivaValue" :key="key">
              <td class="border border-slate-500 p-2">{{ key }}</td>
              <td class="border border-slate-500 p-2">
                <div class="flex justify-between">
                  <div>€</div>
                  <div>
                    {{
                      value.toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                      })
                    }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="activeTable == 'guv'">
      <div class="flex-grow inline-block align-top">
        <table class="border border-slate-500 rounded-lg p-4 min-w-0">
          <thead>
            <tr class="font-bold text-center">
              <th colspan="2" class="bg-slate-500 text-white py-2">GuV</th>
            </tr>
            <tr>
              <th class="border border-slate-500 p-2">Bezeichnung</th>
              <th class="border border-slate-500 p-2">Betrag</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in guvValue" :key="key">
              <td class="border border-slate-500 p-2">{{ key }}</td>
              <td class="border border-slate-500 p-2">
                <div class="flex justify-between">
                  <div>€</div>
                  <div>
                    {{
                      value.toLocaleString("de-DE", {
                        minimumFractionDigits: 2,
                      })
                    }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  display: inline-block;
}
</style>
