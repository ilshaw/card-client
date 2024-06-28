<script setup lang="ts">
    import Container from "./container.vue";

    interface PageProps {
        class?: string
    }

    const props = defineProps<PageProps>();
</script>

<template>
    <Container class="_page" :class="props.class">
        <slot/>
    </Container>
</template>

<style scoped lang="scss">
    ._page {
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr 4rem;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        gap: 1rem;
    }
</style>