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

    import l2 from '$lib/images/devlogs/broad_bvh/L2.png';
    import l9 from '$lib/images/devlogs/broad_bvh/L9.png';
</script>

<Row>
    <Column>
        <h1>Narrow Bounding Volume Hierarchy</h1>
    </Column>
</Row>

<Row>
    <Column>
        <p>
            During hit scanning and collisions, we need to find the best fitting point or triangle on a mesh. Previously, we ran a brute force algorithm to check every feature on a mesh to find the best match. With the BVH, we can use O(logn) algorithms to find these features instead. 
        </p>
        <p style='padding-top:1vh;'>
            The narrow BVH uses a binary tree to recursively divide the mesh's triangles into AABBs. The BVH uses a surface area heuristic to improve the quality of divisions in the tree.
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
            From my testing, the speed increases from the BVH appear to increase exponentially however they may be inefficient for smaller shapes. To fix this issue, I plan on implimenting a separate method for accessing data from cuboids since it's the most common shape used in the engine. 
        </p>
        <p style='padding-top:1vh;'>
            While the BVH is in a decent state, there are still a few bugs left to sort out. There are issue with getting the best intersected triangle with models over 10,000 vertices. Also I believe that there are structural improvements that can be made to the BVH to improve performance. 
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