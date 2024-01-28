<script setup>
import { supabase } from '@/libs/supabase'
import { useAuthStore } from '@/store/auth'

const loading = ref(false)
const email = ref('')
const authStore = useAuthStore()


const signIn = async () => {
    try {
        loading.value = true
        const { error, data } = await supabase.auth.signInWithOAuth({ provider: 'facebook' })
        if (error) throw error
        authStore.signInFaceBook(data.session)
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message)
        }
    } finally {
        loading.value = false
    }
}

const signOut = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        authStore.signOutFacebook()
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}


onMounted(() => {
    console.log(authStore.user)
})
</script>

<template>
    <div>
        <Button v-if="!authStore.authentificated" label="Sign In" @click="signIn" />
        <Button v-else label="Sign Out" @click="signOut" />
    </div>
</template>