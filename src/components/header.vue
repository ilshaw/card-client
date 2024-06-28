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
        grid-template-columns: 1fr;
        grid-template-rows: 4rem;
        place-items: center;
        min-height: 4rem;
        min-width: 100%;
        display: grid;
    }

    ._header_container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4rem;
        place-items: center;
        max-height: 4rem;
        max-width: 80rem;
        padding: 0 1rem 0 1rem;
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>