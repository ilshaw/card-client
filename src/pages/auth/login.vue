<script setup lang="ts">
    import Control from "../../components/control.vue";
    import Button from "../../components/button.vue";
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Social from "../../components/social.vue";
    import Input from "../../components/input.vue";
    import Form from "../../components/form.vue";
    import Page from "../../components/page.vue";
    import Text from "../../components/text.vue";
    import Main from "../../components/main.vue";
    import Link from "../../components/link.vue";

    const state = ref({
        password: "",
        email: ""
    });

    function submit(event: any) {
        
    }
</script>

<template>
    <Page>
        <Header>
            Header
        </Header>
        <Main>
            <Form :state="state" @submit="(event) => submit(event)">
                <Text>
                    Authentication
                </Text>
                <Control required name="email" label="Email">
                    <Input type="email" v-model="state.email"/>
                </Control>
                <Control required name="password" label="Password">
                    <Input type="password" v-model="state.password"/>
                </Control>
                <Button block type="submit">
                    Login
                </Button>
                <Text>
                    Dont have an account? Go <Link to="/auth/signup">signup</Link>.
                </Text>
            </Form>
        </Main>
        <Footer>
            <Text>
                Copyright © 2024
            </Text>
            <Social/>
        </Footer>
    </Page>
</template>