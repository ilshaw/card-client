<script setup lang="ts">
    interface InputProps {
        class?: string
        type?: string
    }

    const props = defineProps<InputProps>();
</script>

<template>
    <UInput :type="props.type" :class="props.class"/>
</template>