<script setup lang="ts">
    interface ContainerProps {
        class?: string
    }

    const props = defineProps<ContainerProps>();
</script>

<template>
    <UContainer class="container" :class="props.class">
        <slot/>
    </UContainer>
</template>