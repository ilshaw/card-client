export default defineNuxtConfig({
    modules: [
        "@nuxt/ui"
    ],
    nitro: {
        devProxy: {
            "/api": "http://localhost:8080"
        }
    },
    srcDir: "./src",
    ssr: false
});