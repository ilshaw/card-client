<script setup lang="ts">
    import Container from "./container.vue";

    interface PageProps {
        class?: string
    }

    const props = defineProps<PageProps>();
</script>

<template>
    <Container class="page" :class="props.class">
        <slot/>
    </Container>
</template>

<style scoped lang="scss">
    .page {
        @apply flex flex-col w-full h-full;
    }
</style>