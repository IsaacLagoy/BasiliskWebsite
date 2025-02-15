<script lang='ts'>
    import {
        Column
    } from 'carbon-components-svelte'

    export let image: string;
    export let alt: string;
    export let title: string;

</script>

<Column sm={2} md={8} lg={5} noGutter>
    <div class='feature-box-box'>
        <div class="feature-box">
            <img src={image} alt={alt}>
            <p>{title}</p>
        </div>
    </div>
</Column>

<style>

    .feature-box-box {
        height: 65vh;
    }

    .feature-box {
        background-color: #303030;
        width: 100%;
        height: 95%;
        opacity: 70%;
        border-radius: 10px;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        transition: all .2s;
    }

    .feature-box img {
        width: 100%;
        opacity: 90%;
        position: relative;
        height: 80%;
        object-fit: cover;
        transition: all .2s;
    }

    .feature-box:hover {
        opacity: 100%;
        margin-top: -3px;
    }

    .feature-box p {
        color: var(--text-color);
        position: relative;
        padding-top: 4%;
        text-align: center;
        font-size: 28px;
        font-weight: 400;
    }
</style>