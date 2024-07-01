<script setup lang="ts">
    import Container from "./container.vue";
    import Button from "./button.vue";
</script>

<template>
    <Container class="_auth">
        <Button class="_auth_button" to="/auth/signup">
            Signup
        </Button>
        <Button class="_auth_button" to="/auth/login">
            Login
        </Button>
    </Container>
</template>

<style scoped lang="scss">
    ._auth {
        @apply flex flex-row justify-center items-center w-min h-8 gap-2;
    }

    ._auth_button {
        @apply flex flex-row justify-center items-center w-min h-8;
    }
</style>