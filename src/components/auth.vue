<script setup lang="ts">
    import Container from "./container.vue";
    import Button from "./button.vue";
</script>

<template>
    <Container class="auth">
        <Button class="auth-button" to="/auth/signup">
            Signup
        </Button>
        <Button class="auth-button" to="/auth/login">
            Login
        </Button>
    </Container>
</template>

<style scoped lang="scss">
    .auth {
        @apply flex justify-center items-center w-min h-16 gap-2;
    }

    .auth-button {
        @apply flex justify-center items-center w-min h-8;
    }
</style>