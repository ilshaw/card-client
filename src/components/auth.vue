<script setup lang="ts">
    import Container from "./container.vue";
    import Button from "./button.vue";
</script>

<template>
    <Container class="__auth">
        <Button class="__auth_button" to="/auth/signup">
            Signup
        </Button>
        <Button class="__auth_button" to="/auth/login">
            Login
        </Button>
    </Container>
</template>

<style lang="scss">
    .__auth {
        @apply flex flex-row justify-start items-start w-fit h-8 gap-2;
    }

    .__auth_button {
        @apply flex flex-row justify-start items-start w-fit h-8;
    }
</style>