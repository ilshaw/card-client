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
        @apply flex w-full h-full;
    }

    .main-container {
        @apply flex w-full h-full px-4;
    }
</style>