<script setup lang="ts">
    interface ButtonProps {
        block: boolean
        class?: string
        type: string
    }

    const props = defineProps<ButtonProps>();
</script>

<template>
    <UButton class="button" :type="props.type" :class="props.class" :block="props.block">
        <slot/>
    </UButton>
</template>