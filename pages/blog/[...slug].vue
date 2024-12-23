<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="flex justify-center min-h-screen">
    <div
      class="flex flex-col justify-center items-center lg:flex-row max-w-screen-md"
    >
      <p>{{ route.params.slug }}</p>
      <p>ZXCUAZ</p>
    </div>
  </div>
</template>
