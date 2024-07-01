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
        @apply flex flex-col justify-center items-center w-full h-full px-2 flex-1;
    }

    ._main_container {
        @apply container flex flex-col justify-center items-center w-full h-full px-2 flex-1;
    }
</style>