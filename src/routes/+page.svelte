<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import PrimaryHead from "$lib/components/PrimaryHead.svelte";
    import ProjectListItem from "$lib/components/ProjectListItem.svelte";
    import { projects } from "$lib/data/projects";
</script>

<PrimaryHead />

<Hero name="Tyler Savery" photoUrl="#" onContactClick={() => {}} />

<div class=" flex flex-col">
    {#each projects as project}
        <ProjectListItem {...project} />
    {/each}

    <p class="text-xl tracking-wider font-semibold text-center py-4 bg-primary">
        More Projects Listing Soon!
    </p>
</div>
