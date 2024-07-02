<script setup lang="ts">
    interface TextProps {
        class?: string
    }

    const props = defineProps<TextProps>();
</script>

<template>
    <span class="__text" :class="props.class">
        <slot/>
    </span>
</template>

<style lang="scss">
    .__text {
        @apply w-fit h-fit text-base text-left;
    }
</style>