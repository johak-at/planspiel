<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let bilanz = storeToRefs(store).bilanzen;
let passiv = storeToRefs(store).passiva;
let guv = storeToRefs(store).GuVs;
let leistung = storeToRefs(store).Leistungsbudget;
await store.loadBilanzen();
await store.loadPassiva();
await store.loadGuVs();
await store.loadLeistungsbudget();
let currentYear = storeToRefs(store).currentYear;
let bilanzValue = ref(bilanz._rawValue[currentYear.value]);
let passivaValue = ref(passiv._rawValue[currentYear.value]);
let guvValue = ref(guv._rawValue[currentYear.value]);
let leistungValue = ref(leistung._rawValue[currentYear.value]);

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
  leistungValue.value = replaceUnderscoresWithSpaces(leistungValue.value);

  let props = [
    "id",
    "created at",
    "Jahr",
    "aktiva id",
    "passiva id",
    "guv id",
    "leistungs id",
  ];
  props.forEach((prop) => {
    delete bilanzValue.value[prop];
    delete guvValue.value[prop];
    delete passivaValue.value[prop];
    delete leistungValue.value[prop];
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
    <div class="flex flex-row space-x-3">
      <button
        :class="{
          'btn w-[150px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': activeTable === 'bilanz',
        }"
        @click="activeTable = 'bilanz'"
      >
        Bilanz anzeigen
      </button>
      <button
        :class="{
          'btn w-[150px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': activeTable === 'guv',
        }"
        @click="activeTable = 'guv'"
      >
        GuV anzeigen
      </button>
      <button
        :class="{
          'btn w-[150px] hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': activeTable === 'leistung',
        }"
        @click="activeTable = 'leistung'"
      >
        Leistungsbudget anzeigen
      </button>
    </div>
    <div class="flex flex-row space-x-3">
      <button
        @click="changeYear(2)"
        :class="{
          'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': currentYear === 2,
        }"
      >
        2019
      </button>
      <button
        @click="changeYear(1)"
        :class="{
          'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': currentYear === 1,
        }"
      >
        2020
      </button>
      <button
        @click="changeYear(0)"
        :class="{
          'btn hover:text-slate-600 hover:bg-slate-300 font-bold bg-slate-500 px-9 text-white': true,
          'bg-slate-600 hover:bg-slate-400': currentYear === 0,
        }"
      >
        2021
      </button>
    </div>
    <div class="flex flex-row space-x-2" v-if="activeTable == 'bilanz'">
      <Bilanz :bilanzValue="bilanzValue" :passivaValue="passivaValue" />
    </div>
    <div v-if="activeTable == 'guv'">
      <Guv :guvValue="guvValue" />
    </div>
    <div v-if="activeTable == 'leistung'">
      <Leistungsbudget :leistungValue="leistungValue" />
    </div>
  </div>
</template>

<style scoped>
p {
  display: inline-block;
}
</style>
