<script setup lang="ts">
    import Container from "./container.vue";
    import Social from "./social.vue";
    import Text from "./text.vue";

    interface FooterProps {
        class?: string
    }

    const props = defineProps<FooterProps>();
</script>

<template>
    <Container class="footer">
        <Container class="footer-container" :class="props.class">
            <Text>
                Copyright © 2024
            </Text>
            <Social/>
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