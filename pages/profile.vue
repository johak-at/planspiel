<script setup>
definePageMeta({
    middleware: ['auth'],
});
const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const router = useRouter();

console.log(user.value);
async function logout() {
    try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        router.push('/login');
    } catch (error) {
        console.log(error.message);
    }
}
</script>

<template>
    <main class="h-[85vh] min-h-[55rem] text-black flex items-center justify-center">
        <div class="card flex flex-col w-[40rem] shadow-xl bg-white">
            <div class="card-body">
                <h1 class="card-title">E-Mail:</h1>
                <h2>{{ user.email }}</h2>
                <button @click="logout" type="button"
                    class="self-start btn hover:bg-gray-700 font-semibold bg-black text-white mt-6">
                    Abmelden</button>
            </div>
        </div>
    </main>
</template>
