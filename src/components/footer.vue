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
            <Text>
                Copyright © 2024
            </Text>
            <Social/>
        </Container>
    </footer>
</template>

<style scoped lang="scss">
    ._footer {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 4rem;
        min-width: 100%;
        display: grid;
    }

    ._footer_container {
        grid-template-columns: 1fr;
        grid-template-rows: 2rem 2rem;
        place-items: center;
        min-height: 4rem;
        min-width: 100%;
        padding: 0 2rem 0 2rem;
        display: grid;
    }
</style>