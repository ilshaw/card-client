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
    <UForm class="__form" :state="props.state" :class="props.class" @submit="(event) => emits('submit', event)">
        <slot/>
    </UForm>
</template>

<style lang="scss">
    .__form {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>