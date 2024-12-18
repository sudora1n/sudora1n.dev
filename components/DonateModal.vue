<script setup lang="ts">
    import type { ParsedContent } from '@nuxt/content';

    const modal = ref<HTMLDialogElement | null>(null)

    const activeTab = ref("")
    const data = ref<Data[]>([])

    interface Data {
        title: string
        details: string | number
        url: string
        logo: string
    }
    Math.ceil(data.value.length)

    onMounted(async () => {
        const result = await queryContent("/data/donate").findOne() as ParsedContent
        data.value = result.body as unknown as Data[]

        const len = data.value.length
        if (len > 0) {
            if (len & 1) {
                activeTab.value = data.value[Math.floor(len/2)].title
            } else {
                activeTab.value = data.value[0].title
            }
        }
    })
</script>

<template>
    <button class="btn" @click="modal?.showModal()">open modal</button>

    <dialog ref="modal" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    <Icon name="material-symbols:close-rounded" />
                </button>
            </form>
            <h3 class="text-center text-lg font-bold mb-2">Donate modal</h3>
            <div role="tablist" class="tabs tabs-bordered">
                <button
                    v-for="item in data"
                    role="tab"
                    class="tab"
                    :class="{ 'tab-active': activeTab === item.title }"
                    @click="activeTab = item.title"
                    v-text="item.title"
                />
            </div>
            <div class="mt-6">
                <div v-for="item in data">
                    <div v-if="activeTab === item.title">
                        <div class="flex flex-col text-center space-y-6">
                            <h1 class="text-base font-semibold">{{ $t("index.donate.QR") }}</h1>
                            <div class="flex justify-center">
                                <div class="flex w-5/12 bg-neutral-content p-2 ring-offset-base-100 rounded-lg ring ring-neutral">
                                    <QR class="m-0.5" :site="item.url" :logo="item.logo" />
                                </div>
                            </div>
                            <div class="divider select-none">{{ $t("index.donate.or") }}</div>
                            <div class="flex flex-col justify-center space-y-4">
                                <h1 class="text-base font-medium">{{ $t("index.donate.details") }}</h1>
                                <InputWithCopy :value="item.details.toString()" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>
