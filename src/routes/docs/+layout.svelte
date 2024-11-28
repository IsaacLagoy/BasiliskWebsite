<script lang='ts'>
    import {
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem
    } from 'carbon-components-svelte';

    let isSideBarOpen = true;
</script>

<SideNav bind:isOpen={isSideBarOpen}>
    <SideNavItems>
      <SideNavMenu text="Menu">
        <SideNavMenuItem href="/" text="Link 1" />
        <SideNavMenuItem href="/" text="Link 2" />
        <SideNavMenuItem href="/" text="Link 3" />
      </SideNavMenu>
    </SideNavItems>
  </SideNav>

<slot />