<script setup lang="ts">
    const props = defineProps({
        value: {
            type: String,
            required: true
        }
    })

    const toastStore = useToastsStore()

    let status = ref<"copy" | "copied">("copy")
    const duration = 3000

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(props.value)

        Toast()

        status.value = "copied"
        setTimeout(() => {
            status.value = "copy"
        }, duration)
    }

    const Toast = () => {
        toastStore.addToast(
            `
                ${props.value.length > 24 ? props.value.slice(0, 24) + "..." : props.value} 
                successfully copied!
            `, 
            "alert-info", 
            duration
        )
    }
</script>

<template>
    <div class="flex w-full justify-center">
        <div class="h-full">
            <div class="relative">
                <input 
                    type="text" 
                    :value="props.value" 
                    class="w-full p-2 pr-10 bg-neutral-content ring-neutral ring-2 rounded-lg"
                    disabled
                />
                <div class="absolute top-1 right-1">
                    <div class="lg:tooltip" :data-tip="$t(`index.donate.tooltip.${status}`)">
                        <button
                            @click="CopyToClipboard()"
                            class="btn btn-sm btn-square btn-ghost bg-neutral bg-opacity-80"
                        >
                            <Icon v-if="status === 'copy'" class="text-neutral-content" name="material-symbols:content-copy-outline-rounded" />
                            <Icon v-else class="text-neutral-content" name="clarity:success-standard-line" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
