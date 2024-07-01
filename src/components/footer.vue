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
    <footer class="_footer">
        <Container class="_footer_container" :class="props.class">
            <Text class="_footer_copyright">
                Copyright © 2024
            </Text>
            <Social/>
        </Container>
    </footer>
</template>

<style scoped lang="scss">
    ._footer {
        @apply flex flex-row justify-center items-center w-full h-16 px-2;
    }

    ._footer_container {
        @apply container flex flex-col justify-between items-center w-full h-16 px-2;
    }

    ._footer_copyright {
        @apply flex flex-row justify-center items-center w-full h-8 px-2;
    }
</style>