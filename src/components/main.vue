<script setup lang="ts">
    import Container from "./container.vue";

    interface MainProps {
        class?: string
    }

    const props = defineProps<MainProps>();
</script>

<template>
    <Container class="main">
        <Container class="main-container" :class="props.class">
            <slot/>
        </Container>
    </Container>
</template>

<style scoped lang="scss">
    .main {
        @apply flex flex-col justify-center items-center w-full h-full;
    }

    .main-container {
        @apply flex flex-col justify-center items-center w-full h-full;
    }
</style>