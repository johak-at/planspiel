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

let props = ["id", "created_at"];
props.forEach((prop) => {
  delete bilanzValue[prop];
  delete guvValue[prop];
});
</script>

<template>
  <div class="flex flex-row gap-x-10">
    <table class="border border-slate-500">
      <thead>
        <tr class="border-slate-500 font-bold text-center">
          Bilanz
        </tr>
        <tr>
          <th class="border border-slate-500">Bezeichnung</th>
          <th class="border border-slate-500">Betrag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in bilanzValue">
          <td class="border border-slate-500">{{ key }}</td>
          <td class="border border-slate-500">
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

    <table class="border border-slate-500">
      <thead class="border border-slate-500">
        <tr class="border border-slate-500 font-bold text-center">
          GuV
        </tr>
        <tr>
          <th class="border border-slate-500">Bezeichnung</th>
          <th class="border border-slate-500">Betrag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in guvValue">
          <td class="border border-slate-500">{{ key }}</td>
          <td class="border border-slate-500">
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
</template>

<style>
* {
}
p {
  display: inline-block;
}
</style>
