<script setup lang="ts">
import markdownit from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

/*
const format = (item: string): string => {
    return `
            <div class="mockup-code bg-primary bg-opacity-75 text-primary-content max-w-max">${
                item
                .split("\n")
                .filter((line) => line.trim() !== "")
                .map(
                (item) =>
                    `<pre data-prefix="$"><code>${item}</code></pre>`,
                )
                .join("")
            }</div>
        `.trim();
}

const md: markdownit = new markdownit({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            try {
                console.log(format(hljs.highlight(str, { language: lang, ignoreIllegals: true }).value))
                return format(hljs.highlight(str, { language: lang, ignoreIllegals: true }).value);
            } catch (__) {}
        }
        console.log(format(md.utils.escapeHtml(str)));
        return format(md.utils.escapeHtml(str));
    },
    typographer: true,
    linkify: true,
    breaks: true,
});
*/

const md: markdownit = new markdownit({
    typographer: true,
    linkify: true,
    breaks: true,
    highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
})
</script>

<template>
    <span id="markdown-bodyz" class="prose prose-zinc" v-html="md.render(props.content)" />
</template>

<style lang="postcss">
    #markdown-body {
        a {
            @apply link link-hover;
        };
        h1 {
            @apply text-2xl font-bold;
        };
        table {
            @apply table bg-primary text-primary-content;
        };
        img, svg {
            @apply w-5/12;
        }
    }
</style>