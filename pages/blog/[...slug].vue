<script setup lang="ts">
import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

definePageMeta({
  layout: "blog",
});

const route = useRoute();

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

const content = ref("");
const response = await fetch(`/blog/${route.params.slug}.md`);
if (response.ok) {
  // content.replace remove gray-matter info
  content.value = (await response.text()).replace(
    /~~~\s*[^~]*\s*~~~/g, ""
  );
}
</script>

<template>
  <div class="flex justify-center min-h-screen">
    <div
      class="flex flex-col justify-center items-center lg:flex-row mt-24 my-6"
    >
      <NuxtLink to="/blog/gitler">ZZZZ</NuxtLink>
      <div class="flex mt-8">
        <span
          class="prose prose-stone lg:prose-lg"
          v-html="md.render(content)"
        />
      </div>
    </div>
  </div>
</template>
