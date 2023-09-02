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
    props.forEach(prop => {
        delete bilanzValue[prop];
        delete guvValue[prop];
    });

</script>

<template>
    <div class="flex flex-row gap-x-10">
        <table>
        <thead>
            <tr>
                <th>Bilanz</th>
            </tr>
            <tr>
                <th>Bezeichnung</th>
                <th>Betrag</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in bilanzValue">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </tbody>
    </table>

    <table>
        <thead>
            <tr>
                GuV
            </tr>
            <tr>
                <th>Bezeichnung</th>
                <th>Betrag</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in guvValue">
                <td>{{ key }}</td>
                <td>{{ value }}</td>
            </tr>
        </tbody>
    </table>
</div>
    


</template>

<style>
*{
  outline-width: 1px;
  outline-style: solid;
  outline-color: red;
}
</style>