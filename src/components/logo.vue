<script setup lang="ts">
    import Image from "./image.vue";
    import Link from "./link.vue";
</script>

<template>
    <Link class="_logo" to="/">
        <Image class="_logo_image" src="/images/logo.png"/>
    </Link>
</template>

<style scoped lang="scss">
    ._logo {
        grid-template-columns: 1fr;
        grid-template-rows: 2rem;
        place-items: center;
        max-height: 2rem;
        max-width: 100%;
        display: grid;
    }

    ._logo_image {
        grid-template-columns: 1fr;
        grid-template-rows: 2rem;
        place-items: center;
        max-height: 2rem;
        max-width: 100%;
        display: grid;
    }
</style>