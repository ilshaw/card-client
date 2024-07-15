<script setup lang="ts">
    interface ImageProps {
        class?: string
        src?: string
    }

    const props = defineProps<ImageProps>();
</script>

<template>
        <NuxtImg class="__image" :src="props.src" :class="props.class"/>
</template>

<style lang="scss">
    .__image {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>