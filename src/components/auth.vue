<script setup lang="ts">
    import Container from "./container.vue";
    import Button from "./button.vue";
</script>

<template>
    <Container class="_auth">
        <Button class="_auth_button" block to="/auth/signup">
            Signup
        </Button>
        <Button class="_auth_button" block to="/auth/login">
            Login
        </Button>
    </Container>
</template>

<style scoped lang="scss">
    ._auth {
        grid-template-columns: 4rem 4rem;
        grid-template-rows: 2rem;
        place-items: center;
        min-height: 2rem;
        min-width: 9rem;
        display: grid;
        gap: 1rem;
    }

    ._auth_button {
        grid-template-columns: 4rem;
        grid-template-rows: 2rem;
        place-items: center;
        min-height: 2rem;
        min-width: 4rem;
        display: grid;
    }
</style>