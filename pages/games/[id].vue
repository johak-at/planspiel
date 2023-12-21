<template>
  <div v-if="validId">
    <span>Game ID: {{ gameId }}</span>
    <!-- Your game details here -->
  </div>
  <div v-else>
    <span>Redirecting to main page...</span>
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
    console.log("Data found:", data);
    validId.value = true;
  }
};

onMounted(validateGameId);
</script>
