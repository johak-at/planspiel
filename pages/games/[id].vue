<template>
  <!--
    <div v-if="validId">
      <span>Game ID: {{ gameId }}</span>
    </div>
  -->

  <div v-if="!validId">
    <span>Redirecting to main page...</span>
  </div>

  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-row">
      <div class="w-[10%]">
        <label for="my-drawer" class="btn drawer-button hover:bg-gray-700 font-bold bg-black text-white">Slide
          öffnen</label>
      </div>
      <Content class="w-[80%]" />
      <Ampel class="w-[10%]" />
    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-[50rem] min-h-full bg-slate-100">
        <sidebarContent class="text-black" />
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});
// In your Vue component
import supabase from "../../supabaseClient";

const route = useRoute();
const router = useRouter();
const gameId = route.params.id;
const validId = ref(false);

const validateGameId = async () => {
  const { data, error } = await supabase
    .from("games-test")
    .select()
    .match({ id: gameId })
    .single();

  if (error || !data) {
    console.error("Error or no data:", error);
    router.push("/"); // Redirect to the main page
  } else {
    // console.log("Data found:", data);
    validId.value = true;
  }
};

onMounted(validateGameId);

definePageMeta({
  middleware: ["auth"],
});
import { useStore } from "~/store/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useStore();
const name = storeToRefs(store).name;
const bilanzen = storeToRefs(store).bilanzen;

onMounted(() => {
  // Call loadBilanzen when the component is mounted
  store.loadBilanzen();
});
// console.log(bilanzen.value);

onMounted(async () => {
  await store.loadBilanzen();
});
</script>
