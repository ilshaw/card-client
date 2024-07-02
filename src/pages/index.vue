<script setup lang="ts">
    import Footer from "../components/footer.vue";
    import Header from "../components/header.vue";
    import Page from "../components/page.vue";
    import Main from "../components/main.vue";

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
        <Main class="_index_main_container">
            
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    ._index_main_container {
        @apply flex flex-col justify-start items-start w-full h-full;
    }
</style>