<script setup lang="ts">
    import Container from "./container.vue";
    import Dropdown from "./dropdown.vue";
    import Avatar from "./avatar.vue";
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
                click: async () => await logout()
            }
        ]
    ]);

    async function logout() {
        const response = await userStore.fetchLogout();

        if(response.status === 200) {
            return await router.push("/");
        }
        else {
            return await router.push("/");
        }
    }
</script>

<template>
    <Dropdown class="_profile" :items="items">
        <template #default>
            <Avatar class="_profile_avatar" src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
        </template>
        <template #item="props">
            <Container class="_profile_item">
                <Text class="_profile_item_text">
                    {{ props.item.label }}
                </Text>
                <Icon class="_profile_item_icon" :name="props.item.icon"/>
            </Container>
        </template>
    </Dropdown>
</template>

<style>
    ._profile {

    }

    ._profile_avatar {

    }

    ._profile_item {

    }

    ._profile_item_text {

    }

    ._profile_item_icon {

    }
</style>