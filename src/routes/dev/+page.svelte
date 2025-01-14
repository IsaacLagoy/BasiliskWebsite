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
                            <p class='date'>1/14/25</p>
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
        margin-top: 60px;
        padding-top: 60px;
        background-color: #252525;
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
        height: 95%;
        opacity: 70%;
        transition: all .2s;
    }

    .tile:hover {
        opacity: 100%;
    }

    .thumbnail {
        aspect-ratio: 1;
        width: 100%;
        height: 70%;
        object-fit: cover;
        opacity: 90%;
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

    .date{
        font-weight: 200;
        font-size: smaller;
        margin-top: -4px;
        color: rgb(190, 190, 190);
    }

    .description {
        color: rgb(214, 214, 214);
        font-weight: 200;
        margin-top: 8px;
    }
</style>