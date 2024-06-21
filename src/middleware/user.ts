const fetch = useInternalFetch();
const store = useUserStore();

export default defineNuxtRouteMiddleware(async () => {
    const response = await fetch.get<{ user?: unknown }>("/api/user/profile", {
        credentials: "include"
    });

    if(response.status === 200 && response.body.data && response.body.data.user) {
        store.setUser(response.body.data.user);
    }
    else {
        const response = await fetch.get<{ user?: unknown }>("/api/token/refresh", {
            credentials: "include"
        });

        if(response.status === 200 && response.body.data && response.body.data.user) {
            store.setUser(response.body.data.user);
        }
        else {
            store.setUser(null);
        }
    }
});