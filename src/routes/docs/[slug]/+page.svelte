<script lang='ts'>
    import { marked } from 'marked';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let markdownContent: string | Promise<string>;

    onMount(async () => {
        const slug = $page.params.slug;

        try {
            const markdownModule = await import(`$lib/docs/${slug}.md?raw`);
            markdownContent = marked(markdownModule.default);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
            markdownContent = 'Error: File not found.';
        }
    });
</script>

<div class='markdown-container'>
    {@html markdownContent}
</div>

<style>
    .markdown-container {
        width: 100%;
        overflow: hidden;
        padding: 1vw;
    }

    :global(img) {
        max-width: 100%;
        height: auto;
        display: block;
    }
</style>