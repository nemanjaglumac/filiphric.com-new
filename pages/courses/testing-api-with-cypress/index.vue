<template>
  <NuxtLayout>
    <div>This is where course will be</div>
    <div v-for="lesson in data" :key="lesson.id">
      <NuxtLink :to="'/courses/testing-api-with-cypress/' + lesson.slug">
        {{ lesson.title }}
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()

const { data } = await supabase
  .from('testing_api')
  .select('title, description, slug, id')

</script>
