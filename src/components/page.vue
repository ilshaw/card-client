<script setup lang="ts">
    import Container from "./container.vue";

    interface PageProps {
        class?: string
    }

    const props = defineProps<PageProps>();
</script>

<template>
    <Container class="__page" :class="props.class">
        <slot/>
    </Container>
</template>

<style lang="scss">
    .__page {
        @apply flex flex-col justify-center items-center min-w-full min-h-screen gap-2;
    }
</style>