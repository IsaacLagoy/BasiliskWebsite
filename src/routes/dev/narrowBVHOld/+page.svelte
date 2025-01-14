<script lang='ts'>
    import {
        Row,
        Column,
        StructuredList,
        StructuredListHead,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
    } from 'carbon-components-svelte';

    import l2 from '$lib/images/devlogs/narrow_bvh/L2.png';
    import l9 from '$lib/images/devlogs/narrow_bvh/L9.png';
</script>

<Row>
    <Column>
        <h1></h1>
    </Column>
</Row>

<Row>
    <Column>
        <p>
            
        </p>
        <p style='padding-top:1vh;'>
            
        </p>
    </Column>
</Row>

<Row>
    <Column class='center'>
        <div class='thumbnail-back monkey'>
            <img src={l2} alt='Layer 2' class='contained'/>
        </div>
        <div class='monkey-label'></div>
        <h2>Layer 2</h2>
    </Column>
    <Column class='center'>
        <div class='thumbnail-back monkey'>
            <img src={l9} alt='Layer 9' class='contained'/>
        </div>
        <div class='monkey-label'></div>
        <h2>Layer 9</h2>
    </Column>
</Row>

<Row>
    <Column>
        <StructuredList style='margin-bottom:10px;'>
            <StructuredListHead>
                <StructuredListRow head>
                    <StructuredListCell head>Access</StructuredListCell>
                    <StructuredListCell head>Speed Increase Cube</StructuredListCell>
                    <StructuredListCell head>Speed Incerase Monkey</StructuredListCell>
                </StructuredListRow>
            </StructuredListHead>
            <StructuredListBody>
                <StructuredListRow>
                    <StructuredListCell>Vertex</StructuredListCell>
                    <StructuredListCell>-30%</StructuredListCell>
                    <StructuredListCell>1090%</StructuredListCell>
                </StructuredListRow>
                <StructuredListRow>
                    <StructuredListCell>Triangle</StructuredListCell>
                    <StructuredListCell>-22%</StructuredListCell>
                    <StructuredListCell>1930%</StructuredListCell>
                </StructuredListRow>
            </StructuredListBody>
        </StructuredList>
    </Column>
</Row>

<Row>
    <Column>
        <p>
            
        </p>
        <p style='padding-top:1vh;'>
            
        </p>
    </Column>
</Row>

<style>
    .monkey {
        width: 35vh;
        display: block;
        margin: auto;
    }

    .monkey-label {
        height: 37vh;
    }
</style>