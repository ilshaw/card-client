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
    <header class="header">
        <Container class="header-container" :class="props.class">
            <Logo class="header-container-logo"/>
            <Profile class="header-container-profile" v-if="user"/>
            <Auth class="header-container-auth" v-else/>
        </Container>
    </header>
</template>

<style scoped lang="scss">
    .header {
        @apply flex justify-between items-center h-16;
    }

    .header-container {
        @apply flex justify-between items-center h-16 px-4;
    }

    .header-container-logo {
        @apply flex justify-center items-center h-16;
    }

    .header-container-profile {
        @apply flex justify-center items-center h-16;
    }

    .header-container-auth {
        @apply flex justify-center items-center h-16;
    }
</style>