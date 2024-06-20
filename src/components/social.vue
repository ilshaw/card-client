<script setup lang="ts">
    import Container from "./container.vue";
    import Link from "./link.vue";
</script>

<template>
    <Container class="social">
        <Link class="link-social" to="https://t.me/ilshaw">
            <Icon name="uil:telegram" size="1rem"/>
        </Link>
        <Link class="link-social" to="https://github.com/ilshaw">
            <Icon name="uil:github" size="1rem"/>
        </Link>
        <Link class="link-social" to="https://vk.com/ilshaw">
            <Icon name="uil:vk" size="1rem"/>
        </Link>
    </Container>
</template>

<style scoped lang="scss">
    .social {
        @apply flex flex-row justify-center items-center gap-2;
    }

    .link-social {
        @apply flex flex-col justify-center items-center;
    }
</style>