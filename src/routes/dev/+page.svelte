<script lang='ts'>
    import foil from '$lib/images/foil.png';
    import {
        Row,
        Column 
    } from 'carbon-components-svelte';

    export let data;

    $: ({ logs } = data);
</script>

<div class='page-center'>
    <div class='grid'>
        {#each logs as log}
            <Column sm={3} md={4} lg={5} >
                <a href={`/dev/${log.href}`}>
                    <div class='tile'>
                        <img src={foil} alt={log.title} class='thumbnail'>
                        <div class='text'>
                            <p class='title'>{log.title}</p>
                            <p class='description'>{log.description}</p>
                        </div>
                    </div>
                </a>
            </Column>
        {/each}
    </div>
</div>

<style>
    .page-center {
        padding-top: 60px;
    }

    .grid {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;

    }

    .tile {
        background-color: #303030;
        border-radius: 10px;
        overflow: hidden;
        height: 100%;
    }

    .thumbnail {
        aspect-ratio: 1;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

    .title {
        font-size: 25px;
        font-weight: 900;
    }

    .text {
        padding: 8px;
    }
</style>