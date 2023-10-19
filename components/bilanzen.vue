<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let eigenkapitalQuote = ref(0);
let noten = storeToRefs(store).noten;
let noten2 = storeToRefs(store).noten2;
let noten3 = storeToRefs(store).noten3;
let noten4 = storeToRefs(store).noten4;
let NoteText = storeToRefs(store).NoteText;
let fiktiveVerschuldungsDauer = ref(0);
let EbitQuote = ref(0);
let CashFlowQuote = ref(0);
let Erfolg = ref(0);
let Fremdkapital = ref(0);
let LiquideMittel = ref(0);
let durchSchnittsnoten = storeToRefs(store).durchschnitt;

let activate2019 = ref("");
let activate2020 = ref("");
let activate2021 = ref("active");

onMounted(async () => {
  berechnen();
});

let bilanz = storeToRefs(store).bilanzen;
let passiv = storeToRefs(store).passiva;
let guv = storeToRefs(store).GuVs;
await store.loadBilanzen();
await store.loadPassiva();
await store.loadGuVs();
let bilanzValue = ref(bilanz._rawValue[0]);
let passivaValue = ref(passiv._rawValue[0]);
let guvValue = ref(guv._rawValue[0]);
let workingCapital = ref(0);
let cashFlow = ref(0);
// console.log(bilanzValue);
// console.log(passivaValue);
// console.log(guvValue);

function changeYear(year) {
  bilanzValue.value = bilanz._rawValue[year];
  passivaValue.value = passiv._rawValue[year];
  guvValue.value = guv._rawValue[year];
  replace();
}

// Replace underscores with spaces in the keys
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

function CashFlowQuoteBerechnen() {


  CashFlowQuote.value = (cashFlow.value * 100 / guvValue.value["1. Umsatzerlöse"]).toFixed(2);


  if (CashFlowQuote.value > 10) {
    noten4.value = 1;
  }
  else if (CashFlowQuote.value > 8) {
    noten4.value = 2;
  }
  else if (CashFlowQuote.value > 5) {
    noten4.value = 3;
  }
  else if (CashFlowQuote.value >= 2) {
    noten4.value = 4;
  }
  else {
    noten4.value = 5;
  }


}

function eigenKapital() {
  eigenkapitalQuote.value = (passivaValue.value["A. Eigenkapital"] * 100 / (bilanzValue.value["A. Anlagevermögen"] + bilanzValue.value["B. Umlaufvermögen"])).toFixed(2);

  if (eigenkapitalQuote.value > 40) {
    noten.value = 1;
  }
  else if (eigenkapitalQuote.value > 30) {
    noten.value = 2;
  }
  else if (eigenkapitalQuote.value > 20) {
    noten.value = 3;
  }
  else if (eigenkapitalQuote.value >= 8) {
    noten.value = 4;
  }
  else {
    noten.value = 5;
  }
}

function durchSchnitt() {

  durchSchnittsnoten.value = (noten.value + noten2.value + noten3.value + noten4.value) / 4;
  console.log(noten.value, noten2.value, noten3.value, noten4.value, durchSchnittsnoten.value);
  if (durchSchnittsnoten.value >= 4.5) {
    NoteText.value = "Note: Nicht Genügend!";
  }
  else if (durchSchnittsnoten.value >= 3.5) {
    NoteText.value = "Note: Genügend!";
  }
  else if (durchSchnittsnoten.value >= 2.5) {
    NoteText.value = "Note: Befriedigend!";
  }
  else if (durchSchnittsnoten.value >= 1.5) {
    NoteText.value = "Note: Gut!";
  }
  else {
    NoteText.value = "Note: Sehr Gut!";
  }
}

// function VerschuldungsDauer() {



//   Fremdkapital.value = passivaValue.value["1. Verbindlichkeiten gegenüber Kreditinstituten"] + passivaValue.value["2. erhaltene Anzahlungen auf Bestellungen"] + passivaValue.value["3. Verbindlichkeiten aus Lieferungen und Leistungen"] + passivaValue.value["4. Verbindlichkeiten gegenüber Unternehmen"] + passivaValue.value["5. Verbindlichkeiten gegenüber Unternehmen aus Cashpooling"] + passivaValue.value["6. sonstige Verbindlichkeiten"];
//   LiquideMittel.value = bilanzValue.value["IV. Kassabestand, Guthaben bei Kreditinstituten"]
// }

function Verschuldungsdauer() {
  // Extrahiere die relevanten Werte aus den Objekten
  let fremdkapital = ref(passivaValue.value["D. Verbindlichkeiten"]);
  let liquideMittel = ref(bilanzValue.value["IV. Kassabestand, Guthaben bei Kreditinstituten"]);
  let jahresueberschuss = ref(guvValue.value["18. Jahresüberschuss"]);
  let abschreibungen = ref(guvValue.value["7. Abschreibungen auf immaterielle Gegenstände"]);
  let umlaufvermoegen = ref(bilanzValue.value["B. Umlaufvermögen"]);
  let kurzfristigeVerbindlichkeiten = ref(passivaValue.value["D. Verbindlichkeiten"]);  // Gesamte Verbindlichkeiten als Annahme

  // console.log(fremdkapital, liquideMittel, jahresueberschuss, abschreibungen, umlaufvermoegen, kurzfristigeVerbindlichkeiten);

  // Berechnung des Working Capital
  workingCapital.value = umlaufvermoegen.value - kurzfristigeVerbindlichkeiten.value;

  // Berechnung des Cash Flow
  cashFlow.value = jahresueberschuss.value + abschreibungen.value + workingCapital.value;

  // Berechnung der fiktiven Verschuldungsdauer
  fiktiveVerschuldungsDauer.value = ((fremdkapital.value - liquideMittel.value) / cashFlow.value);

  // console.log(`Die fiktive Verschuldungsdauer beträgt ${fiktiveVerschuldungsDauer.value} Jahre.`);

  if (fiktiveVerschuldungsDauer.value < 3) {
    noten3.value = 1;
  }
  else if (fiktiveVerschuldungsDauer.value < 5) {
    noten3.value = 2;
  }
  else if (fiktiveVerschuldungsDauer.value <= 10) {
    noten3.value = 3;
  }
  else if (fiktiveVerschuldungsDauer.value <= 15) {
    noten3.value = 4;
  }
  else {
    noten3.value = 5;
  }

}



function betriebsErfolg() {
  Erfolg.value = guvValue.value["1. Umsatzerlöse"] + guvValue.value["5. Aufwendungen für Material"] + guvValue.value["6. Personalaufwand"] + guvValue.value["8. sonstige betriebliche Aufwendungen"]

  EbitQuote.value = (Erfolg.value * 100 / guvValue.value["1. Umsatzerlöse"]).toFixed(2);


  if (EbitQuote.value > 8) {
    noten2.value = 1;
  }
  else if (EbitQuote.value > 6) {
    noten2.value = 2;
  }
  else if (EbitQuote.value > 4) {
    noten2.value = 3;
  }
  else if (EbitQuote.value > 2) {
    noten2.value = 4;
  }
  else {
    noten2.value = 5;
  }
}

function berechnen() {
  betriebsErfolg();
  eigenKapital();
  durchSchnitt();
  Verschuldungsdauer();
  CashFlowQuoteBerechnen();
}

</script>

<template>
  <div class="flex gap-x-5">
    <!--
    <div class="h-20">{{ eigenkapitalQuote }} Note: {{ noten }}</div>
    <div class="h-20">{{EbitQuote}} Note: {{ noten2 }}</div>
    <div class="h-20">Durchschnittsnote: {{ (noten + noten2)/2 }}</div>
    -->
    <div class="flex-grow inline-block align-top mr-4">
      <button :class="activate2019" @click="
        changeYear(2), berechnen();
      activate2019 = 'active';
      activate2020 = '';
      activate2021 = '';
      " class="bg-slate-500 py-3 my-5 mx-3 rounded-lg px-7 text-white font-bold">
        2019
      </button>
      <button :class="activate2020" @click="
        changeYear(1), berechnen();
      activate2020 = 'active';
      activate2019 = '';
      activate2021 = '';
      " class="bg-slate-500 py-3 my-5 mx-3 rounded-lg px-7 text-white font-bold">
        2020
      </button>
      <button :class="activate2021" @click="
        changeYear(0), berechnen();
      activate2021 = 'active';
      activate2020 = '';
      activate2019 = '';
      " class="bg-slate-500 py-3 my-5 mx-3 rounded-lg px-7 text-white font-bold">
        2021
      </button>
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
                    value.toLocaleString("de-DE", { minimumFractionDigits: 2 })
                  }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex-grow inline-block align-top mr-4">
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
                    value.toLocaleString("de-DE", { minimumFractionDigits: 2 })
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
                    value.toLocaleString("de-DE", { minimumFractionDigits: 2 })
                  }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
p {
  display: inline-block;
}

.active {
  color: red;
}
</style>
