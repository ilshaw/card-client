<script setup lang="ts">
    interface ControlProps {
        required?: boolean
        class?: string
        label?: string
        name?: string
    }

    const props = defineProps<ControlProps>();
</script>

<template>
    <UFormGroup class="__control" :ui="{ container: 'flex flex-col w-full gap-2' }" :name="props.name" :label="props.label" :class="props.class" :required="props.required">
        <slot/>
    </UFormGroup>
</template>

<style lang="scss">
    .__control {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>