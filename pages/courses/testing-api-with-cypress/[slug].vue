<template>
  <NuxtLayout>
    <h1 class="text-6xl font-black">
      {{ lesson?.data?.title }}
    </h1>
    <div>{{ lesson?.data?.description }}</div>
    <CoursesVideo v-if="lesson?.data?.id" :id="lesson?.data?.id" />
    <button @click="router.back()">
      Go back
    </button>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const { slug } = route.params
const supabase = useSupabaseClient()

const lesson = ref()

const getLessonDetails = async () => {
  lesson.value = await supabase
    .from('testing_api_with_cypress')
    .select('title, description, id')
    .eq('slug', slug)
    .single()
}

onMounted(() => {
  getLessonDetails()
})

</script>
