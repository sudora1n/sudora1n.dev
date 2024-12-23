<script setup lang="ts">
import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
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

const route = useRoute();
const blogId = ref(route.query.id);

const content = ref("");

const md: markdownit = new markdownit({
  typographer: true,
  linkify: true,
  breaks: true,
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return "";
  },
});

watchEffect(async () => {
  blogId.value = route.query.id;
  if (blogId.value) {
    const response = await fetch(`/blog/${blogId.value}.md`);
    if (response.ok) {
      content.value = await response.text();
    }
  }
});
</script>

<template>
  <div class="flex justify-center min-h-screen">
    <div
      class="flex flex-col justify-center items-center lg:flex-row mt-24 my-6"
    >
      <div v-if="blogId" class="flex mt-8">
        <span
          class="prose prose-stone lg:prose-lg"
          v-html="
            md.render(
              content.replace(
                /~~~\s*[^~]*\s*~~~/g,
                '' /* content.replace remove gray-matter info */,
              ),
            )
          "
        />
      </div>
      <div v-else class="flex justify-center">
        <div
          class="grid grid-cols-1 gap-8 w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12"
        >
          <div
            v-for="article in list"
            :key="article.fileName"
            class="card bg-base-200 bg-opacity-35 w-full shadow-xl"
          >
            <figure v-if="article.matter.img" class="">
              <NuxtLink :to="`/blog?id=${article.fileName}`">
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
                  v-text="$t('blog.read')"
                  :to="`/blog?id=${article.fileName}`"
                  class="btn btn-outline font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden lg:flex flex-col fixed left-[5%] top-1/4 transform -translate-y-1/4 bg-primary bg-opacity-30 p-8 rounded-lg ring-2 ring-primary w-fit"
      >
        <h1 class="font-bold text-3xl mb-4" v-text="$t('blog.nav.posts')" />
        <ul class="space-y-1">
          <li v-for="article in list" :key="article.fileName" class="text-lg">
            <NuxtLink
              :to="`/blog?id=${article.fileName}`"
              class="link link-hover text-base italic"
              v-text="article.matter.title"
            />
          </li>
        </ul>
        <NuxtLink
          v-if="blogId"
          class="btn btn-ghost justify-start"
          :to="route.path"
        >
          <Icon name="material-symbols:arrow-back" />
          {{ $t("blog.back") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
