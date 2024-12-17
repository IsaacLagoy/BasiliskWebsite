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
    import { onMount } from 'svelte';
    let wavePath = '';
    let headPosition = { x: 0, y: 50 };
    let waveOffset = 0;

    // snake
    const generateWavePath = (amplitude: number, frequency: number, phase: number) => {
        let path = '';
        const width = 95; // SVG width in percentage
        for (let x = 0; x <= width; x++) {
        const y = 50 + amplitude * Math.sin((frequency * x + phase) * Math.PI / 180);
        if (x === 0) {
            path += `M ${x},${y} `;
            
        } else if (x === width){
            headPosition = {x: x + 1, y}; 
            path += `L ${x},${y} `; 
        }else {
            path += `L ${x},${y} `; 
        }
        }
        return path;
    };

    // animate
    const updateWave = () => {
        waveOffset = (waveOffset + 2) % 360; 
        wavePath = generateWavePath(10, 15, waveOffset); 
        requestAnimationFrame(updateWave); 
    };

    // start
    onMount(() => {
        updateWave(); 
    });
</script>

<Header
  platformName='Basilisk Engine'
  href='/'
>
    <HeaderNav>
        <HeaderNavItem href='/docs' text='Docs'/>
        <!-- <HeaderNavItem href='/how' text='How it Works'/> -->
        <HeaderNavItem href='/dev' text='Dev Logs'/>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction
            iconDescription='GitHub'
            tooltipAlignment='start'
            icon={LogoGithub}
            href='https://github.com/Loffelt/BasiliskEngine'
        />
        <HeaderGlobalAction
            iconDescription='YouTube'
            tooltipAlignment='end'
            href='https://www.youtube.com/@Loffelt'
            icon={LogoYoutube}
        />
    </HeaderUtilities>
</Header>

<svg
    width='100%'
    height='100%'
    viewBox='0 0 100 80'
    preserveAspectRatio='xMidYMid meet'
>
    <defs>
        <linearGradient id='rainbowGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stop-color='blue' />
            <stop offset='15%' stop-color='green' />
            <stop offset='45%' stop-color='yellow' />
            <stop offset='60%' stop-color='orange' />
            <stop offset='75%' stop-color='red' />
            <stop offset='90%' stop-color='gray' />
            <stop offset='100%' stop-color='gray' />
        </linearGradient>
    </defs>
    <path d={wavePath} fill='none' stroke='url(#rainbowGradient)' stroke-width='5' />
    <rect
        x={headPosition.x - 3}  
        y={headPosition.y - 2.5}
        width='8'
        height='5'
        rx='2.5' 
        fill='gray'
    />
    <circle
        cx={headPosition.x + 0.5} 
        cy={headPosition.y - 0.5} 
        r='1'
        fill='black'
    />
</svg>

<Content style='padding-top:0px; padding-bottom:0px;'>

    <div class='page-center'>
        <Grid padding>
            <slot />
        </Grid>
    </div>
</Content>

<style>
    svg {
        /* background: linear-gradient(to bottom, #f0f8ff, #e0f7fa); */
        position: fixed; 
        top: 0; 
        left: 0; 
        z-index: -1; 
        overflow: hidden;
    }

    path {
        stroke-linecap: round;
    }
</style>