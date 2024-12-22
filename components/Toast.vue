<script setup lang="ts">
const progress = ref(0);

const interval = setInterval(() => {
  progress.value += 5;
  if (progress.value >= 100) {
    clearInterval(interval);
  }
}, 100);
</script>

<template>
  <div class="flex flex-col">
    <slot />
    <!-- <progress /> will not animate correctly in Mozilla -->
    <div class="rounded w-full h-1">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.progress-bar {
  @apply h-full bg-secondary duration-500;
  transition: width 0.5s ease;
}
</style>
