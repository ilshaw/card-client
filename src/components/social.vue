<script setup lang="ts">
    import Container from "./container.vue";
    import Link from "./link.vue";
</script>

<template>
    <Container class="__social">
        <Link class="__social_link" external to="https://t.me/ilshaw">
            <Icon class="__social_link_icon" name="uil:telegram"/>
        </Link>
        <Link class="__social_link" external to="https://github.com/ilshaw">
            <Icon class="__social_link_icon" name="uil:github"/>
        </Link>
        <Link class="__social_link" external to="https://vk.com/ilshaw">
            <Icon class="__social_link_icon" name="uil:vk"/>
        </Link>
    </Container>
</template>

<style lang="scss">
    .__social {
        @apply flex flex-row justify-center items-center w-full h-8 px-2;
    }

    .__social_link {
        @apply flex flex-row justify-center items-center w-8 h-8;
    }

    .__social_link_icon {
        @apply flex flex-row justify-start items-start w-4 h-4;
    }
</style>