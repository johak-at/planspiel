import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useStore = defineStore(
    'store',
    () => {
        const supabase = useSupabaseClient();
        const name = ref('Bob')
        const bilanzen = ref(null)
        const GuVs = ref(null)
        const daisyTheme = ref('synthwave')
        async function loadBilanzen() {
            const res = await supabase.from("bilanzen").select("*");
            bilanzen.value = res.data;
        }
        async function loadGuVs() {
            const res = await supabase.from("GuVs").select("*");
            bilanzen.value = res.data;
        }
        return { name, bilanzen, GuVs, daisyTheme, loadBilanzen, loadGuVs }
    },
    {
        persist: true
    }
)