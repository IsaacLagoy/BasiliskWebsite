<script lang='ts'>
    import '$lib/app.css'
    import 'carbon-components-svelte/css/g90.css';
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderGlobalAction,
        HeaderUtilities,
        Content,
        Grid,
    } from 'carbon-components-svelte';
    import {
        LogoGithub,
        LogoYoutube
    } from 'carbon-icons-svelte';
</script>

<div class='top-nav'>
    <div class='top-nav-ui'>
        <div class='left'>
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
            <a href='/how'>
                <div class='nav-box'>
                    <p>How it Works</p>
                </div>
            </a>
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
        background-color: rgba(142, 142, 142, 0.8);
        backdrop-filter: blur(10px);
        backdrop-filter: blur(100px);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }

    .top-nav-ui {
        width: 70%;
        display: flex;
        height: 50px;
        justify-content: space-between;
        justify-self: center;
    }

    .nav-box {
        height: 100%;
        width: 100%;
        width: flex;
    }

    .nav-box:hover {
        background-color: rgba(170, 170, 170, 0.3);
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
</style>