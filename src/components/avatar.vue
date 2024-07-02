<script setup lang="ts">
    interface AvatarProps {
        class?: string
        src?: string
    }

    const props = defineProps<AvatarProps>();
</script>

<template>
    <UAvatar class="__avatar" :src="props.src" :class="props.class"/>
</template>

<style lang="scss">
    .__avatar {
        @apply flex flex-row justify-start items-start w-fit h-fit;
    }
</style>