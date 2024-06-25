<script setup lang="ts">
    interface ImageProps {
        class?: string
        src?: string
    }

    const props = defineProps<ImageProps>();
</script>

<template>
        <NuxtImg class="image" :src="props.src" :class="props.class"/>
</template>

<style scoped lang="scss">
    .image {

    }
</style>