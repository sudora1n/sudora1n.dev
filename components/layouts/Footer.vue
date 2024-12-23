<template>
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
</template>

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
