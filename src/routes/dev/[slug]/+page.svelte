<script lang='ts'>
    import { marked } from 'marked';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let markdownContent: string | Promise<string>;

    onMount(async () => {
        const slug = $page.params.slug;

        try {
            const markdownModule = await import(`$lib/dev/${slug}.md?raw`);
            markdownContent = marked(markdownModule.default);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
            markdownContent = 'Error: File not found.';
        }
    });
</script>

<div class='page-center'>
    <div class='markdown-container'>
        {@html markdownContent}
    </div>
</div>

<style>
    .page-center {
        padding-top: 50px;
    }

    .markdown-container {
        padding-top: 60px;
        width: 100%;
        overflow: hidden;
        padding: 1vw;
        padding-bottom: 200px;
    }

    :global(table) {
        font-size: 16px;
        width: 100%;
        height: 10vh;
    }

    :global(tr) {
        height: 45px;
    }

    :global(td, th) {
        margin: 100px;
        border: 1px solid #333333;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>