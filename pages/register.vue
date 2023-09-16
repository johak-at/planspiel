<script setup>
const client = useSupabaseAuthClient();
const email = ref('');
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp(){
    try{
        const {data, error} = await client.auth.signUp({
            email: email.value,
            password: password.value,
        });
        if (error) throw error;
        successMsg.value = 'Check your email to confirm your account.';
    } catch (error) {
        errorMsg.value = error.message
    }

}
</script>

<template>
    <div class="h-screen flex">
      <div class="flex-1 flex items-center justify-center bg-[#f1f1f1]">
        <form @submit.prevent="signUp" class="flex flex-col px-16 py-8 rounded-md shadow-lg max-w-screen-sm w-full bg-white">
          <div class="flex items-center justify-center mb-4">
            <img class="w-20" src="../pages/assets/Platzhalter.png" alt="Logo">
          </div>
          <h2 class="text-2xl font-semibold mb-4 text-slate-700">Register</h2>
          
          <!-- Display success message -->
          <div v-if="successMsg" class="bg-green-200 p-2 rounded-md text-green-700 mb-4">
            {{ successMsg }}
          </div>
  
          <!-- Display error message -->
          <div v-if="errorMsg" class="bg-red-200 p-2 rounded-md text-red-700 mb-4">
            {{ errorMsg }}
          </div>
  
          <div class="mb-4">
            <input v-model="email" type="email" id="email" name="email" placeholder="Email" class="mt-1 p-2 w-full border rounded-md bg-white text-black">
          </div>
  
          <div class="mb-4">
            <input v-model="password" type="password" id="password" name="password" placeholder="Password" class="mt-1 p-2 w-full border rounded-md bg-white text-black">
          </div>
  
          <button type="submit" class="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 w-20">
            Register
          </button>
          <!-- make a text in the middle saying Already have an account? Login -->
          <div class="flex items-center justify-center mt-4 text-black">
            <p class="text-sm text-black font-semibold">Already have an account? <a href="http://localhost:3000/login" class="text-black font-bold  hover:text-blue-600">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  </template>