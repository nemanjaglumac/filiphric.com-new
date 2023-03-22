<template>
  <NuxtLayout>
    <h1 class="text-6xl font-black">
      {{ data?.title }}
    </h1>
    <div>{{ data?.description }}</div>
    <button @click="router.back()">
      Go back
    </button>
    <video controls>
      <source src="https://camcynysqlkdyirumslx.supabase.co/storage/v1/object/public/api-testing-course/01_vytvorenie_testu.mov?t=2023-03-21T15%3A06%3A13.316Z" type="video/webm">
    </video>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { slug } = route.params
const supabase = useSupabaseClient()

const { data } = await supabase
  .from('testing_api')
  .select('title, description')
  .eq('slug', slug)
  .single()

</script>
