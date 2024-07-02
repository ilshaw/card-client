const internalFetch = useInternalFetch();

export const useCardStore = defineStore("card", () => {
    const card = ref(null);

    async function fetchCardCreate(description: string, links: [{ type: string, url: string }]) {
        const body = JSON.stringify({
            description: description,
            links: links
        });

        const response = await internalFetch.post<{ card: any }>("/api/card/create", {
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: body
        });

        if(response.status === 201 && response.body.data && response.body.data.card) {
            return (setCard(response.body.data.card), response);
        }
        else {
            return (setCard(null), response);
        }
    }

    async function fetchUserCard() {
        const response = await internalFetch.get<{ card: any }>("/api/user/card", {
            credentials: "include"
        });
    
        if(response.status === 200 && response.body.data && response.body.data.card) {
            return (setCard(response.body.data.card), response);
        }
        else {
            const response = await internalFetch.get("/api/session/refresh", {
                credentials: "include"
            });
    
            if(response.status === 200) {
                const response = await internalFetch.get<{ card: any }>("/api/user/card", {
                    credentials: "include"
                });
    
                if(response.status === 200 && response.body.data && response.body.data.card) {
                    return (setCard(response.body.data.card), response);
                }
                else {
                    return (setCard(null), response);
                }
            }
            else {
                return (setCard(null), response);
            }
        }
    }

    function getCard() {
        return card;
    }

    function setCard(value: any) {
        return card.value = value;
    }
 
    return { 
        fetchCardCreate,
        fetchUserCard,
        getCard, 
        setCard 
    };
});