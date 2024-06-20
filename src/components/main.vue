<script setup lang="ts">
    interface MainProps {
        class?: string
    }

    const props = defineProps<MainProps>();
</script>

<template>
    <UContainer class="main">
        <UContainer class="container" :class="props.class">
            <slot/>
        </UContainer>
    </UContainer>
</template>

<style scoped lang="scss">
    .main {
        @apply flex flex-col justify-center items-center w-full h-full;
    }

    .container {
        @apply flex flex-col justify-center items-center w-full h-full;
    }
</style>