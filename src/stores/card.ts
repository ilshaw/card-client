const internalFetch = useInternalFetch();

export const useCardStore = defineStore("card", () => {
    const card = ref();

    async function fetchCard() {
        const response = await internalFetch.get<{ card: unknown }>("/api/user/card", {
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
                const response = await internalFetch.get<{ card: unknown }>("/api/user/card", {
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

    function setCard(value: unknown) {
        return card.value = value;
    }
 
    return { 
        fetchCard,
        getCard, 
        setCard 
    };
});