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
    <UFormGroup class="control" :name="props.name" :label="props.label" :class="props.class" :required="props.required">
        <slot/>
    </UFormGroup>
</template>

<style scoped lang="scss">
    .control {

    }
</style>