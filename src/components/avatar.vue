<script setup lang="ts">
    interface AvatarProps {
        src?: string
    }

    const props = defineProps<AvatarProps>();
</script>

<template>
    <UAvatar :src="props.src"/>
</template>