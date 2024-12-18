<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex flex-grow justify-center h-screen">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-3xl">{{ props.error?.statusCode }}</h1>
        <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
