<template>
    <Html class="html">
        <Head>
            <Title>
                Application
            </Title>
        </Head>
        <Body class="body">
            <NuxtPage/>
        </Body>
    </Html>
</template>

<style lang="scss">
    .html {
        @apply flex flex-col justify-center items-center w-full min-w-full h-full min-h-full text-base;
    }

    .body {
        @apply flex flex-col justify-center items-center w-full min-w-full h-full min-h-full text-base;
    }

    #__nuxt {
        @apply flex flex-col justify-center items-center w-full min-w-full h-full min-h-full text-base;
    }
</style>