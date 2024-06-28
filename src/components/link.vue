<script setup lang="ts">
    interface LinkProps {
        external?: boolean
        class?: string
        to?: string
    }

    const props = defineProps<LinkProps>();
</script>

<template>
    <NuxtLink class="_link" :to="props.to" :class="props.class" :external="props.external">
        <slot/>
    </NuxtLink>
</template>

<style scoped lang="scss">
    ._link {

    }
</style>