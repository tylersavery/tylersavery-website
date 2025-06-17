<script lang="ts">
    import Bio from "$lib/components/Bio.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import PrimaryHead from "$lib/components/PrimaryHead.svelte";
    import ProjectListItem from "$lib/components/ProjectListItem.svelte";
    import { projects } from "$lib/data/projects";
</script>

<PrimaryHead />

<Hero name="Tyler Savery" photoUrl="#" onContactClick={() => {}} />

<div class="max-w-7xl mx-auto pt-6">
    <Bio />
</div>

<div class=" flex flex-col">
    {#each projects as project}
        <ProjectListItem {...project} />
    {/each}

    <p class="text-xl tracking-wider font-semibold text-center py-4 bg-primary">
        Want to see more? Here are a few <a href="/random" class="link"
            >random projects</a
        >!
    </p>
</div>
