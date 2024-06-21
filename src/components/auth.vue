<script setup lang="ts">
    import Container from "./container.vue";
    import Button from "./button.vue";
</script>

<template>
    <Container class="auth">
        <Button to="/auth/signup">
            Signup
        </Button>
        <Button to="/auth/login">
            Login
        </Button>
    </Container>
</template>

<style scoped lang="scss">
    .auth {
        @apply flex flex-row w-min p-0 m-0 gap-2;
    }
</style>