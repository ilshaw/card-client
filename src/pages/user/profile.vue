<script setup lang="ts">
    import Container from "../../components/container.vue";
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Image from "../../components/image.vue";
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
                <Container>
                    <Image src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
                </Container>
                <Container>
                    <Container>
                        <Text>
                            Id:
                        </Text>
                        <Text>
                            {{ user.id }}
                        </Text>
                    </Container>
                    <Container>
                        <Text>
                            Email:
                        </Text>
                        <Text>
                            {{ user.email }}
                        </Text>
                    </Container>
                    <Container>
                        <Text>
                            Created:
                        </Text>
                        <Text>
                            {{ user.created }}
                        </Text>
                    </Container>
                    <Container>
                        <Text>
                            Updated:
                        </Text>
                        <Text>
                            {{ user.updated }}
                        </Text>
                    </Container>
                </Container>
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
        @apply flex flex-col gap-4;
    }
</style>