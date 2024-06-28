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
        grid-template-columns: 1fr;
        grid-template-rows: 4rem 1fr 4rem;
        place-items: center;
        display: grid;
        height: 100%;
        width: 100%;
        gap: 1rem;
    }
</style>