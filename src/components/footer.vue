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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 4rem;
        min-width: 100%;
        display: grid;
    }

    .footer-container {
        grid-template-columns: 1fr;
        grid-template-rows: 2rem 2rem;
        place-items: center;
        min-height: 4rem;
        min-width: 100%;
        padding: 0 2rem 0 2rem;
        display: grid;
    }
</style>