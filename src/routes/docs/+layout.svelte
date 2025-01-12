<script lang='ts'>
    import {
        Row,
        Column
    } from 'carbon-components-svelte';

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
        />
        <SideBarMenu
            title = 'Getting Started'
            links = {[
                {title: 'Installings Basilisk', href: '/docs/installing'},
                {title: 'Making Your First Scene', href: '/docs/firstScene'}
            ]}
        />
    </div>
    <div class='doc-page'>
        <slot />
    </div>
</div>

<style>
    .side-bar {
        background-color: var(--medium-blue);
        min-height: 100vh;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .doc-page {
        padding-top: 50px;
        background-color: var(--dark-blue);
        min-height: 100vh;
        width: 75%;
    }
    .page-center {
        position: relative;
        width: 70%;
        display: flex;
    }
</style>


