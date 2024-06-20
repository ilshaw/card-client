<script setup lang="ts">
    interface FooterProps {
        class?: string
    }

    const props = defineProps<FooterProps>();
</script>

<template>
    <UContainer class="footer">
        <UContainer class="container" :class="props.class">
            <slot/>
        </UContainer>
    </UContainer>
</template>

<style scoped lang="scss">
    .footer {
        @apply flex flex-col justify-center items-center w-full h-16;
    }

    .container {
        @apply flex flex-col justify-center items-center w-full h-16;
    }
</style>