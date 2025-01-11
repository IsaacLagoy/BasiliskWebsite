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
    import banner from '$lib/images/banner.png';
    import basilisk_engine_white from '$lib/images/basilisk_engine_white.svg';
    import basilisk_white from '$lib/images/basilisk_white.svg'
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">

<div class="banner">
    <img src={banner} alt="Banner" class="banner-img">
    <div class="banner-content">
        <h1 class="banner-title">
            3D Made Easy
        </h1>
        <div class="pip-snippet">
            <p class="pip-snippet-text"><span style="color: #7E52A0">pip</span> install <span style="color: #D295BF">basilisk-engine</span></p>
        </div>
    </div>
</div>

<div class="body">

</div>
    
<style>
    @import './home.css';
</style>