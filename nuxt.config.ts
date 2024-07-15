export default defineNuxtConfig({
    modules: [
        "@pinia/nuxt", 
        "@nuxt/image",
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