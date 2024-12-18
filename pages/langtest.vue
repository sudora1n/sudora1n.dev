<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    <p>{{ $t(`langs.${locale.code}.name`) }}</p>
    <Icon class="inline-block h-7 w-7" :name="$t(`langs.${locale.code}.icon`)" />
  </NuxtLink>
</template>
