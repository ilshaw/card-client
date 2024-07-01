<script setup lang="ts">
    interface ModalProps {
        class?: string
    }

    const props = defineProps<ModalProps>();
</script>

<template>
    <UModal class="_modal" :class="props.class">
        <slot/>
    </UModal>
</template>

<style scoped lang="scss">
    ._modal {

    }
</style>