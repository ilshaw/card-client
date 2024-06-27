<script setup lang="ts">
    import Container from "./container.vue";

    interface MainProps {
        class?: string
    }

    const props = defineProps<MainProps>();
</script>

<template>
    <main class="main">
        <Container class="main-container" :class="props.class">
            <slot/>
        </Container>
    </main>
</template>

<style scoped lang="scss">
    .main {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        display: grid;
        height: 100%;
        width: 100%;
    }

    .main-container {
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>