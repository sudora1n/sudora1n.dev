<script setup lang="ts"> 
    useHead({
        title: "sudora1n.dev - Main",
        meta: [
            { 
                name: "description", 
                content: "My amazing site." 
            }
        ]
    })
</script>

<template>
    <div class="flex flex-1 justify-center min-h-screen flex-grow">
        <div class="flex flex-col flex-grow items-center lg:flex-row max-w-screen-md max-h-[80vh]">
            <div class="avatar w-6/12">
                <div class="ring-primary ring-offset-base-100 rounded-full ring ring-offset-2">
                    <img src="/img/avatar.jpg" />
                </div>
            </div>
            <div class="p-10 w-full">
                <h1 class="text-lg sm:text-xl lg:text-3xl font-bold mb-2 sm:mb-4 lg:mb-6 zzz" v-text="$t('index.main.title')" />
                <p class="text-sm sm:text-base lg:text-lg font-semibold whitespace-pre-line">
                    {{ $t("index.main.subtitle") }}
                    <NuxtLink class="link link-hover" to="https://t.me/tginfoen" target="_blank">Tginfo</NuxtLink>
                </p>
                <div class="mt-4 space-x-2">
                    <DonateModal />
                    <button class="btn btn-secondary">Sample</button>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer bg-neutral bg-opacity-95 text-neutral-content p-10">
        <nav class="">
            <h1 class="footer-title text-stone-50 text-2xl mb-3">Contacts</h1>
            <div class="flex flex-row space-x-10">
                <div>
                    <a class="footer-link group" href="https://t.me/sudora1n" target="_blank" rel="noopener noreferrer">
                        <Icon class="inline-block size-6 group-hover:scale-110" name="ic:baseline-telegram" />
                        <p class="footer-elm">Telegram</p>
                    </a>
                    <p class="footer-desc">Telegram Messenger</p>
                </div>
                <div>
                    <a class="footer-link group" href="mailto:me@sudora1n.dev" target="_blank" rel="noopener noreferrer">
                        <Icon class="inline-block size-6 group-hover:scale-110" name="material-symbols:alternate-email" />
                        <p class="footer-elm">Email</p>
                    </a>
                    <p class="footer-desc">The old fashioned way!</p>
                </div>
            </div>
        </nav>
    </footer>
</template>

<style lang="postcss">
    .footer-link {
        @apply flex flex-row items-center space-x-2
    }
    .footer-elm {
        @apply font-bold link link-hover
    }
    .footer-desc {
        @apply font-light text-xs indent-0.5 mt-1
    }
</style>