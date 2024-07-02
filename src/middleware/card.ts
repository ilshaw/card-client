const cardStore = useCardStore();

export default defineNuxtRouteMiddleware(async () => {
    const card = cardStore.getCard();

    if(card.value === null) {
        const response = await cardStore.fetchUserCard();

        if(response.status === 200) {
            return true;
        }
        else {
            return true;
        }
    }
});