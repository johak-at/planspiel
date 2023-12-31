<script setup>
import { Icon } from "@iconify/vue";

const supabase = useSupabaseClient();
const client = useSupabaseAuthClient();
const user = ref(null);
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account.";
  } catch (error) {
    errorMsg.value = error.message;
  }
}

//functon to load uid from supabase current user

// async function loadUser() {
//   const res = await supabase.from("User").select("*");
//   user.value = res.data;
//   console.log(user.value[0]);
// }

//create a function that uploads data to the database and then calls the loadUser function

// async function uploadData() {
//   try {
//     // Check if a user is authenticated
//     const currentUser = supabase.auth.user();
//     if (!currentUser) {
//       errorMsg.value = "User not authenticated.";
//       return;
//     }

//     // Data to insert, including the UID
//     const dataToInsert = {
//       id: currentUser.id, // Use the UID of the currently authenticated user
//       // Other data fields you want to insert
//     };

//     // Insert data into the 'User' table
//     const { data, error } = await supabase.from("User").insert([dataToInsert]);
//     if (error) throw error;

//     // After successfully uploading data, reload user data
//     await loadUser();

//     console.log("Data uploaded successfully.");
//   } catch (error) {
//     console.error("Error uploading data:", error.message);
//   }
// }
let showPassword = ref(false);
</script>

<template>
  <div class="h-[100vh] flex relative">
    <div class="flex-1 flex items-center justify-center">
      <div class="absolute w-[60rem] z-0">
        <h1 class="text-black font-bold text-center text-4xl custom-font">Simulator zum Unternehmer!</h1>
        <img src="../assets/businessmen.svg" alt="Background" />
      </div>
      <form @submit.prevent="signUp"
        class="flex flex-col px-16 py-4 rounded-md shadow-lg max-w-screen-sm w-full bg-white z-10 mt-12">
        <div class="flex items-center justify-center">
          <img class="w-20 rounded-lg" src="../assets/Logo.png" alt="Logo" />
        </div>
        <h2 class="text-2xl font-semibold mb-4 text-slate-700">Registrieren</h2>

        <!-- Display success message -->
        <div v-if="successMsg" class="bg-green-200 p-2 rounded-md text-green-700 mb-4">
          {{ successMsg }}
        </div>

        <!-- Display error message -->
        <div v-if="errorMsg" class="bg-red-200 p-2 rounded-md text-red-700 mb-4">
          {{ errorMsg }}
        </div>

        <div class="mb-4">
          <input v-model="email" type="email" id="email" name="email" placeholder="Email"
            class="mt-1 p-2 w-full border rounded-md bg-white text-black" />
        </div>

        <div class="relative mb-4">
          <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" name="password"
            placeholder="Passwort" class="mt-1 p-2 w-full border rounded-md bg-white text-black pr-10" />
          <button type="button" @click="showPassword = !showPassword"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 transform scale-150">
            <Icon v-if="showPassword" icon="akar-icons:eye-slashed" />
            <Icon v-else icon="akar-icons:eye" />
          </button>
        </div>

        <button type="submit" class="text-white font-semibold py-2 rounded-md bg-black hover:bg-gray-700 w-[6rem]">
          Registrieren
        </button>
        <!-- make a text in the middle saying Already have an account? Login -->
        <div class="flex items-center justify-center mt-4 text-black">
          <p class="text-sm text-black font-semibold">
            Sie haben bereits einen Account?
            <a href="/login" class="text-black font-bold hover:text-gray-600">Login</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-font {
  font-family: 'Baskerville Old Face', serif;
}
</style>