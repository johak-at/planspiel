import { defineStore } from 'pinia'
import { ref } from 'vue'



export const useStore = defineStore(
    'store',
    () => {
        const supabase = useSupabaseClient();
        const name = ref('Bob')
        const bilanzen = ref(null)
        const daisyTheme = ref('cyberpunk')
        async function loadBilanzen() {
            const res = await supabase.from("bilanzen").select("*");
            bilanzen.value = res.data;
        }
        return { name, bilanzen, daisyTheme, loadBilanzen }
    },
    {
        persist: true
    }
)