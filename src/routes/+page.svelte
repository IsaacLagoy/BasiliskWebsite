<script lang='ts'>
    import banner from '$lib/images/banner.png';
    import codeSample from '$lib/images/code-sample.png';
    import foil from '$lib/images/foil.png';
    import FeatureTile from '$lib/FeatureTile.svelte';
    import {
        CodeSnippet
    } from 'carbon-components-svelte';
    import { 
        Copy
    } from 'carbon-icons-svelte';

    function copyToClipboard(){
        navigator.clipboard.writeText("pip install basilisk-engine");
    }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet">

<div class="banner">
    <img src={banner} alt="Banner" class="banner-img">
    <div class="banner-content">
        <h1 class="banner-title">
            3D Made Easy
        </h1>
        <button onclick={copyToClipboard} class="pip-snippet">
            <p class="pip-snippet-text"><span style="color: #7E52A0">pip</span> <span style="color: #EDEDED">install</span> <span style="color: #D295BF">basilisk-engine</span> <Copy style="color: #EDEDED" size={24}/></p>
        </button>
    </div>
</div>

<div class="body-container">
    <div class="body">
        <!-- <div class="features-container">
            <h1>Build applications without hassle</h1>
            <div class="features-items">
                <div class="feature-box">
                    <img src={foil} alt="Banner" class="banner-img">
                    <p>Physically based rendering</p>
                </div>
                <div class="feature-box">
                    <img src={banner} alt="Banner" class="banner-img">
                    <p>Built-in physics</p>
                </div>
                <div class="feature-box">
                    <img src={codeSample} alt="Banner" class="banner-img">
                    <p>Quick to start</p>
                </div>
            </div>
        </div> -->

        <div class="features-container">
            <h1>Build applications without hassle</h1>
            <div class="features-items">
                <FeatureTile title="Physically Based Rendering" image={foil} alt="Banner"/>
                <FeatureTile title="Built-In Physics" image={banner} alt="Banner"/>
                <FeatureTile title="Quick to Start" image={codeSample} alt="Banner"/>
            </div>
        </div>

        <div class="news-container">
            <h1>Basilisk news</h1>
            <div class="news-items">
                <div class="big-news">
                    <img src={banner} alt="Banner" class="banner-img">
                    <h1>This is big news</h1>
                    <h2>1/14/25</h2>
                    <p>We will describe what the news is here</p>
                </div>
                <div class="small-news">
                    <div class="small-news-item">
                        <img src={banner} alt="Banner" class="banner-img">
                        <div class="small-news-info">
                            <h1>This is small news</h1>
                            <h2>1/14/25</h2>
                            <p>We will describe what the news is here</p>
                        </div>
                    </div>
                    <div class="small-news-item">
                        <img src={banner} alt="Banner" class="banner-img">
                        <div class="small-news-info">
                            <h1>This is small news</h1>
                            <h2>1/14/25</h2>
                            <p>We will describe what the news is here</p>
                        </div>
                    </div>
                    <div class="small-news-item">
                        <img src={banner} alt="Banner" class="banner-img">
                        <div class="small-news-info">
                            <h1>This is small news</h1>
                            <h2>1/14/25</h2>
                            <p>We will describe what the news is here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="footer-container">
    
</div>
    
<style>
    @import './home.css';
</style>