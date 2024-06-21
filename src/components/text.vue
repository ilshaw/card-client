<script setup lang="ts">
    interface TextProps {
        class?: string
    }

    const props = defineProps<TextProps>();
</script>

<template>
    <span :class="props.class">
        <slot/>
    </span>
</template>