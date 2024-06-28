<script setup lang="ts">
    interface ButtonProps {
        block?: boolean
        class?: string
        type?: string
        to?: string
    }

    const props = defineProps<ButtonProps>();
</script>

<template>
    <UButton class="_button" :to="props.to" :type="props.type" :class="props.class" :block="props.block">
        <slot/>
    </UButton>
</template>

<style scoped lang="scss">
    ._button {

    }
</style>