<template>
  <NuxtLayout>
    <div>
      <h1 class="text-6xl font-black">
        {{ lesson?.title }}
      </h1>
      <div>{{ lesson?.description }}</div>
      <div v-if="lesson?.id">
        <video v-if="video?.data?.video_url" controls>
          <source :src="video?.data?.video_url">
        </video>
        <div v-else class="text-gray-400">
          Video unavailable
        </div>
      </div>
      <BackButton />
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const route = useRoute()

const { slug } = route.params
const supabase = useSupabaseClient()

const lesson = ref()
const video = ref()

const getLessonDetails = async () => {
  return await supabase
    .from('component_testing_basics')
    .select('title, description, id')
    .eq('slug', slug)
    .single()
}

const getVideoLink = async (id: any) => {
  return await supabase
    .from('component_testing_basics_premium')
    .select('video_url')
    .eq('id', id)
    .single()
}

const fetchLesson = async () => {
  const lessonDetails = await getLessonDetails()
  lesson.value = lessonDetails.data
  video.value = await getVideoLink(lessonDetails.data?.id)
}

onMounted(() => {
  fetchLesson()
})

</script>
