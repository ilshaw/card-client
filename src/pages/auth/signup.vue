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
        const response = await userStore.fetchSignup(event.data.password, event.data.email);

        if(response.status === 201) {
            return await router.push("/");
        }
        else {
            return await router.push("/auth/signup");
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
        <Main class="signup-main">
            <Form class="signup-main-form" :state="state" @submit="async (event) => await submit(event)">
                <Text class="signup-main-form-title">
                    Registration
                </Text>
                <Control class="signup-main-form-control" required name="email" label="Email">
                    <Input type="email" v-model="state.email"/>
                </Control>
                <Control class="signup-main-form-control" required name="password" label="Password">
                    <Input type="password" v-model="state.password"/>
                </Control>
                <Button class="signup-main-form-button" block type="submit">
                    Signup
                </Button>
                <Text class="signup-main-form-suggestion">
                    Already have an account? Go <Link to="/auth/login">login</Link>.
                </Text>
            </Form>
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    .signup-main {
        @apply flex justify-center items-center;
    }

    .signup-main-form {
        @apply flex flex-col gap-4;
    }

    .signup-main-form-title {

    }

    .signup-main-form-control {

    }

    .signup-main-form-button {

    }

    .signup-main-form-suggestion {

    }
</style>