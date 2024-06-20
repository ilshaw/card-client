<script setup lang="ts">
    interface FormProps {
        class?: string
        state: any
    }

    interface FormEmits {
        (event: "submit", ...args: any): void
    }

    const props = defineProps<FormProps>();

    const emits = defineEmits<FormEmits>();
</script>

<template>
    <UForm class="form" :state="props.state" :class="props.class" @submit="(event) => emits('submit', event)">
        <slot/>
    </UForm>
</template>

<style scoped lang="scss">
    .form {
        @apply flex flex-col gap-4;
    }
</style>