const router = useRouter();
const store = useUserStore();

export default defineNuxtRouteMiddleware(async () => {
    const user = store.getUser();

    if(user.value === null) {
        return await router.push("/auth/login");
    }
    else {
        return true;
    }
});