export default defineNuxtConfig({
    dir: {
        app: "./src"
    },
    nitro: {
        devProxy: {
            "/api": "http://localhost:8080"
        }
    }
});