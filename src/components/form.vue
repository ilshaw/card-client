<script setup lang="ts">
    interface FormProps {
        class?: string
        state?: any
    }

    interface FormEmits {
        (event: "submit", ...args: any): void
    }

    const props = defineProps<FormProps>();

    const emits = defineEmits<FormEmits>();
</script>

<template>
    <UForm class="_form" :state="props.state" :class="props.class" @submit="(event) => emits('submit', event)">
        <slot/>
    </UForm>
</template>

<style scoped lang="scss">
    ._form {

    }
</style>