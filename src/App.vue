<script setup lang='ts'>
import consola from 'consola'

import { useDataStore } from '@/store/data'
import { supabase } from '@/libs/supabase'
import { useAuthStore } from '@/store'

const dataStore = useDataStore()
const authStore = useAuthStore()

const getSupabaseSession = () => {

  const setState = (data: any) => {
    const session: any = data
    if (session && session.user) {
      authStore.signInFaceBook(data.session?.user)
      delete session.user
      dataStore.session = session
    }

  }


  supabase.auth.getSession().then(({ data }) => {
    const session: any = data?.session
    setState(session)
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    const session: any = _session
    setState(session)
  })
}

onMounted(async () => {
  await dataStore.$load({ name: 'app-data' }).catch((error: any) => consola.log(error))

  getSupabaseSession()

})

useHead({
  title: 'Bid Win | Online Items MMORPG Auctions',
  meta: [
    {
      name: 'description',
      content: 'Online Items MMORPG Auctions',
    },
  ],
})
</script>

<template>
  <div id="bar" />
  <router-view />
</template>

<style lang='scss'>
@import 'App.scss';
</style>
