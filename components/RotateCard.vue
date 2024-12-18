<script setup lang="ts">
    const isOpen = ref(false)
</script>

<script lang="ts">
    export default {
        props: ["service"]
    }
</script>

<template>
    <div class="card-container" :class="{ flipped: isOpen }">
        <div class="card donate-card front">
            <div class="card-body">
                <h2 class="card-title">{{ $t("donate.card.title") }} {{ service }}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button @click="isOpen = true" class="btn btn-primary">{{ $t("donate.card.button") }}</button>
                </div>
            </div>
        </div>
  
        <div class="card donate-card back">
            <div class="card-body">
                <h2 class="card-title">Thank you!</h2>
                <div class="flex">
                    <QR class="w-full h-4/6" site="https://www.tinkoff.ru/rm/doroshin.kirill2/1QkT83950"></QR>
                    <p></p>
                </div>
                <div class="card-actions justify-end">
                    <button @click="isOpen = false" class="btn btn-secondary">Back</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="postcss">
    .donate-card {
        @apply card absolute w-full h-full transition-transform ease-in-out duration-500 bg-base-100 bg-opacity-25;
        backface-visibility: hidden;
        transform-style: preserve-3d;
    }

    .card.back {
        transform: rotateY(180deg);
    }

    .card-container {
        @apply relative m-auto h-80 w-72;
    }

    .card-container.flipped .card.front {
        transform: rotateY(180deg);
    }

    .card-container.flipped .card.back {
        transform: rotateY(360deg);
    }
</style>