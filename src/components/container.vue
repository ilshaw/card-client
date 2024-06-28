<script setup lang="ts">
    interface ContainerProps {
        class?: string
    }

    const props = defineProps<ContainerProps>();
</script>

<template>
    <div class="_container" :class="props.class">
        <slot/>
    </div>
</template>

<style scoped lang="scss">
    ._container {

    }
</style>