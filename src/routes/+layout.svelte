<script lang='ts'>
    import '$lib/app.css'
    import 'carbon-components-svelte/css/g90.css';
    import {
        LogoGithub,
        LogoYoutube
    } from 'carbon-icons-svelte';
    import basilisk from '$lib/images/basilisk_white.svg';
</script>

<div class='top-nav'>
    <div class='top-nav-ui'>
        <div class='left'>
            <div class='basilisk-container'>
                <a href='/'>
                    <img src={basilisk} alt='Basilisk Engine Logo' class='basilisk-logo'/>
                </a>
            </div>
            <a href='/'>
                <div class='nav-box'>
                    <p>Features</p>
                </div>
            </a>
            <a href='/dev'>
                <div class='nav-box'>
                    <p>Blog</p>
                </div>
            </a>
            <!-- <a href='/how'>
                <div class='nav-box'>
                    <p>How it Works</p>
                </div>
            </a> -->
        </div>
        <a href='/docs'>
            <div class='nav-box docs'>
                <p>Docs</p>
            </div>
        </a>
    </div>
</div>

<slot />

<style>
    .top-nav {
        background-color: rgba(134,144,154,0.15);
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 8;
    }

    .top-nav-ui {
        width: 70%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

    .nav-box {
        display: table;
        height: 100%;
        padding-left: 30px;
        padding-right: 30px;
        text-align: center;
        white-space: nowrap;
    }

    .nav-box p {
        display: table-cell;
        vertical-align: middle;
        font-weight: 200;
        font-size: large;
    }

    .nav-box:hover {
        background-color: rgba(239, 239, 239, 0.1);
    }

    a {
        text-decoration: none;
        color: var(--white)
    }

    .left {
        justify-self: left;
        display: flex;
    }

    .docs {
        justify-self: right;
    }

    .basilisk-logo {
        aspect-ratio: 1;
        height: 100%;
        overflow: hidden;
    }

    .basilisk-container {
        height: 100%;
        justify-content: center;
    }

    .basilisk-container:hover {
        background-color: rgba(239, 239, 239, 0.1);
    }
</style>