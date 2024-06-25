<script setup lang="ts">
    interface InputProps {
        class?: string
        type?: string
    }

    const props = defineProps<InputProps>();
</script>

<template>
    <UInput class="input" :type="props.type" :class="props.class"/>
</template>

<style scoped lang="scss">
    .input {

    }
</style>