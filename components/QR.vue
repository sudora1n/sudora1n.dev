<script setup lang="ts">
import QRCodeStyling from "qr-code-styling";

const qrCode = ref<HTMLElement | undefined>(undefined);

const props = defineProps({
  site: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const qrCodeStyling = new QRCodeStyling({
  type: "svg",
  data: props.site,
  image: props.logo,
  dotsOptions: {
    color: "#000",
    type: "extra-rounded",
  },
  backgroundOptions: {
    color: "transparent",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
});

onMounted(() => {
  qrCodeStyling.append(qrCode.value);
});
</script>

<template>
  <div id="qrcode-container">
    <div ref="qrCode" class="w-full h-full" />
  </div>
</template>

<style lang="postcss">
#qrcode-container {
  @apply flex justify-center items-center;
}
#qrcode-container svg {
  @apply w-full h-full scale-100;
}
</style>
