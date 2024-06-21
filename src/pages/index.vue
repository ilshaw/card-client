<script setup lang="ts">
    import Footer from "../components/footer.vue";
    import Header from "../components/header.vue";
    import Page from "../components/page.vue";
    import Main from "../components/main.vue";

    const store = useUserStore();

    const user = store.getUser();

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
            <pre>
                Main {{ user }}
            </pre>
        </Main>
        <Footer/>
    </Page>
</template>