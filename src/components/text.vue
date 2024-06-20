<script setup lang="ts">
    interface TextProps {
        class?: string
    }

    const props = defineProps<TextProps>();
</script>

<template>
    <span class="text" :class="props.class">
        <slot/>
    </span>
</template>

<style scoped lang="scss">
    .text {
        @apply text-base;
    }
</style>