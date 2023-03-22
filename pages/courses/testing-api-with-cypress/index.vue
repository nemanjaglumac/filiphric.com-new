<template>
  <NuxtLayout>
    <div class="text-5xl font-semibold">
      Chapters:
    </div>
    <div v-for="lesson in data" :key="lesson.id">
      <NuxtLink :to="'/courses/testing-api-with-cypress/' + lesson.slug">
        {{ lesson.title }}
      </NuxtLink>
      <div v-if="lesson.is_public" class="inline text-xs">
        (public)
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()

const { data } = await supabase
  .from('testing_api_with_cypress')
  .select('title, description, slug, id, is_public')

</script>
