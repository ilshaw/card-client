const userStore = useUserStore();

export default defineNuxtRouteMiddleware(async () => {
    const user = userStore.getUser();

    if(user.value === null) {
        const response = await userStore.fetchUserProfile();

        if(response.status === 200) {
            return true;
        }
        else {
            return true;
        }
    }
});