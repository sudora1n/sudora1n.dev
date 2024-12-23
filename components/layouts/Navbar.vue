<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locales, setLocale } = useI18n()
</script>

<template>
  <header class="navbar fixed z-50 bg-base-100 backdrop-blur-xl bg-opacity-25">
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
          <li v-for="locale in locales" :key="locale.code" class="space-x-1">
            <button
              class="flex justify-between"
              @click="setLocale(locale.code)"
            >
              <p v-text="$t(`langs.${locale.code}.name`)" />
              <Icon
                class="inline-block h-7 w-7"
                :name="$t(`langs.${locale.code}.icon`)"
              />
            </button>
          </li>
        </ul>
      </div>

      <button class="btn btn-square btn-ghost">
        <Icon class="inline-block h-7 w-7" name="mdi:dots-horizontal" />
      </button>
    </div>
  </header>
</template>
