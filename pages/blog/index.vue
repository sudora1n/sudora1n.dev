<script setup lang="ts">
import list from "~/public/blog/list.json";

useHead({
  title: "sudora1n.dev - Blog",
  meta: [
    {
      name: "description",
      content: "My amazing site.",
    },
  ],
});

definePageMeta({
  layout: "blog",
});
</script>

<template>
  <div class="flex justify-center min-h-screen">
    <div
      class="flex flex-col justify-center items-center lg:flex-row mt-24 my-6"
    >
      <div class="flex justify-center">
        <div
          class="grid grid-cols-1 gap-8 w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12"
        >
          <div
            v-for="article in list"
            :key="article.fileName"
            class="card bg-base-200 bg-opacity-35 w-full shadow-xl"
          >
            <figure v-if="article.matter.img" class="">
              <NuxtLink :to="`/blog/${article.fileName}`">
                <img
                  :src="article.matter.img"
                  :alt="article.matter.title + ' image'"
                />
              </NuxtLink>
            </figure>
            <div class="card-body">
              <h2 class="card-title text-3xl" v-text="article.matter.title" />
              <p v-text="article.matter.description" />
              <div class="card-actions justify-end">
                <NuxtLink
                  :to="`/blog/${article.fileName}`"
                  class="btn btn-outline font-bold"
                  v-text="$t('blog.read')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
