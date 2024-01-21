<script setup>
import { supabase } from '@/libs/supabase'
import { onMounted, ref, toRefs } from 'vue'
import { useAuthStore } from '@/store'

const props = defineProps(['session'])
const { session } = toRefs(props)
const auth = useAuthStore()
const users = ref({})

const isLoading = ref(true)

const signInWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
            redirectTo: 'https://example.com/welcome'
        }
    })
    console.log(await supabase.auth.getUser());
}

const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error);
    }
}


onMounted(async () => {
    console.log(auth.authentificated)
    const { data, error } = await supabase.auth.getSession()
    console.log(data);
})

</script>

<template>
    <div>
        <pre>{{ users }}</pre>
    </div>
    <template v-if="!supabase.auth">
        <div>
            <Button label="SignOut" @click="signOut()" />
        </div>
    </template>
    <template v-else>
        <div>
            <Button label="Sigin with Facebook" @click="signInWithFacebook()" />
        </div>
    </template>
</template>
