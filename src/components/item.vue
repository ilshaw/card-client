<script setup lang="ts">
    interface ItemProps {
        class?: string
    }

    const props = defineProps<ItemProps>();
</script>

<template>
    <li class="__item" :class="props.class">
        <slot/>
    </li>
</template>

<style lang="scss">
    .__item {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>