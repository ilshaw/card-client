<script setup lang="ts">
    interface ListProps {
        class?: string
    }

    const props = defineProps<ListProps>();
</script>

<template>
    <ul class="__list" :class="props.class">
        <slot/>
    </ul>
</template>

<style lang="scss">
    .__list {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>