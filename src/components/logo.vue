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
        @apply flex flex-row justify-center items-center w-40 h-8;
    }

    ._logo_image {
        @apply flex flex-row justify-center items-center w-40 h-8;
    }
</style>