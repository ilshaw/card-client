<script setup lang="ts">
    interface LinkProps {
        class?: string
        to: string
    }

    const props = defineProps<LinkProps>();
</script>

<template>
    <NuxtLink class="link" :class="props.class" :to="props.to">
        <slot/>
    </NuxtLink>
</template>

<style scoped lang="scss">
    .link {
        @apply underline text-base text-primary-500;
    }
</style>