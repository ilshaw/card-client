<script setup lang="ts">
    import Container from "../../components/container.vue";
    import Footer from "../../components/footer.vue";
    import Header from "../../components/header.vue";
    import Image from "../../components/image.vue";
    import Modal from "../../components/modal.vue";
    import Page from "../../components/page.vue";
    import Main from "../../components/main.vue";
    import List from "../../components/list.vue";
    import Item from "../../components/item.vue";
    import Text from "../../components/text.vue";
    import Link from "../../components/link.vue";
    
    const sessionStore = useSessionStore();
    const cardStore = useCardStore();
    const userStore = useUserStore();

    const session = sessionStore.getSession();
    const card = cardStore.getCard();
    const user = userStore.getUser();

    const open = ref(false);

    const state = ref({
        description: "",
        links: [
            {
                type: "",
                url: ""
            }
        ]
    });

    async function submit(event: any) {
        const response = await cardStore.fetchCardCreate(event.data.description, event.data.links);

        if(response.status === 201) {
            console.info(response);
        }
        else {
            console.error(response);
        }
    }

    function show() {
        return open.value = true;
    }

    function add() {
        return state.value.links.push({
            type: "",
            url: ""
        });
    }

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
        <Main class="_profile_main_container">
            <Container class="_profile_main_container_info">
                <Image class="_profile_main_container_info_avatar" src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
                <Container class="_profile_main_container_info_container">
                    <Container class="_profile_main_container_info_container_profile">
                        <Text class="_profile_main_container_info_container_profile_title">
                            Profile
                        </Text>
                        <Container class="_profile_main_container_info_container_profile_container">
                            <List class="_profile_main_container_info_container_profile_container_list">
                                <Item class="_profile_main_container_info_container_profile_container_list_item">
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_title">
                                        Id
                                    </Text>
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_text">
                                        {{ user.id }}
                                    </Text>
                                </Item>
                                <Item class="_profile_main_container_info_container_profile_container_list_item">
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_title">
                                        Email
                                    </Text>
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_text">
                                        {{ user.email }}
                                    </Text>
                                </Item>
                                <Item class="_profile_main_container_info_container_profile_container_list_item">
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_title">
                                        Created
                                    </Text>
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_text">
                                        {{ user.created }}
                                    </Text>
                                </Item>
                                <Item class="_profile_main_container_info_container_profile_container_list_item">
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_title">
                                        Updated
                                    </Text>
                                    <Text class="_profile_main_container_info_container_profile_container_list_item_text">
                                        {{ user.updated }}
                                    </Text>
                                </Item>
                            </List>
                        </Container>
                    </Container>
                    <Container class="_profile_main_container_info_container_session">
                        <Text class="_profile_main_container_info_container_session_title">
                            Session
                        </Text>
                        <Container class="_profile_main_container_info_container_session_container">
                            <List class="_profile_main_container_info_container_session_container_list">
                                <Item class="_profile_main_container_info_container_session_container_list_item">
                                    <Text class="_profile_main_container_info_container_session_container_list_item_title">
                                        Id
                                    </Text>
                                    <Text class="_profile_main_container_info_container_session_container_list_item_text">
                                        {{ session.id }}
                                    </Text>
                                </Item>
                                <Item class="_profile_main_container_info_container_session_container_list_item">
                                    <Text class="_profile_main_container_info_container_session_container_list_item_title">
                                        Created
                                    </Text>
                                    <Text class="_profile_main_container_info_container_session_container_list_item_text">
                                        {{ session.created }}
                                    </Text>
                                </Item>
                                <Item class="_profile_main_container_info_container_session_container_list_item">
                                    <Text class="_profile_main_container_info_container_session_container_list_item_title">
                                        Updated
                                    </Text>
                                    <Text class="_profile_main_container_info_container_session_container_list_item_text">
                                        {{ session.updated }}
                                    </Text>
                                </Item>
                            </List>
                        </Container>
                    </Container>
                </Container>
            </Container>
            <Container class="_profile_main_container_card" v-if="card">
                <Text class="_profile_main_container_card_title">
                    Card
                </Text>
                <Container class="_profile_main_container_card_container">
                    <List class="_profile_main_container_card_container_list">
                        <Item class="_profile_main_container_card_container_list_item">
                            <Text class="_profile_main_container_card_container_list_item_title">
                                Id
                            </Text>
                            <Text class="_profile_main_container_card_container_list_item_text">
                                {{ card.id }}
                            </Text>
                        </Item>
                        <Item class="_profile_main_container_card_container_list_item">
                            <Text class="_profile_main_container_card_container_list_item_title">
                                Description
                            </Text>
                            <Text class="_profile_main_container_card_container_list_item_text">
                                {{ card.description }}
                            </Text>
                        </Item>
                        <Item class="_profile_main_container_card_container_list_item">
                            <Text class="_profile_main_container_card_container_list_item_title">
                                Created
                            </Text>
                            <Text class="_profile_main_container_card_container_list_item_text">
                                {{ card.created }}
                            </Text>
                        </Item>
                        <Item class="_profile_main_container_card_container_list_item">
                            <Text class="_profile_main_container_card_container_list_item_title">
                                Updated
                            </Text>
                            <Text class="_profile_main_container_card_container_list_item_text">
                                {{ card.updated }}
                            </Text>
                        </Item>
                    </List>
                </Container>
            </Container>
            <Container class="_profile_main_container_links" v-if="card">
                <Text class="_profile_main_container_links_title">
                    Links
                </Text>
                <Container class="_profile_main_container_links_container">
                    <List class="_profile_main_container_links_container_list">
                        <Item class="_profile_main_container_links_container_list_item" v-for="link in card.links">
                            <Text class="_profile_main_container_links_container_list_item_title">
                                {{ link.type }}
                            </Text>
                            <Link class="_profile_main_container_links_container_list_item_text" external :to="link.url">
                                {{ link.url }}
                            </Link>
                        </Item>
                    </List>
                </Container>
            </Container>
            <Container class="_profile_main_container_create" v-if="!card">
                <Text class="_profile_main_container_create_text">
                    Card was not found.
                </Text>
                <Button class="_profile_main_container_create_button" @click="() => show()">
                    Create
                </Button>
                <Modal v-model="open">
                    <Container class="_profile_main_container_create_modal">
                        <Form class="_profile_main_container_create_modal_form" :state="state" @submit="async (event) => await submit(event)">
                            <Text class="_profile_main_container_create_modal_form_title">
                                Creation
                            </Text>
                            <Control class="_profile_main_container_create_modal_form_control" required name="description" label="Description">
                                <Input class="_profile_main_container_create_modal_form_control_input" type="text" v-model="state.description"/>
                            </Control>
                            <Control class="_profile_main_container_create_modal_form_control" required name="links" label="Links">
                                <Container class="_profile_main_container_create_modal_form_control_container" v-for="link in state.links">
                                    <Control class="_profile_main_container_create_modal_form_control" required name="type" label="Type">
                                        <Input class="_profile_main_container_create_modal_form_control_input" type="text" v-model="link.type"/>
                                    </Control>
                                    <Control class="_profile_main_container_create_modal_form_control" required name="url" label="Url">
                                        <Input class="_profile_main_container_create_modal_form_control_input" type="text" v-model="link.url"/>
                                    </Control>
                                </Container>
                                <Button class="_profile_main_container_create_modal_form_control_button" block type="button" @click="() => add()">
                                    Add
                                </Button>
                            </Control>
                            <Button class="_profile_main_container_create_modal_form_button" block type="submit">
                                Create
                            </Button>
                        </Form>
                    </Container>
                </Modal>
            </Container>
        </Main>
        <Footer/>
    </Page>
</template>

<style lang="scss">
    ._profile_main_container {
        @apply flex flex-col justify-start items-start w-full h-full gap-2;
    }

    ._profile_main_container_info {
        @apply flex flex-row justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_info_avatar {
        @apply flex flex-row justify-start items-start w-80 h-80 rounded border border-gray-700;
    }

    ._profile_main_container_info_container {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_info_container_profile {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_info_container_profile_title {
        @apply w-fit h-fit text-xl text-left;
    }

    ._profile_main_container_info_container_profile_container {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._profile_main_container_info_container_profile_container_list {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._profile_main_container_info_container_profile_container_list_item {
        @apply flex flex-row justify-start items-center w-full h-fit gap-2;
    }

    ._profile_main_container_info_container_profile_container_list_item_title {
        @apply w-40 h-fit text-lg text-left;
    }

    ._profile_main_container_info_container_profile_container_list_item_text {
        @apply w-fit h-fit text-base text-left;
    }

    ._profile_main_container_info_container_session {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_info_container_session_title {
        @apply w-fit h-fit text-xl text-left;
    }

    ._profile_main_container_info_container_session_container {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._profile_main_container_info_container_session_container_list {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._profile_main_container_info_container_session_container_list_item {
        @apply flex flex-row justify-start items-center w-full h-fit gap-2;
    }

    ._profile_main_container_info_container_session_container_list_item_title {
        @apply w-40 h-fit text-lg text-left;
    }

    ._profile_main_container_info_container_session_container_list_item_text {
        @apply w-fit h-fit text-base text-left;
    }

    ._profile_main_container_card {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_card_title {
        @apply w-fit h-fit text-xl text-left;
    }

    ._profile_main_container_card_container {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._profile_main_container_card_container_list {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._profile_main_container_card_container_list_item {
        @apply flex flex-row justify-start items-center w-full h-fit gap-2;
    }

    ._profile_main_container_card_container_list_item_title {
        @apply w-40 h-fit text-lg text-left;
    }

    ._profile_main_container_card_container_list_item_text {
        @apply w-fit h-fit text-base text-left;
    }

    ._profile_main_container_links {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_links_title {
        @apply w-fit h-fit text-xl text-left;
    }

    ._profile_main_container_links_container {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._profile_main_container_links_container_list {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._profile_main_container_links_container_list_item {
        @apply flex flex-row justify-start items-center w-full h-fit gap-2;
    }

    ._profile_main_container_links_container_list_item_title {
        @apply w-40 h-fit text-lg text-left;
    }

    ._profile_main_container_links_container_list_item_text {
        @apply w-fit h-fit text-base text-left;
    }

    ._profile_main_container_create {
        @apply flex flex-col justify-center items-center w-full h-full flex-1 gap-2;
    }

    ._profile_main_container_create_text {
        @apply w-fit h-fit text-base text-left;
    }

    ._profile_main_container_create_button {
        @apply flex flex-row justify-center items-center w-fit h-fit;
    }

    ._profile_main_container_create_modal {
        @apply flex flex-row justify-start items-start w-full h-fit p-2;
    }

    ._profile_main_container_create_modal_form {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_create_modal_form_title {
        @apply w-full h-fit text-xl text-left;
    }

    ._profile_main_container_create_modal_form_control {
        @apply flex flex-col justify-start items-start w-full h-fit;
    }

    ._profile_main_container_create_modal_form_control_input {
        @apply flex flex-row justify-start items-start w-full h-fit;
    }

    ._profile_main_container_create_modal_form_control_container {
        @apply flex flex-col justify-start items-start w-full h-fit gap-2;
    }

    ._profile_main_container_create_modal_form_control_button {
        @apply flex flex-row justify-center items-center w-full h-fit;
    }

    ._profile_main_container_create_modal_form_button {
        @apply flex flex-row justify-center items-center w-full h-fit;
    }
</style>