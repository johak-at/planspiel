<script setup>
    import { useStore } from "~/store/store";
    import { storeToRefs } from "pinia";

    const bilanzen = getBilanzen();

    async function getBilanzen(){
        const store = useStore();
        const bilanzen = storeToRefs(store).bilanzen;
        await store.loadBilanzen();
        console.log(bilanzen);
        return bilanzen;
    }
</script>

<template>

</template>