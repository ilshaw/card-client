<script setup lang="ts">
    import Container from "./container.vue";
    import Profile from "./profile.vue";
    import Logo from "./logo.vue";
    import Auth from "./auth.vue";

    interface HeaderProps {
        class?: string
    }

    const userStore = useUserStore();

    const user = userStore.getUser();

    const props = defineProps<HeaderProps>();
</script>

<template>
    <header class="__header">
        <Container class="__header_container" :class="props.class">
            <Logo/>
            <Profile v-if="user"/>
            <Auth v-else/>
        </Container>
    </header>
</template>

<style lang="scss">
    .__header {
        @apply flex flex-row justify-center items-center w-full h-16 px-2;
    }

    .__header_container {
        @apply flex flex-row justify-between items-center w-full h-16 px-2 container;
    }
</style>