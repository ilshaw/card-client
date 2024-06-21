<script setup lang="ts">
    import Image from "./image.vue";
    import Link from "./link.vue";
</script>

<template>
    <Link class="logo" to="/">
        <Image class="image-logo" src="/images/logo.png"/>
    </Link>
</template>

<style scoped lang="scss">
    .logo {
        @apply h-8;
    }

    .image-logo {
        @apply h-8;
    }
</style>