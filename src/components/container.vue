<script setup lang="ts">
    interface ContainerProps {
        class?: string
    }

    const props = defineProps<ContainerProps>();
</script>

<template>
    <div class="__container" :class="props.class">
        <slot/>
    </div>
</template>

<style lang="scss">
    .__container {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>