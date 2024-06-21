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

    const router = useRouter();

    const fetch = useInternalFetch();

    const state = ref({
        password: "",
        email: ""
    });

    async function submit(event: any) {
        const response = await fetch.post<{ user?: unknown }>("/api/auth/signup", {
            body: JSON.stringify({
                password: event.data.password,
                email: event.data.email
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        if(response.status === 201 && response.body.data && response.body.data.user) {
            return await router.push("/");
        }
    }

    definePageMeta({
        middleware: [
            "user"
        ]
    });
</script>

<template>
    <Page>
        <Header/>
        <Main>
            <Form :state="state" @submit="async (event) => await submit(event)">
                <Text>
                    Registration
                </Text>
                <Control required name="email" label="Email">
                    <Input type="email" v-model="state.email"/>
                </Control>
                <Control required name="password" label="Password">
                    <Input type="password" v-model="state.password"/>
                </Control>
                <Button block type="submit">
                    Signup
                </Button>
                <Text>
                    Already have an account? Go <Link to="/auth/login">login</Link>.
                </Text>
            </Form>
        </Main>
        <Footer/>
    </Page>
</template>