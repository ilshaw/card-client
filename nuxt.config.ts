export default defineNuxtConfig({
    dir: {
        app: "./src",
        pages: "./src/pages",
        middleware: "./src/middlewares"
    },
    nitro: {
        devProxy: {
            "/api": "http://localhost:8080"
        }
    },
    ssr: false
});