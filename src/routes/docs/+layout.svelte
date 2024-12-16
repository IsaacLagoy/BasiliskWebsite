<script lang='ts'>
    import {
        SideNav,
        SideNavItems,
        SideNavLink,
    } from 'carbon-components-svelte';

    let isSideNavOpen = true;
</script>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        <SideNavLink text="Link 1" />
        <SideNavLink text="Link 2" />
        <SideNavLink text="Link 3" />
    </SideNavItems>
</SideNav>

<slot />
