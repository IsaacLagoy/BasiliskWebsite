<script lang="ts">
    import { marked } from 'marked';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let markdownContent: string | Promise<string> = 'Loading...';
    let isMounted = false;

    // Fetch markdown when the page first loads
    onMount(() => {
        isMounted = true;
        loadMarkdown($page.params.slug);
    });

    // Reactive statement to re-fetch markdown when slug changes
    $: {
        if (isMounted && $page.params.slug) {
            loadMarkdown($page.params.slug);
        }
    }

    async function loadMarkdown(slug: string) {
        if (!slug) {
            markdownContent = 'Error: No document specified.';
            return;
        }

        try {
            const response = await fetch(`/dev/${slug}.md`);
            if (!response.ok) throw new Error('File not found');

            const text = await response.text();
            markdownContent = marked(text);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
            markdownContent = 'Error: File not found.';
        }
    }
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