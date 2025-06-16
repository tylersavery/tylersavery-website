<script lang="ts">
    import Header from "$lib/components/Header.svelte";
    import { marked, type RendererObject } from "marked"; // markdown parser
    import { onMount } from "svelte";
    const { data } = $props();

    const { project } = data;

    let markdownContainer: HTMLDivElement;

    marked.use({
        renderer: {
            link({ href, title, text }) {
                const titleAttr = title ? ` title="${title}"` : "";
                return `<a href="${href}"${titleAttr} target="_blank" class="font-medium text-accent no-underline hover:underline" rel="noopener noreferrer">${text}</a>`;
            },
        },
    });

    onMount(async () => {
        if (markdownContainer && project.body) {
            markdownContainer.innerHTML = await marked(project.body);
        }
    });
</script>

<svelte:head>
    <title>{project.title} | TylerSavery.com</title>
    <meta name="description" content={project.excerpt} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={project.title} />
    <meta property="og:description" content={project.excerpt} />
    <meta property="og:image" content={project.imageUrl} />
    <meta
        property="og:url"
        content={`https://tylersavery.com/projects/${project.slug}`}
    />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={project.title} />
    <meta name="twitter:description" content={project.excerpt} />
    <meta name="twitter:image" content={project.imageUrl} />
</svelte:head>

<section class="max-w-5xl mx-auto p-6 space-y-8 text-content">
    <div class="py-4"></div>
    <!-- Header -->

    <div class="space-y-2 flex-1 text-left">
        <div class="flex items-center">
            <h1 class="text-5xl flex-1 font-bold">{project.title}</h1>
            <div>
                {#if project.externalUrl}
                    <div class="text-center">
                        <a
                            href={project.externalUrl}
                            target="_blank"
                            rel="noopener"
                            class="btn btn-accent btn-outline hover:text-white"
                        >
                            Visit Project ↗
                        </a>
                    </div>
                {/if}
            </div>
        </div>
        <div class="divider"></div>
        <p class="text-lg text-content text-justify">
            {project.excerpt}
        </p>
    </div>
    <!-- Image -->
    {#if project.heroVideoUrl}
        <video
            src={project.heroVideoUrl}
            muted
            autoplay
            playsinline
            loop
            class={`rounded-box shadow-xl object-cover w-full ${project.heroIsVertical ? "md:w-1/2 mx-auto" : "md:w-full"}`}
        ></video>
    {:else}
        <img
            src={project.heroImageUrl || project.imageUrl}
            alt={project.title}
            class="rounded-box shadow-xl w-full object-cover"
        />
    {/if}

    <!-- Tags -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        {#if project.roles.length > 0}
            <div>
                <h2 class="font-semibold mb-2">Roles</h2>
                <div class="flex flex-wrap gap-2">
                    {#each project.roles as role}
                        <span class="badge badge-primary">{role}</span>
                    {/each}
                </div>
            </div>
        {/if}
        {#if project.languages.length > 0}
            <div>
                <h2 class="font-semibold mb-2">Languages</h2>
                <div class="flex flex-wrap gap-2">
                    {#each project.languages as lang}
                        <span class="badge badge-secondary">{lang}</span>
                    {/each}
                </div>
            </div>
        {/if}
        {#if project.frameworks.length > 0}
            <div>
                <h2 class="font-semibold mb-2">Frameworks</h2>
                <div class="flex flex-wrap gap-2">
                    {#each project.frameworks as fw}
                        <span class="badge badge-info">{fw}</span>
                    {/each}
                </div>
            </div>
        {/if}
        {#if project.platforms.length > 0}
            <div>
                <h2 class="font-semibold mb-2">Platforms</h2>
                <div class="flex flex-wrap gap-2">
                    {#each project.platforms as p}
                        <span class="badge badge-warning">{p}</span>
                    {/each}
                </div>
            </div>
        {/if}
    </div>

    <!-- Body (markdown) -->
    {#if project.body}
        <div
            class="prose prose-invert text-xl max-w-none rounded-xl bg-base-300 p-4 shadow-2xl"
            bind:this={markdownContainer}
        ></div>
    {/if}

    <!-- External Link -->

    <!-- Media Gallery -->
    {#if project.media.length}
        <div class="carousel bg-black rounded-box shadow-xl w-full">
            {#each project.media as url, i (url)}
                <div
                    id={"slide" + (i + 1)}
                    class="carousel-item relative w-full"
                >
                    <img
                        src={url}
                        alt={`Media ${i + 1}`}
                        class="w-full object-contain"
                    />

                    <!-- Nav Arrows -->
                    <div
                        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                    >
                        <a
                            href={`#slide${i === 0 ? project.media.length : i}`}
                            class="btn btn-circle">❮</a
                        >
                        <a
                            href={`#slide${i + 2 > project.media.length ? 1 : i + 2}`}
                            class="btn btn-circle">❯</a
                        >
                    </div>
                </div>
            {/each}
        </div>
    {/if}
</section>
