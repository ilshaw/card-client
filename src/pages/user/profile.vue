<script setup lang="ts">
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Page from "../../components/page.vue";
    import Main from "../../components/main.vue";

    const store = useUserStore();

    const user = store.getUser();

    definePageMeta({
        middleware: [
            "user",
            "auth"
        ]
    });
</script>

<template>
    <Page>
        <Header/>
        <Main class="profile-main">
            <Container class="profile-main-info">

            </Container>
            <Container class="profile-main-card">

            </Container>
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    .profile-main {
        @apply flex justify-center items-center;
    }

    .profile-main-info {
        @apply flex;
    }

    .profile-main-card {
        @apply flex;
    }
</style>