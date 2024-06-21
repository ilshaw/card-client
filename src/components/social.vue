<script setup lang="ts">
    import Container from "./container.vue";
    import Link from "./link.vue";
</script>

<template>
    <Container class="social">
        <Link external to="https://t.me/ilshaw">
            <Icon name="uil:telegram"/>
        </Link>
        <Link external to="https://github.com/ilshaw">
            <Icon name="uil:github"/>
        </Link>
        <Link external to="https://vk.com/ilshaw">
            <Icon name="uil:vk"/>
        </Link>
    </Container>
</template>

<style scoped lang="scss">
    .social {
        @apply flex flex-row justify-center items-center gap-2;
    }
</style>