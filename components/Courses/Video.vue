<template>
  <video :id="id" controls>
    <source :src="data?.video_url">
  </video>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient()

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const { data } = await supabase
  .from('testing_api_with_cypress_premium')
  .select('video_url')
  .eq('id', props.id)
  .single()

</script>
