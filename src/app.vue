<template>
    <Html class="_html">
        <Head>
            <Link rel="icon" href="/icons/favicon.ico"/>
            <Title>
                WellCard
            </Title>
        </Head>
        <Body class="_body">
            <NuxtPage/>
        </Body>
    </Html>
</template>

<style lang="scss">
    ._html {
        @apply flex flex-row justify-center items-center min-w-full min-h-screen;
    }

    ._body {
        @apply flex flex-row justify-center items-center min-w-full min-h-screen;
    }

    #__nuxt {
        @apply flex flex-row justify-center items-center min-w-full min-h-screen;
    }
</style>