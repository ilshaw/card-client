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
    <UButton class="__button" :to="props.to" :type="props.type" :class="props.class" :block="props.block">
        <slot/>
    </UButton>
</template>

<style lang="scss">
    .__button {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>