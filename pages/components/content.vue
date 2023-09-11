<script setup>
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";

const store = useStore();

let bilanz = storeToRefs(store).bilanzen;
await store.loadBilanzen();
let bilanzValue = bilanz._rawValue[0];
console.log(bilanzValue);

let guv = storeToRefs(store).GuVs;
await store.loadGuVs();
let guvValue = guv._rawValue[0];
console.log(guvValue);

// Replace underscores with spaces in the keys
bilanzValue = replaceUnderscoresWithSpaces(bilanzValue);
guvValue = replaceUnderscoresWithSpaces(guvValue);

let props = ["id", "created at"];
props.forEach((prop) => {
  delete bilanzValue[prop];
  delete guvValue[prop];
});

function replaceUnderscoresWithSpaces(obj) {
  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/_/g, ' ');
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
}
</script>


<template>
  <div class="auto-row-auto gap-x-10">
    <div class="inline-block align-top mr-4">
      <table class="border border-slate-500 rounded-lg p-4 flex-1">
        <thead>
          <tr class="font-bold text-center">
            <th colspan="2" class="bg-slate-500 text-white py-2">
              Bilanz
            </th>
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

    <div class="inline-block align-top">
      <table class="border border-slate-500 rounded-lg p-4 flex-1">
        <thead>
          <tr class="font-bold text-center">
            <th colspan="2" class="bg-slate-500 text-white py-2">
              GuV
            </th>
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
</style>
