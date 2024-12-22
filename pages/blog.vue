<script setup lang="ts">
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

watchEffect(async () => {
  blogId.value = route.query.id
  if (typeof blogId.value !== "undefined") {
    const response = await fetch(`/blog/${blogId.value}.md`);
    if (response.ok) {
      content.value = await response.text();
    };
  };
});

const content = ref("");
</script>

<template>
  <div class="flex flex-col items- min-h-screen">
    <NuxtLink v-if="typeof blogId !== 'undefined'" class="btn btn-ghost justify-start" :to="route.path">
      <Icon name="material-symbols:arrow-back" />
      {{ $t("blog.back") }}
    </NuxtLink>
    <div class="flex flex-col items-center">
      <div v-if="typeof blogId === 'undefined'">
        <h1>BLOG</h1>
        <NuxtLink class="btn btn-ghost" v-text="'test some'" to="/blog?id=some" />
      </div>
      <div v-else>
        <h1 v-text="blogId" />
        <BlogMarkdown :content />
      </div>
    </div>
  </div>
</template>
