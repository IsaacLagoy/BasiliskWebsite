<script lang='ts'>
    import {
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
    } from 'carbon-components-svelte';

    let isSideNavOpen = true;
</script>

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