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
    ])

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
    <Dropdown :items="items">
        <template #default>
            <Avatar src="https://avatars.githubusercontent.com/u/73400369?v=4"/>
        </template>
        <template #item="props">
            <Container class="container-profile">
                <Text>
                    {{ props.item.label }}
                </Text>
                <Icon :name="props.item.icon"/>
            </Container>
        </template>
    </Dropdown>
</template>

<style>
    .container-profile {
        @apply flex flex-row justify-between items-center w-full p-0 m-0;
    }
</style>