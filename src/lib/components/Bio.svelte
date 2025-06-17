<script lang="ts">
    import { onMount } from "svelte";
    import { bioExcerpt, fullBio } from "$lib/data/bio";

    import { marked } from "marked";

    let markdownContainer: HTMLDivElement;

    let expanded = $state(false);

    marked.use({
        renderer: {
            link({ href, title, text }) {
                const titleAttr = title ? ` title="${title}"` : "";
                return `<a href="${href}"${titleAttr} target="_blank" class="font-medium text-accent no-underline hover:underline" rel="noopener noreferrer">${text}</a>`;
            },
        },
    });

    onMount(() => {
        renderBio();
    });

    const renderBio = async () => {
        if (markdownContainer) {
            markdownContainer.innerHTML = await marked(
                expanded ? fullBio : bioExcerpt,
            );
        }
    };
</script>

<div class="   rounded-xl bg-base-300 p-4 shadow-2xl">
    <div
        bind:this={markdownContainer}
        class="prose text-xl w-full prose-invert max-w-none"
    ></div>
    <div class="mt-2">
        <button
            class="btn btn-sm btn-outline"
            onclick={() => {
                expanded = !expanded;
                renderBio();
            }}>{expanded ? "Show Less" : "Read More"}</button
        >
    </div>
</div>
