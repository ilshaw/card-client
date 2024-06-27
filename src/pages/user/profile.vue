<script setup lang="ts">
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Page from "../../components/page.vue";
    import Main from "../../components/main.vue";

    const sessionStore = useSessionStore();
    const cardStore = useCardStore();
    const userStore = useUserStore();

    const session = sessionStore.getSession();
    const card = cardStore.getCard();
    const user = userStore.getUser();

    definePageMeta({
        middleware: [
            "session",
            "card",
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
                <pre>
                    <span>profile</span>
                    <span>{{ user }}</span>
                </pre>
                <pre>
                    <span>session</span>
                    <span>{{ session }}</span>
                </pre>
            </Container>
            <Container class="profile-main-card">
                <pre>
                    <span>card</span>
                    <span>{{ card }}</span>
                </pre>
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