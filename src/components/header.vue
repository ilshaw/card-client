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
    <header class="_header">
        <Container class="_header_container" :class="props.class">
            <Logo/>
            <Profile v-if="user"/>
            <Auth v-else/>
        </Container>
    </header>
</template>

<style scoped lang="scss">
    ._header {
        @apply flex flex-row justify-center items-center w-full h-16 px-2;
    }

    ._header_container {
        @apply container flex flex-row justify-between items-center w-full h-16 px-2;
    }
</style>