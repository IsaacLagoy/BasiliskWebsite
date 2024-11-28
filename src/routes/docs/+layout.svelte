<script lang='ts'>
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavItems,
        SideNavLink,
    } from 'carbon-components-svelte';

    let isSideNavOpen = true;
</script>

<Header
  platformName='Basilisk Engine'
  href='/'
  bind:isSideNavOpen
>
    <HeaderNav>
        <HeaderNavItem href='/docs' text='Docs'/>
        <HeaderNavItem href='/how' text='How it Works' />
    </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink text="Link 1" />
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
    </SideNavItems>
</SideNav>

<slot />
