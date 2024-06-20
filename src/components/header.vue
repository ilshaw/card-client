<script setup lang="ts">
    interface HeaderProps {
        class?: string
    }

    const props = defineProps<HeaderProps>();
</script>

<template>
    <UContainer class="header">
        <UContainer class="container" :class="props.class">
            <slot/>
        </UContainer>
    </UContainer>
</template>

<style scoped lang="scss">
    .header {
        @apply flex flex-col justify-center items-center w-full h-16;
    }

    .container {
        @apply flex flex-col justify-center items-center w-full h-16;
    }
</style>