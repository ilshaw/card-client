const internalFetch = useInternalFetch();

export const useSessionStore = defineStore("session", () => {
    const session = ref();

    async function fetchSession() {
        const response = await internalFetch.get<{ session: unknown }>("/api/user/session", {
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
                const response = await internalFetch.get<{ session: unknown }>("/api/user/session", {
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

    function setSession(value: unknown) {
        return session.value = value;
    }
 
    return { 
        fetchSession,
        getSession, 
        setSession 
    };
});