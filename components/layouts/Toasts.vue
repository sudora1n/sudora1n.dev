<script setup lang="ts">
const toastStore = useToastsStore();
</script>

<template>
  <div class="toast toast-top toast-end">
    <TransitionGroup name="toast-fade">
      <div
        v-for="toast in toastStore.toasts"
        :key="toast.id"
        :class="toast.type"
        class="alert"
      >
        <Toast><span v-text="toast.message" /></Toast>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-fade-enter-active {
  transition: all 0.3s ease-out;
}

.toast-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
