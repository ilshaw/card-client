<script setup lang="ts">
    import Footer from "../components/footer.vue";
    import Header from "../components/header.vue";
    import Page from "../components/page.vue";
    import Main from "../components/main.vue";

    definePageMeta({
        middleware: [
            "user"
        ]
    });
</script>

<template>
    <Page>
        <Header/>
        <Main class="index-main">
            
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    .index-main {
        @apply flex justify-center items-center;
    }
</style>