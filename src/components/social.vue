<script setup lang="ts">
    import Container from "./container.vue";
    import Link from "./link.vue";
</script>

<template>
    <Container class="_social">
        <Link class="_social_link" external to="https://t.me/ilshaw">
            <Icon class="_social_link_icon" name="uil:telegram"/>
        </Link>
        <Link class="_social_link" external to="https://github.com/ilshaw">
            <Icon class="_social_link_icon" name="uil:github"/>
        </Link>
        <Link class="_social_link" external to="https://vk.com/ilshaw">
            <Icon class="_social_link_icon" name="uil:vk"/>
        </Link>
    </Container>
</template>

<style scoped lang="scss">
    ._social {
        @apply flex flex-row justify-center items-center w-full h-8 px-2;
    }

    ._social_link {
        @apply flex flex-row justify-center items-center w-8 h-8;
    }

    ._social_link_icon {
        @apply flex flex-row justify-center items-center w-4 h-4;
    }
</style>