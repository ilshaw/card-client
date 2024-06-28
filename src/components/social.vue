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
        grid-template-columns: 2rem 2rem 2rem;
        grid-template-rows: 2rem;
        place-items: center;
        min-height: 2rem;
        min-width: 6rem;
        display: grid;
    }

    ._social_link {
        grid-template-columns: 2rem;
        grid-template-rows: 2rem;
        place-items: center;
        min-height: 2rem;
        min-width: 2rem;
        display: grid;
    }

    ._social_link_icon {
        grid-template-columns: 1rem;
        grid-template-rows: 1rem;
        place-items: center;
        min-height: 1rem;
        min-width: 1rem;
        display: grid;
    }
</style>