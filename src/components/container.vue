<script setup lang="ts">
    interface ContainerProps {
        class?: string
    }

    const props = defineProps<ContainerProps>();
</script>

<template>
    <UContainer :class="props.class">
        <slot/>
    </UContainer>
</template>