<script setup lang="ts">
    import Container from "./container.vue";
    import Link from "./link.vue";
</script>

<template>
    <Container class="social">
        <Link class="social-link" external to="https://t.me/ilshaw">
            <Icon class="social-link-icon" name="uil:telegram"/>
        </Link>
        <Link class="social-link" external to="https://github.com/ilshaw">
            <Icon class="social-link-icon" name="uil:github"/>
        </Link>
        <Link class="social-link" external to="https://vk.com/ilshaw">
            <Icon class="social-link-icon" name="uil:vk"/>
        </Link>
    </Container>
</template>

<style scoped lang="scss">
    .social {
        @apply flex justify-center items-center h-8 gap-4;
    }

    .social-link {
        @apply flex justify-center items-center w-8 h-8;
    }

    .social-link-icon {
        @apply flex justify-center items-center w-4 h-4;
    }
</style>