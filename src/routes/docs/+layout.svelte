<script lang='ts'>
    import SideBarMenu from '$lib/SideBarMenu.svelte';
</script>

<div class='page-center'>
    <div class='side-bar'>
        <SideBarMenu
            title = 'Getting Started'
            links = {[
                {title: 'Installings Basilisk', href: '/docs/installing'},
                {title: 'Making Your First Scene', href: '/docs/firstScene'}
            ]}
            startsOpen = {true}
        />
        <SideBarMenu
            title = 'Collecting Information'
            links = {[
                {title: 'Collisions', href: '/docs/installing'},
                {title: 'Raycasting', href: '/docs/installing'}
            ]}
            startsOpen = {false}
        />
    </div>
    <div class='doc-page'>
        <slot />
    </div>
</div>

<style>
    .side-bar {
        background-color: #353535;
        height: 100vh;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 60px;
    }
    
    .doc-page {
        padding: 20px;
        padding-top: 50px;
        background-color: var(--medium-grey);
        min-height: 100vh;
        width: 75%;
    }

    .page-center {
        position: relative;
        width: 85%;
        display: flex;
    }
</style>


