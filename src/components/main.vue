<script setup lang="ts">
    import Container from "./container.vue";

    interface MainProps {
        class?: string
    }

    const props = defineProps<MainProps>();
</script>

<template>
    <main class="_main">
        <Container class="_main_container" :class="props.class">
            <slot/>
        </Container>
    </main>
</template>

<style scoped lang="scss">
    ._main {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
    }

    ._main_container {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        max-height: 100%;
        max-width: 80rem;
        padding: 0 1rem 0 1rem;
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>