<script>
    import '$lib/app.css'
    import 'carbon-components-svelte/css/g90.css';
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavLink,
        SideNavItems,
        Content,
        Grid,
    } from 'carbon-components-svelte';

    let isSideNavOpen = false;
</script>

<Header
  persistentHamburgerMenu={true}
  platformName='Basilisk Engine'
  href='/'
  bind:isSideNavOpen
>
    <HeaderNav>
        <HeaderNavItem href='/docs' text='Docs'/>
        <HeaderNavItem href='/how' text='How it Works'/>
    </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink href='/docs' text='Docs'/>
        <SideNavLink href='/how' text='How it Works'/>
    </SideNavItems>
</SideNav>

<Content style='padding-top:0px; padding-bottom:0px;'>
    <div class='page-center'>
        <Grid padding>
            <slot />
        </Grid>
    </div>
</Content>