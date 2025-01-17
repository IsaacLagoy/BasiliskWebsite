
<head>
    <meta charset="utf-8"/>
    <title>Marked in the browser</title>
</head>

<body>
    <div id="content"></div>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        
        const markdownModule = await import(`$lib/docs/${slug}.md?raw`);
        document.getElementById('content').innerHTML = marked.parse("# Hello");
    </script>
</body>

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