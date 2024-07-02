<script setup lang="ts">
    import Container from "./container.vue";
    import Dropdown from "./dropdown.vue";
    import Avatar from "./avatar.vue";
    import Button from "./button.vue";
    import Modal from "./modal.vue";
    import Text from "./text.vue";

    const userStore = useUserStore();

    const router = useRouter();

    const items = ref([
        [
            {
                label: "Profile",
                icon: "uil:user",
                to: "/user/profile"
            }
        ],
        [
            {
                label: "Logout",
                icon: "uil:signout",
                click: () => show()
            }
        ]
    ]);

    const open = ref(false);

    async function submit() {
        const response = await userStore.fetchAuthLogout();

        if(response.status === 200) {
            return await router.push("/");
        }
        else {
            return await router.push("/");
        }
    }

    function show() {
        return open.value = true;
    }

    function hide() {
        return open.value = false;
    }
</script>

<template>
    <Dropdown class="__profile" :items="items">
        <template #default>
            <Avatar class="__profile_avatar" src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
            <Modal v-model="open">
                <Container class="__profile_modal">
                    <Text class="__profile_modal_text">
                        Are you sure?
                    </Text>
                    <Container class="__profile_modal_buttons">
                        <Button @click="() => submit()">
                            Yes
                        </Button>
                        <Button @click="() => hide()">
                            No
                        </Button>
                    </Container>
                </Container>
            </Modal>
        </template>
        <template #item="props">
            <Container class="__profile_item">
                <Text class="__profile_item_text">
                    {{ props.item.label }}
                </Text>
                <Icon class="__profile_item_icon" :name="props.item.icon"/>
            </Container>
        </template>
    </Dropdown>
</template>

<style lang="scss">
    .__profile {
        @apply flex flex-row justify-start items-start w-8 h-8;
    }

    .__profile_avatar {
        @apply flex flex-row justify-start items-start w-8 h-8;
    }

    .__profile_modal {
        @apply flex flex-col justify-start items-start w-full h-32 p-2;
    }

    .__profile_modal_text {
        @apply flex flex-row justify-center items-center w-full h-16;
    }

    .__profile_modal_buttons {
        @apply flex flex-row justify-center items-center w-full h-16 gap-2;
    }

    .__profile_item {
        @apply flex flex-row justify-between items-center w-full h-8;
    }

    .__profile_item_text {
        @apply flex flex-row justify-start items-center w-fit h-8;
    }

    .__profile_item_icon {
        @apply flex flex-row justify-start items-start w-4 h-4;
    }
</style>