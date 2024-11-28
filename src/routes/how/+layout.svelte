<script lang='ts'>
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
    } from 'carbon-components-svelte';

    let isSideNavOpen = true;

    const toggleSideNav = () => {
        isSideNavOpen = !isSideNavOpen;
    };
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
        <SideNavMenu text="Physics Pipeline">
            <SideNavMenuItem text="Movement" />
            <SideNavMenuItem text="Collisions" />
            <SideNavMenuItem text="etc" />
        </SideNavMenu>
        <SideNavMenu text="Graphics Pipeline">
            <SideNavMenuItem text="Batching" />
            <SideNavMenuItem text="What's a shader" />
            <SideNavMenuItem text="graphics guy" />
        </SideNavMenu>
    </SideNavItems>
</SideNav>

<slot />