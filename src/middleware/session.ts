const sessionStore = useSessionStore();

export default defineNuxtRouteMiddleware(async () => {
    const session = sessionStore.getSession();

    if(session.value === null) {
        const response = await sessionStore.fetchUserSession();

        if(response.status === 200) {
            return true;
        }
        else {
            return true;
        }
    }
});