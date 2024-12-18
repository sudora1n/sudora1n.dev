<script setup lang="ts">
    const props = defineProps({
        value: {
            type: String,
            required: true
        }
    })

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(props.value)
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
                <button
                    @click="CopyToClipboard()"
                    class="absolute btn btn-sm btn-square btn-ghost top-1 right-1 bg-neutral bg-opacity-80"
                >
                    <Icon class="text-neutral-content" name="material-symbols:content-copy-outline-rounded" />
                </button>
            </div>
        </div>
    </div>
</template>