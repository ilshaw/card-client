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

    }

    ._auth_button {

    }
</style>