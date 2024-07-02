<script setup lang="ts">
    interface ModalProps {
        class?: string
    }

    const props = defineProps<ModalProps>();
</script>

<template>
    <UModal class="__modal" :ui="{ container: 'items-center' }" :class="props.class">
        <slot/>
    </UModal>
</template>

<style lang="scss">
    .__modal {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>