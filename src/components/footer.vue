<script setup lang="ts">
    import Container from "./container.vue";

    interface FooterProps {
        class?: string
    }

    const props = defineProps<FooterProps>();
</script>

<template>
    <Container class="footer">
        <Container class="footer-container" :class="props.class">
            <slot/>
        </Container>
    </Container>
</template>

<style scoped lang="scss">
    .footer {
        @apply flex flex-col justify-center items-center w-full h-16;
    }

    .footer-container {
        @apply flex flex-col justify-center items-center w-full h-16 gap-2;
    }
</style>