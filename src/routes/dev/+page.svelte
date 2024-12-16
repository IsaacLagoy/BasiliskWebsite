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
            <div>
                
            </div>
        </Column>
    </Row>
{/each}