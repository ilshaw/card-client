<script setup lang="ts">
    import Container from "./container.vue";
    import Profile from "./profile.vue";
    import Logo from "./logo.vue";
    import Auth from "./auth.vue";

    interface HeaderProps {
        class?: string
    }

    const store = useUserStore();

    const user = store.getUser();

    const props = defineProps<HeaderProps>();
</script>

<template>
    <Container class="header">
        <Container class="header-container" :class="props.class">
            <Logo/>
            <Profile v-if="user"/>
            <Auth v-else/>
        </Container>
    </Container>
</template>

<style scoped lang="scss">
    .header {
        @apply flex flex-col justify-center items-center w-full h-16;
    }

    .header-container {
        @apply flex flex-row justify-between items-center w-full h-16 gap-2;
    }
</style>