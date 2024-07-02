<script setup lang="ts">
    interface InputProps {
        class?: string
        type?: string
    }

    const props = defineProps<InputProps>();
</script>

<template>
    <UInput class="__input" :type="props.type" :class="props.class"/>
</template>

<style lang="scss">
    .__input {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>