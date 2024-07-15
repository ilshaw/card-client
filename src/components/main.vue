<script setup lang="ts">
    import Container from "./container.vue";

    interface MainProps {
        class?: string
    }

    const props = defineProps<MainProps>();
</script>

<template>
    <main class="__main">
        <Container class="__main_container" :class="props.class">
            <slot/>
        </Container>
    </main>
</template>

<style lang="scss">
    .__main {
        @apply flex flex-col justify-center items-center w-full h-full px-2 flex-1;
    }

    .__main_container {
        @apply flex flex-col justify-start items-start w-full h-full px-2 flex-1 container;
    }
</style>