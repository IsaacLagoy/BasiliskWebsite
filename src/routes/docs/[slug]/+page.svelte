<script>
    import MarkdownIt from 'markdown-it';
    import file from '$lib/pages/installing.md?raw';
    const md = new MarkdownIt();

    export let data;
</script>

<div>
    {@html md.render(file)}
</div>