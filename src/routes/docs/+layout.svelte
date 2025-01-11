<script lang='ts'>
    import {
        Row,
        Column
    } from 'carbon-components-svelte';
</script>

<div class='page-center'>
    <div class='side-bar'>
        <p>div</p>
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
    }
    
    .doc-page {
        padding-top: 50px;
        background-color: var(--dark-blue);
        min-height: 100vh;
        width: 75%;
    }
    .page-center {
        width: 70%;
        display: flex;
    }
</style>


