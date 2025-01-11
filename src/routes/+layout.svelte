<script lang='ts'>
    import '$lib/app.css'
    import 'carbon-components-svelte/css/g90.css';
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderGlobalAction,
        HeaderUtilities,
        Content,
        Grid,
    } from 'carbon-components-svelte';
    import {
        LogoGithub,
        LogoYoutube
    } from 'carbon-icons-svelte';
</script>

<Header
  platformName='Basilisk Engine'
  href='/'
>
    <HeaderNav>
        <HeaderNavItem href='/docs' text='Docs'/>
        <!-- <HeaderNavItem href='/how' text='How it Works'/> -->
        <HeaderNavItem href='/dev' text='Dev Logs'/>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction
            iconDescription='GitHub'
            tooltipAlignment='start'
            icon={LogoGithub}
            href='https://github.com/Loffelt/BasiliskEngine'
        />
        <HeaderGlobalAction
            iconDescription='YouTube'
            tooltipAlignment='end'
            href='https://www.youtube.com/@Loffelt'
            icon={LogoYoutube}
        />
    </HeaderUtilities>
</Header>

<Content style='padding-top:0px; padding-bottom:0px;'>

    <div>
        <Grid padding>
            <slot />
        </Grid>
    </div>
</Content>