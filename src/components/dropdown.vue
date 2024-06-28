<script setup lang="ts">
    interface DropdownProps {
        items?: any[][]
        class?: string,
    }

    const props = defineProps<DropdownProps>();
</script>

<template>
    <UDropdown class="_dropdown" :class="props.class" :items="props.items">
        <template #default>
            <slot name="default"/>
        </template>
        <template #item="props">
            <slot name="item" :item="props.item"/>
        </template>
    </UDropdown>
</template>

<style scoped lang="scss">
    ._dropdown {

    }
</style>