<script lang='ts'>
    import { marked } from 'marked';

    let markdownContent: string | Promise<string>;

    async function loadMarkdown() {
        const markdownModule = await import(`$lib/pages/installing.md?raw`);
        markdownContent = marked(markdownModule.default);
    }

    loadMarkdown(); 
</script>

<div class='markdown-container'>
    {@html markdownContent}
</div>

<style>
    .markdown-container {
        width: 100%;
        overflow: hidden;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>