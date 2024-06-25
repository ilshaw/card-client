<script setup lang="ts">
    import Container from "./container.vue";
    import Dropdown from "./dropdown.vue";
    import Avatar from "./avatar.vue";
    import Text from "./text.vue";

    const router = useRouter();

    const fetch = useInternalFetch();

    const store = useUserStore();

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
        const response = await fetch.get("/api/auth/logout");

        if(response.status === 200) {
            store.setUser(null);

            return await router.push("/");
        }
        else {
            const response = await fetch.get("/api/token/refresh");

            if(response.status === 200) {
                const response = await fetch.get("/api/auth/logout");

                if(response.status === 200) {
                    store.setUser(null);

                    return await router.push("/");
                }
                else {
                    store.setUser(null);

                    return await router.push("/");
                }
            }
            else {
                store.setUser(null);

                return await router.push("/");
            }
        }
    }
</script>

<template>
    <Dropdown class="profile" :items="items">
        <template #default>
            <Avatar class="profile-avatar" src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
        </template>
        <template #item="props">
            <Container class="profile-item">
                <Text class="profile-item-text">
                    {{ props.item.label }}
                </Text>
                <Icon class="profile-item-icon" :name="props.item.icon"/>
            </Container>
        </template>
    </Dropdown>
</template>

<style>
    .profile {
        @apply flex justify-center items-center h-16;
    }

    .profile-avatar {
        @apply flex justify-center items-center h-8;
    }

    .profile-item {
        @apply flex justify-between items-center h-8
    }

    .profile-item-text {
        @apply flex h-4;
    }

    .profile-item-icon {
        @apply flex h-4 w-4;
    }
</style>