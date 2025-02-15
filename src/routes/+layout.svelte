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
            <a href='/'>
                <div class='basilisk-container'>
                    <img src={basilisk} alt='Basilisk Engine Logo' class='basilisk-logo'/>
                </div>
            </a>
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
        
        <div class='right'>
            <a href='https://github.com/Loffelt/BasiliskEngine'>
                <div class='nav-box'>
                    <p><LogoGithub class='icon' size={24}/></p>
                </div>
            </a>
            <a href='https://www.youtube.com/channel/UCtcDYCH8pqNxGUZx_zMAYSA'>
                <div class='nav-box'>
                    <p><LogoYoutube class='icon' size={24}/></p>
                </div>
            </a>
            <a href='/docs/installing'>
                <div class='nav-box'>
                    <p>Docs</p>
                </div>
            </a>
        </div>
    </div>
</div>

<slot />

<style>
    .top-nav {
        background-color: rgba(134,144,154,0.15);
        -webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
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

    .right {
        justify-self: right;
        display: flex;
    }

    .basilisk-logo {
        aspect-ratio: 1;
        height: 100%;
        overflow: hidden;
    }

    .basilisk-container {
        display: table;
        justify-content: center;
        aspect-ratio: 1;
        height: 100%;
        width: 100%;
    }

    .basilisk-container:hover {
        background-color: rgba(239, 239, 239, 0.1);
    }
</style>