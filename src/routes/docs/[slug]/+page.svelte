<script lang="ts">
    import { marked } from 'marked';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    // code highlighting
    // import Prism from "prismjs";
    // import "prismjs/themes/prism-tomorrow.css";

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

    :global(h1) {
        font-weight: 900;
    }

    :global(pre) {
        color: red;
        
        background-color: yellow;
        border: 10px solid yellow;
        border-radius: 10px;
    }

    :global(code) {
        padding: 30px;
    }
</style>
