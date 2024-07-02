<script setup lang="ts">
    import Image from "./image.vue";
    import Link from "./link.vue";
</script>

<template>
    <Link class="__logo" to="/">
        <Image class="__logo_image" src="/images/logo.png"/>
    </Link>
</template>

<style lang="scss">
    .__logo {
        @apply flex flex-row justify-start items-start w-40 h-8;
    }

    .__logo_image {
        @apply flex flex-row justify-start items-start w-40 h-8;
    }
</style>