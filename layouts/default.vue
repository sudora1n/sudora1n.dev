<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const toastStore = useToastsStore();
</script>

<template>
  <div class="">
    <div class="">
      <header
        class="navbar fixed z-50 bg-base-100 backdrop-blur-xl bg-opacity-25"
      >
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
              <li
                v-for="locale in locales"
                :key="locale.code"
                class="space-x-1"
              >
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

      <main>
        <NuxtPage />
      </main>

      <footer class="footer bg-neutral bg-opacity-95 text-neutral-content p-10">
        <nav class="">
          <h1 class="footer-title text-stone-50 text-2xl mb-3">Contacts</h1>
          <div class="flex flex-row space-x-10">
            <div>
              <a
                class="footer-link group"
                href="https://t.me/sudora1n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  class="inline-block size-6 group-hover:scale-110"
                  name="ic:baseline-telegram"
                />
                <p class="footer-elm">Telegram</p>
              </a>
              <p class="footer-desc">Telegram Messenger</p>
            </div>
            <div>
              <a
                class="footer-link group"
                href="mailto:me@sudora1n.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  class="inline-block size-6 group-hover:scale-110"
                  name="material-symbols:alternate-email"
                />
                <p class="footer-elm">Email</p>
              </a>
              <p class="footer-desc">The old fashioned way!</p>
            </div>
          </div>
        </nav>
      </footer>
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

<style scoped lang="postcss">
.footer-link {
  @apply flex flex-row items-center space-x-2;
}
.footer-elm {
  @apply font-bold link link-hover;
}
.footer-desc {
  @apply font-light text-xs indent-0.5 mt-1;
}
</style>
