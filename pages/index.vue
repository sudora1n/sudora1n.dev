<script setup lang="ts">
useHead({
  title: "sudora1n.dev - Main",
  meta: [
    {
      name: "description",
      content: "My amazing site.",
    },
  ],
});

const modalRef = ref<HTMLDialogElement | null>(null);
</script>

<template>
  <div>
    <div class="flex justify-center min-h-screen">
      <div
        class="flex flex-col justify-center items-center lg:flex-row max-w-screen-md"
      >
        <div class="avatar w-6/12">
          <div
            class="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2"
          >
            <img src="/img/avatar.jpg" />
          </div>
        </div>
        <div class="p-10 w-full text-center lg:text-left">
          <h1
            class="text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-4 lg:mb-6 zzz"
            v-text="$t('index.main.title')"
          />
          <p
            class="text-sm sm:text-base lg:text-lg font-semibold whitespace-pre-line"
          >
            {{ $t("index.main.subtitle") }}
            <NuxtLink
              class="link link-hover"
              to="https://t.me/tginfoen"
              target="_blank"
              >Tginfo</NuxtLink
            >
          </p>
          <div class="mt-4 space-x-2">
            <button
              class="btn btn-accent"
              @click="modalRef?.showModal()"
              v-text="$t('index.donate.button')"
            />
            <NuxtLink to="/blog" class="btn btn-secondary">Blog</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <DonateModal ref="modalRef" />
  </div>
</template>
