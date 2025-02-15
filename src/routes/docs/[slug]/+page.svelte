<script lang="ts">
    import { marked } from 'marked';
    import { page } from '$app/stores';

    let markdownContent: string | Promise<string> = 'Loading...';

    // update the markdown when the slug changes
    $: {
        loadMarkdown($page.params.slug);
    }

    async function loadMarkdown(slug: string) {
        // attempt to load markdown file
        try {
            const response = await fetch(`/docs/${slug}.md`);
            if (!response.ok) throw new Error('File not found');

            const text = await response.text();
            markdownContent = marked(text);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
            markdownContent = 'Error: File not found.';
        }
    }
</script>

<div class="markdown-container">
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
