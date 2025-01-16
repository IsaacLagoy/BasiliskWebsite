<script lang='ts'>
    import {derived, writable} from 'svelte/store';

    import {
        ChevronRight,
        ChevronDown
    } from 'carbon-icons-svelte';

    export let title: string
    export let links: {title: string, href: string}[]

    const isOpen = writable(false);
    const buttonClass = derived(
        isOpen, $isOpen => ($isOpen ? 'purple-background' : '')
    )

    function toggle() {
        isOpen.update(value => ! value);
    }
</script>

<div>
    <button onclick={toggle} class={$buttonClass}>
        <div class='menu'>
            <div class='chevron'>
                {#if $isOpen}
                    <ChevronDown size={24}/>
                {:else}
                    <ChevronRight size={24}/>
                {/if}
            </div>
            <p class='title'>{title}</p>
        </div>
        
    </button>
    <div>
        {#if $isOpen}
        {#each links as link}
            <a href={link.href} style='text-decoration: none;' data-sveltekit-reload>
                <div class='menu-item'>
                    <p class='item-title'>{link.title}</p>
                </div>
            </a>
        {/each}
    {/if}
    </div>
</div>

<style>
    button {
        background-color: rgba(0, 0, 0, 0);
        border: 0px solid #000000;
        width: 100%;
        justify-content: left;
    }

    button:hover, .menu-item:hover {
        background-color: rgba(60, 79, 84, 0.3);
    }

    .menu {
        display: flex;
        color: var(--light-purple);
        width: 100%;
        padding-top: 5px;
    }

    .purple-background {
        background-color: var(--dark-purple);
    }

    .menu-item {
        color: var(--white);
        padding-left: 20px;
    }

    .chevron {
        aspect-ratio: 1;
    }

    .title {
        padding-left: 10px;
        font-weight: 900;
    }

    .item-title {
        padding-left: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
    }    
</style>