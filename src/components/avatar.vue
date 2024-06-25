<script setup lang="ts">
    interface AvatarProps {
        class?: string
        src?: string
    }

    const props = defineProps<AvatarProps>();
</script>

<template>
    <UAvatar class="avatar" :src="props.src" :class="props.class"/>
</template>

<style scoped lang="scss">
    .avatar {

    }
</style>