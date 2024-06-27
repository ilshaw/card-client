const userStore = useUserStore();

export default defineNuxtRouteMiddleware(async () => {
    const response = await userStore.fetchProfile();

    if(response.status === 200) {
        return true;
    }
    else {
        return true;
    }
});