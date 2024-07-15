const userStore = useUserStore();
const router = useRouter();

export default defineNuxtRouteMiddleware(async () => {
    const user = userStore.getUser();

    if(user.value === null) {
        return await router.push("/auth/login");
    }
    else {
        return true;
    }
});