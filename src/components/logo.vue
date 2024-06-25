<script setup lang="ts">
    import Image from "./image.vue";
    import Link from "./link.vue";
</script>

<template>
    <Link class="logo" to="/">
        <Image class="logo-image" src="/images/logo.png"/>
    </Link>
</template>

<style scoped lang="scss">
    .logo {
        @apply flex justify-center items-center h-16;
    }

    .logo-image {
        @apply flex justify-center items-center h-8;
    }
</style>