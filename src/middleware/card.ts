const cardStore = useCardStore();

export default defineNuxtRouteMiddleware(async () => {
    const response = await cardStore.fetchCard();

    if(response.status === 200) {
        return true;
    }
    else {
        return true;
    }
});