import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore(
  "store",
  () => {
    const supabase = useSupabaseClient();
    const name = ref("Bob");
    const bilanzen = ref(null);
    const passiva = ref(null);
    const GuVs = ref(null);
    const user = ref(null);
    const daisyTheme = ref("synthwave");
    async function loadBilanzen() {
      const res = await supabase.from("Aktiva").select("*");
      bilanzen.value = res.data;
    }

    async function loadPassiva() {
      const res = await supabase.from("Passiva").select("*");
      passiva.value = res.data;
    }

    async function loadUser() {
      const res = await supabase.from("User").select("*");
      user.value = res.data;
    }

    async function loadGuVs() {
      const res = await supabase.from("GuVs").select("*");
      GuVs.value = res.data;
    }
    return {
      name,
      bilanzen,
      GuVs,
      passiva,
      daisyTheme,
      user,
      loadBilanzen,
      loadGuVs,
      loadPassiva,
      loadUser,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);
