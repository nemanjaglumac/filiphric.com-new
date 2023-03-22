<template>
  <button @click="router.back()">
    Go back
  </button>
</template>
<script setup lang="ts">
const router = useRouter()
</script>
