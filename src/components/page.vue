<script setup lang="ts">
    interface PageProps {
        class?: string
    }

    const props = defineProps<PageProps>();
</script>

<template>
    <UContainer class="page" :class="props.class">
        <slot/>
    </UContainer>
</template>

<style scoped lang="scss">
    .page {
        @apply flex flex-col justify-center items-center gap-4 w-full h-full;
    }
</style>