<script lang='ts'>
    export let data;

    $: ({ logs } = data);

    import {
        Row,
        Column
    } from 'carbon-components-svelte';
</script>

<Row>
    <Column>
        <h1>Dev Logs</h1>
    </Column>
</Row>

{#each logs as log}
    <Row>
        <Column>
            <a href={`/dev/${log.href}`} style='text-decoration:none; color:white;'>
                {#if log.contributor === 'Isaac Lagoy'}
                    <div class='log right'>
                        <div class='bubble'>
                            <div class='content'>
                                <h2>{log.title}</h2>
                                <p>{log.description}</p>
                            </div>
                        </div>
                        <div class='icon'>
                            <p>IL</p>
                        </div>
                    </div>
                {:else}
                    <div class='log left'>
                        <div class='icon'>
                            <p>JC</p>
                        </div>
                        <div class='bubble'>
                            <div class='content'>
                                <h2>{log.title}</h2>
                                <p>{log.description}</p>
                            </div>
                        </div>
                    </div>
                {/if}
            </a>
        </Column>
    </Row>
{/each}

<style>
    :root {
        --bubble-border: #FFFFFF;
        --bubble-border-hover: #004FB9;
    }

    .log {
        display: flex;
        justify-content: flex-start;
    }

    .bubble {
        position: relative;
        border-radius: 1vh;
        border: var(--bubble-border) solid 3px;
        text-decoration: none;
        max-width: fit-content;
        padding: 7px;
        margin-right: 5vw;
        margin-left: 5vw;
    }

    .content {
        max-width: fit-content;
        flex-direction: row;
    }

    .right {
        float: right;
    }

    .right .bubble::after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid var(--bubble-border);
        border-right: 10px solid transparent;
        border-top: 1vh solid var(--bubble-border);
        border-bottom: 1vh solid transparent;
        right: -20px;
        top: 1.8vh;
    }

    .left {
        float: left;
    }

    .left .bubble::after {
        content: "";
        width: 0px;
        height: 0px;
        position: absolute;
        border-right: 10px solid var(--bubble-border);
        border-left: 10px solid transparent;
        border-top: 1vh solid var(--bubble-border);
        border-bottom: 1vh solid transparent;
        left: -20px;
        top: 1.8vh;
    }

    .bubble:hover {
        border: var(--bubble-border-hover) solid 3px;
    }

    .right .bubble:hover::after {
        border-left: 10px solid var(--bubble-border-hover);
        border-top: 1vh solid var(--bubble-border-hover);
    }

    .left .bubble:hover::after {
        border-right: 10px solid var(--bubble-border-hover);
        border-top: 1vh solid var(--bubble-border-hover);
    }

    .bubble .content * {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }

    .content h2 {
        padding-right: 10px;
    }

    .icon {
        content: "";
        border: var(--bubble-border) solid 3px;
        border-radius: 3vh;
        aspect-ratio: 1;
        height: 5vh;
        text-align: center;
    }

    .icon * {
        display: inline-block;
        vertical-align: middle;
        line-height: 4.5vh;
        height: 100%;
    }
</style>