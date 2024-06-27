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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        display: grid;
        height: 4rem;
        width: 100%;
    }

    .header-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        display: grid;
        height: 4rem;
        width: 100%;
    }
</style>