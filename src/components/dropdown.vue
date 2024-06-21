<script setup lang="ts">
    interface DropdownProps {
        items?: any[][]
        class?: string,
    }

    const props = defineProps<DropdownProps>();
</script>

<template>
    <UDropdown :class="props.class" :items="props.items">
        <template #default>
            <slot name="default"/>
        </template>
        <template #item="{ item }">
            <slot name="item" :item="item"/>
        </template>
    </UDropdown>
</template>