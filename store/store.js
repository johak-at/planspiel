import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
    'store',
    () => {
        const name = ref('Bob')
        const daisyTheme = ref('dark')
        return { name, daisyTheme }
    },
    {
        persist: true
    }
)