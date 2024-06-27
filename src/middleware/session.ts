const sessionStore = useSessionStore();

export default defineNuxtRouteMiddleware(async () => {
    const response = await sessionStore.fetchSession();

    if(response.status === 200) {
        return true;
    }
    else {
        return true;
    }
});