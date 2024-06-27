<template>
    <Html class="html">
        <Head>
            <Link rel="icon" href="/icons/favicon.ico"/>
            <Title>
                WellCard
            </Title>
        </Head>
        <Body class="body">
            <NuxtPage/>
        </Body>
    </Html>
</template>

<style lang="scss">
    .html {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        height: 100%;
        width: 100%;
    }

    .body {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        height: 100%;
        width: 100%;
    }

    #__nuxt {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        place-items: center;
        min-height: 100%;
        min-width: 100%;
        display: grid;
        height: 100%;
        width: 100%;
    }
</style>