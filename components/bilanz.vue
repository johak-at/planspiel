<script setup>
const props = defineProps({
    bilanzValue: Object,
    passivaValue: Object
});
</script>

<template>
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
</template>