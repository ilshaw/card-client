<script setup lang="ts">
    interface LinkProps {
        external?: boolean
        class?: string
        to?: string
    }

    const props = defineProps<LinkProps>();
</script>

<template>
    <NuxtLink class="__link" :to="props.to" :class="props.class" :external="props.external">
        <slot/>
    </NuxtLink>
</template>

<style lang="scss">
    .__link {
        @apply w-fit h-fit text-base text-left underline text-primary-400;
    }
</style>