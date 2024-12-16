<script lang='ts'>
    import {
        Row,
        Column,
        Button
    } from 'carbon-components-svelte';

    import {
        Document
    } from 'carbon-icons-svelte';

    import spring_2024 from '$lib/images/tagd_spring_2024.png';
    import fall_2024 from '$lib/images/tagd_fall_2024.png';
    import basilisk_engine_white from '$lib/images/basilisk_engine_white.svg';
    import basilisk_white from '$lib/images/basilisk_white.svg'
</script>

<Row>                                                                                   
    <Column>
        <img src={basilisk_engine_white} alt='Basilisk Engine'/>
    </Column>
</Row>

<Row>
    <Column class='center'>
        <h2>Coming soon to a Python environment near you!</h2>
        <p>We aim to release the first public version of Basilisk Engine in January 2025</p>
    </Column>
</Row>

<div class='top-padding'>
    <Row>
        <Column>
            <h1 class='center'>Information Station</h1>
        </Column>
    </Row>
    <Row>
        <Column>
            <p>Learn how to use Basilisk Engine </p>
        </Column>
        <Column class='center'>
            <Button kind='tertiary' icon={Document} href='/docs'>Documentation</Button>
        </Column>
    </Row>
    <Row>
        <Column>
            <p>We're currently working on a "how it works" page for our engine. Working on Basilisk has required us to research topics scattered all across the web. We hope to provide consolidated information to anyone curious about engine design to lower the barrier to entry. </p>
        </Column>
    </Row>
</div>

<div class='top-padding'>
    <Row>
        <Column>
            <h1 class='center'>Meet our Team</h1>
        </Column>
    </Row>
    <Row>
        <Column>
            <div style='position:relative; height:32vh;'>
                <div class='thumbnail-back ij-top'>
                    <img src={fall_2024} alt='TAGD Fall 2024 Game Jam' class='contained'/>
                </div>
                <div class='thumbnail-back ij-bottom'>
                    <img src={spring_2024} alt='TAGD Spring 2024 Game Jam' class='contained'/>
                </div>
            </div>
        </Column>
        <Column>
            <p style='padding: 10px;'>
                Our team is currently two people, Isaac Lagoy and Jonah Coffelt. We're both incredibly dedicated sophomores studying computer science at Texas A&M. We started working together and developing Basilisk Engine at TAGD, the Texas A&M Game Developer's Club.
            </p>
        </Column>
    </Row>
    <Row class='center'>
        <Column>
            <h2>Isaac Lagoy</h2>
            <p style='padding: 10px;'>
                Developed the physics and collision pipeline
            </p>
            <Button kind='tertiary' href='https://www.isaaclagoy.com'>Learn More</Button>
        </Column>
        <Column>
            <h2>Jonah Coffelt</h2>
            <p style='padding: 10px;'>
                Developed the graphics and rendering pipeline
            </p>
            <Button kind='tertiary' disabled>Needs Link</Button>
        </Column>
    </Row>
</div>

<div class='top-padding'>
    <Row>
        <Column>
            <h1 class='center'>Contact Us</h1>
        </Column>
    </Row>
    <Row>
        <Column>
            <p>We love feedback so feel free to contact us if you have any questions about or suggestions for Basilisk Engine!</p>
        </Column>
        <Column class='center'>
            <p>basiliskengine@gmail.com</p>
        </Column>
    </Row>
</div>

<div class='top-padding page-end'>
    <div>
        <img src={basilisk_white} alt='Basilisk'/>
    </div>
</div>

<style>
    .ij-top {
        width: 22vh;
        left: 17vh;
        top: 0;
    }
    .ij-bottom {
        z-index: 1;
        width: 22vh;
        top: 10vh;
    }
    .top-padding {
        padding-top: 5vh;
    }
    .page-end {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 20vh;
    }
    .page-end img {
        position: absolute;
        margin: auto;
        top: 7vh;
        height: 40vh;
        width: 100%;
    }
</style>