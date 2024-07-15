<script setup lang="ts">
    import Container from "./container.vue";
    import Dropdown from "./dropdown.vue";
    import Avatar from "./avatar.vue";
    import Button from "./button.vue";
    import Modal from "./modal.vue";
    import Image from "./image.vue";
    import Text from "./text.vue";

    import qrcode from "qrcode";

    const userStore = useUserStore();

    const router = useRouter();

    const user = userStore.getUser();

    const qr = ref();

    const items = ref([
        [
            {
                label: "Profile",
                icon: "uil:user",
                to: "/user/profile"
            },
            {
                label: "Qr",
                icon: "uil:qrcode-scan",
                click: () => showQr()
            }
        ],
        [
            {
                label: "Logout",
                icon: "uil:signout",
                click: () => showLogout()
            }
        ]
    ]);

    const openLogout = ref(false);
    const openQr = ref(false);

    async function submitLogout() {
        const response = await userStore.fetchAuthLogout();

        if(response.status === 200) {
            return await router.push("/");
        }
        else {
            return await router.push("/");
        }
    }

    function showLogout() {
        return openLogout.value = true;
    }

    function hideLogout() {
        return openLogout.value = false;
    }

    function showQr() {
        return openQr.value = true;
    }

    onMounted(async () => {
        return qr.value = await qrcode.toDataURL(`http://localhost:3000/user/${user.value.id}/profile`, {
            width: 1000
        });
    });
</script>

<template>
    <Dropdown class="__profile" :items="items">
        <template #default>
            <Avatar class="__profile_avatar" src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
            <Modal v-model="openLogout">
                <Container class="__profile_modal_logout">
                    <Text class="__profile_modal_logout_text">
                        Are you sure?
                    </Text>
                    <Container class="__profile_modal_logout_buttons">
                        <Button @click="() => submitLogout()">
                            Yes
                        </Button>
                        <Button @click="() => hideLogout()">
                            No
                        </Button>
                    </Container>
                </Container>
            </Modal>
            <Modal v-model="openQr">
                <Container class="__profile_modal_qr">
                    <Image class="__profile_modal_qr_image" :src="qr"/>
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

    .__profile_modal_logout {
        @apply flex flex-col justify-start items-start w-full h-32 p-2;
    }

    .__profile_modal_logout_text {
        @apply flex flex-row justify-center items-center w-full h-16;
    }

    .__profile_modal_logout_buttons {
        @apply flex flex-row justify-center items-center w-full h-16 gap-2;
    }

    .__profile_modal_qr {
        @apply flex flex-col justify-start items-start w-full h-fit p-2;
    }

    .__profile_modal_qr_image {
        @apply flex flex-row justify-start items-start w-full h-full rounded;
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