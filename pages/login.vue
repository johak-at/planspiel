<script setup>
const client = useSupabaseAuthClient();
const router = useRouter();

const email = ref("");
const password = ref(null);
const errorMsg = ref(null);

async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/profile");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
let showPassword = ref(false);
</script>
<template>
  <div class="h-[80vh] flex relative items-center justify-center">
    <div class="absolute w-[60rem] z-0 top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h1 class="text-black font-bold text-center text-4xl custom-font">Simulator zum Unternehmer!</h1>
      <img src="../assets/businessmen.svg" alt="Background" />
    </div>
    <div class="flex-1 flex items-center justify-center z-10">
      <form @submit.prevent="signIn"
        class="flex flex-col px-16 py-4 rounded-md shadow-lg max-w-screen-sm w-full bg-white">
        <div class="flex items-center justify-center">
          <img class="w-20" src="../assets/Platzhalter.png" alt="Logo" />
        </div>
        <h2 class="text-2xl font-semibold mb-4 text-slate-700">Login</h2>

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
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <i v-if="showPassword" class="fas fa-eye-slash"></i>
            <i v-else class="fas fa-eye"></i>
          </button>
        </div>

        <button type="submit" class="text-white font-semibold py-2 rounded-md bg-black hover:bg-gray-700 w-[6rem]">
          Anmelden
        </button>
        <!-- make a text in the middle saying Already have an account? Login -->
        <div class="flex items-center justify-center mt-4 text-black">
          <p class="text-sm text-black font-semibold">
            Sie haben keinen Account?
            <a href="/register" class="text-black font-bold hover:text-blue-600">Registrieren</a>
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
