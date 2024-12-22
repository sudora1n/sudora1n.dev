<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const toastStore = useToastsStore();
</script>

<template>
  <div class="flex flex-col min-h-screen backdrop-blur-3xl">
    <header class="navbar bg-base-100 static backdrop-blur-xl bg-opacity-25">
      <div class="flex-1">
        <NuxtLink class="btn btn-ghost text-xl" to="/">sudora1n.dev</NuxtLink>
      </div>
      <div class="flex-none space-x-1">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-square btn-ghost">
            <Icon class="inline-block h-7 w-7" name="prime:language" />
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content bg-base-100 bg-opacity-25 rounded-box z-[1] mt-4 w-52 p-2 shadow"
          >
            <li v-for="locale in locales" :key="locale.code" class="space-x-1">
              <NuxtLink
                class="flex justify-between"
                :to="switchLocalePath(locale.code)"
              >
                <p v-text="$t(`langs.${locale.code}.name`)" />
                <Icon
                  class="inline-block h-7 w-7"
                  :name="$t(`langs.${locale.code}.icon`)"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <button class="btn btn-square btn-ghost">
          <Icon class="inline-block h-7 w-7" name="mdi:dots-horizontal" />
        </button>
      </div>
    </header>

    <main class="flex flex-1 flex-col">
      <NuxtPage />
    </main>

    <!--<footer class="flex-col ml-1">sudora1n.dev</footer>-->
  </div>
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
