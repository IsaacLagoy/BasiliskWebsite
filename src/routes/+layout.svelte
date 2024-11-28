<script>
    import '$lib/app.css'
    import 'carbon-components-svelte/css/g90.css';
    import {
        Header,
        HeaderGlobalAction,
        HeaderUtilities,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        Content,
        Grid
    } from 'carbon-components-svelte';
    import {
        Document,
        Code
    } from 'carbon-icons-svelte';
</script>

<Header platformName='Basilisk Engine' href='/' style='margin-bottom:0px;'>
    <HeaderNav>
        <HeaderNavItem href='/docs' text='Docs'/>
        <HeaderNavItem href='/how' text='How it Works' />
    </HeaderNav>
</Header>

<Content style='padding-top:0px; padding-bottom:0px;'>
    <div class='page-center'>
        <Grid padding>
            <slot />
        </Grid>
    </div>
</Content>

<style>
    div.page-center {
        background-color: #393939;
        min-height: 100vh;
        width: min(100vh, 90vw);
        margin: auto;
        margin-top: 0px;
    }
</style>