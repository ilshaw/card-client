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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
    }

    ._body {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
    }

    #__nuxt {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
    }
</style>