<script setup lang="ts">
    import Container from "./container.vue";

    interface HeaderProps {
        class?: string
    }

    const props = defineProps<HeaderProps>();
</script>

<template>
    <Container class="header">
        <Container class="header-container" :class="props.class">
            <slot/>
        </Container>
    </Container>
</template>

<style scoped lang="scss">
    .header {
        @apply flex flex-col justify-center items-center w-full h-16;
    }

    .header-container {
        @apply flex flex-col justify-center items-center w-full h-16 gap-2;
    }
</style>