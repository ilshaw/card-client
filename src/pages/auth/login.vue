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
        const response = await userStore.fetchAuthLogin(event.data.password, event.data.email);

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
        <Main class="_login_main_container">
            <Form class="_login_main_container_form" :state="state" @submit="async (event) => await submit(event)">
                <Text class="_login_main_container_form_title">
                    Authentication
                </Text>
                <Control class="_login_main_container_form_control" required name="email" label="Email">
                    <Input class="_login_main_container_form_control_input" type="email" v-model="state.email"/>
                </Control>
                <Control class="_login_main_container_form_control" required name="password" label="Password">
                    <Input class="_login_main_container_form_control_input" type="password" v-model="state.password"/>
                </Control>
                <Button class="_login_main_container_form_button" block type="submit">
                    Login
                </Button>
                <Text class="_login_main_container_form_suggestion">
                    Dont have an account? Go <Link to="/auth/signup">signup</Link>.
                </Text>
            </Form>
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    ._login_main_container {
        @apply flex flex-col justify-center items-center w-full h-full;
    }

    ._login_main_container_form {
        @apply flex flex-col justify-start items-start w-80 h-fit gap-2;
    }

    ._login_main_container_form_title {
        @apply w-full h-fit text-xl text-left;
    }

    ._login_main_container_form_control {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._login_main_container_form_control_input {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._login_main_container_form_button {
        @apply flex flex-row justify-center items-center w-full h-fit;
    }

    ._login_main_container_form_suggestion {
        @apply w-full h-fit text-base text-center;
    }
</style>