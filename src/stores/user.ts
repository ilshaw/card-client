const internalFetch = useInternalFetch();

export const useUserStore = defineStore("user", () => {
    const user = ref<any>(null);

    async function fetchUserProfile() {
        const response = await internalFetch.get<{ user: any }>("/api/user/profile", {
            credentials: "include"
        });
    
        if(response.status === 200 && response.body.data && response.body.data.user) {
            return (setUser(response.body.data.user), response);
        }
        else {
            const response = await internalFetch.get("/api/session/refresh", {
                credentials: "include"
            });
    
            if(response.status === 200) {
                const response = await internalFetch.get<{ user: any }>("/api/user/profile", {
                    credentials: "include"
                });
    
                if(response.status === 200 && response.body.data && response.body.data.user) {
                    return (setUser(response.body.data.user), response);
                }
                else {
                    return (setUser(null), response);
                }
            }
            else {
                return (setUser(null), response);
            }
        }
    }

    async function fetchAuthLogout() {
        const response = await internalFetch.get("/api/auth/logout", {
            credentials: "include"
        });
    
        if(response.status === 200) {
            return (setUser(null), response);
        }
        else {
            const response = await internalFetch.get("/api/session/refresh", {
                credentials: "include"
            });
    
            if(response.status === 200) {
                const response = await internalFetch.get("/api/auth/logout", {
                    credentials: "include"
                });
    
                if(response.status === 200) {
                    return (setUser(null), response);
                }
                else {
                    return (setUser(null), response);
                }
            }
            else {
                return (setUser(null), response);
            }
        }
    }

    async function fetchAuthSignup(password: string, email: string) {
        const body = JSON.stringify({
            password: password,
            email: email
        });

        const response = await internalFetch.post<{ user: any }>("/api/auth/signup", {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: body
        });

        if(response.status === 201 && response.body.data && response.body.data.user) {
            return (setUser(response.body.data.user), response);
        }
        else {
            return (setUser(null), response);
        }
    }

    async function fetchAuthLogin(password: string, email: string) {
        const body = JSON.stringify({
            password: password,
            email: email
        });

        const response = await internalFetch.post<{ user: any }>("/api/auth/login", {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: body
        });

        if(response.status === 200 && response.body.data && response.body.data.user) {
            return (setUser(response.body.data.user), response);
        }
        else {
            return (setUser(null), response);
        }
    }

    function getUser() {
        return user;
    }

    function setUser(value: any) {
        return user.value = value;
    }

    return { 
        fetchUserProfile,
        fetchAuthLogout,
        fetchAuthSignup,
        fetchAuthLogin,
        getUser, 
        setUser 
    };
});