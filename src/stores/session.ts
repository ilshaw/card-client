const internalFetch = useInternalFetch();

export const useSessionStore = defineStore("session", () => {
    const session = ref<any>(null);

    async function fetchUserSession() {
        const response = await internalFetch.get<{ session: any }>("/api/user/session", {
            credentials: "include"
        });
    
        if(response.status === 200 && response.body.data && response.body.data.session) {
            return (setSession(response.body.data.session), response);
        }
        else {
            const response = await internalFetch.get("/api/session/refresh", {
                credentials: "include"
            });
    
            if(response.status === 200) {
                const response = await internalFetch.get<{ session: any }>("/api/user/session", {
                    credentials: "include"
                });
    
                if(response.status === 200 && response.body.data && response.body.data.session) {
                    return (setSession(response.body.data.session), response);
                }
                else {
                    return (setSession(null), response);
                }
            }
            else {
                return (setSession(null), response);
            }
        }
    }

    function getSession() {
        return session;
    }

    function setSession(value: any) {
        return session.value = value;
    }
 
    return { 
        fetchUserSession,
        getSession, 
        setSession 
    };
});