<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectListItem from "$lib/components/ProjectListItem.svelte";
    import { projects } from "$lib/data/projects";
</script>

<svelte:head>
    <title>Tyler Savery | Creative Technologist & Founder</title>
    <meta
        name="description"
        content="Tyler Savery — creative technologist, co-founder of The Young Astronauts and VerifiedX. Work includes projects for Nike, Amazon, Ariana Grande, and more."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#111111" />
    <meta name="author" content="Tyler Savery" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta
        property="og:title"
        content="Tyler Savery | Creative Technologist & Founder"
    />
    <meta
        property="og:description"
        content=" Tyler Savery — creative technologist, co-founder of The Young Astronauts and VerifiedX. Work includes projects for Nike, Amazon, Ariana Grande, and more."
    />
    <meta property="og:image" content="https://tylersavery.com/og-image.jpg" />
    <meta property="og:url" content="https://tylersavery.com/" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
        name="twitter:title"
        content="Tyler Savery | Creative Technologist & Founder"
    />
    <meta
        name="twitter:description"
        content="Tyler Savery — creative technologist, co-founder of The Young Astronauts and VerifiedX. Work includes projects for Nike, Amazon, Ariana Grande, and more."
    />
    <meta name="twitter:image" content="https://tylersavery.com/og-image.jpg" />
</svelte:head>

<Hero name="Tyler Savery" photoUrl="#" onContactClick={() => {}} />

<div class=" flex flex-col">
    {#each projects as project}
        <ProjectListItem {...project} />
    {/each}

    <p class="text-xl tracking-wider font-semibold text-center py-4 bg-primary">
        More Projects Listing Soon!
    </p>
</div>
