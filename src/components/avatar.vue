<script setup lang="ts">
    interface AvatarProps {
        class?: string
        src?: string
    }

    const props = defineProps<AvatarProps>();
</script>

<template>
    <UAvatar class="_avatar" :src="props.src" :class="props.class"/>
</template>

<style scoped lang="scss">
    ._avatar {

    }
</style>