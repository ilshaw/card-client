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

    }

    ._social_link {

    }

    ._social_link_icon {

    }
</style>