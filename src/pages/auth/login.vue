<script setup lang="ts">
    import Control from "../../components/control.vue";
    import Button from "../../components/button.vue";
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Input from "../../components/input.vue";
    import Form from "../../components/form.vue";
    import Page from "../../components/page.vue";
    import Text from "../../components/text.vue";
    import Main from "../../components/main.vue";
    import Link from "../../components/link.vue";

    const userStore = useUserStore();

    const router = useRouter();

    const state = ref({
        password: "",
        email: ""
    });

    async function submit(event: any) {
        const response = await userStore.fetchLogin(event.data.password, event.data.email);

        if(response.status === 200) {
            return await router.push("/");
        }
        else {
            return await router.push("/auth/login");
        }
    }

    definePageMeta({
        middleware: [
            "session",
            "card",
            "user"
        ]
    });
</script>

<template>
    <Page>
        <Header/>
        <Main class="login-main">
            <Form class="login-main-form" :state="state" @submit="async (event) => await submit(event)">
                <Text class="login-main-form-title">
                    Authentication
                </Text>
                <Control class="login-main-form-control" required name="email" label="Email">
                    <Input type="email" v-model="state.email"/>
                </Control>
                <Control class="login-main-form-control" required name="password" label="Password">
                    <Input type="password" v-model="state.password"/>
                </Control>
                <Button class="signup-main-form-button" block type="submit">
                    Login
                </Button>
                <Text class="signup-main-form-suggestion">
                    Dont have an account? Go <Link to="/auth/signup">signup</Link>.
                </Text>
            </Form>
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    .login-main {
        @apply flex justify-center items-center;
    }

    .login-main-form {
        @apply flex flex-col gap-4;
    }

    .login-main-form-title {

    }

    .login-main-form-control {

    }

    .login-main-form-button {

    }

    .login-main-form-suggestion {

    }
</style>