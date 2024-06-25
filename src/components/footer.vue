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
    <footer class="footer">
        <Container class="footer-container" :class="props.class">
            <Text class="footer-container-copyright">
                Copyright © 2024
            </Text>
            <Social class="footer-container-social"/>
        </Container>
    </footer>
</template>

<style scoped lang="scss">
    .footer {
        @apply flex flex-col justify-center items-center h-16;
    }

    .footer-container {
        @apply flex flex-col justify-center items-center h-16;
    }

    .footer-container-copyright {
        @apply flex flex-col justify-center items-center h-8;
    }

    .footer-container-social {

    }
</style>