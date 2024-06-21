export const useUserStore = defineStore("user", () => {
    const user = ref();

    function getUser() {
        return user;
    }

    function setUser(value: unknown) {
        return user.value = value;
    }
 
    return { 
        getUser, 
        setUser 
    };
})