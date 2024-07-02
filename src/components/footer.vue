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
    <footer class="__footer">
        <Container class="__footer_container" :class="props.class">
            <Text class="__footer_copyright">
                Copyright © 2024
            </Text>
            <Social/>
        </Container>
    </footer>
</template>

<style lang="scss">
    .__footer {
        @apply flex flex-row justify-center items-center w-full h-16 px-2;
    }

    .__footer_container {
        @apply flex flex-col justify-between items-center w-full h-16 px-2 container;
    }

    .__footer_copyright {
        @apply flex flex-row justify-center items-center w-full h-8 px-2;
    }
</style>