<script setup lang="ts">
import list from "~/public/blog/list.json";

const route = useRoute();
</script>

<template>
  <div
    class="hidden lg:flex flex-col fixed left-[5%] top-1/4 transform -translate-y-1/4 bg-primary bg-opacity-30 p-8 rounded-lg ring-2 ring-primary w-fit"
  >
    <h1 class="font-bold text-3xl mb-4" v-text="$t('blog.nav.posts')" />
    <ul class="space-y-1">
      <li v-for="article in list" :key="article.fileName" class="text-lg">
        <NuxtLink
          :to="`/blog/${article.fileName}`"
          class="link link-hover text-base italic"
          v-text="article.matter.title"
        />
      </li>
    </ul>
    <NuxtLink
      v-if="route.params.slug"
      class="btn btn-ghost justify-start"
      to="/blog/"
    >
      <Icon name="material-symbols:arrow-back" />
      {{ $t("blog.back") }}
    </NuxtLink>
  </div>
</template>
