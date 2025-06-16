<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectListItem from "$lib/components/ProjectListItem.svelte";
    import { projects } from "$lib/data/projects";
</script>

<Hero name="Tyler Savery" photoUrl="#" onContactClick={() => {}} />

<div class=" flex flex-col bg-[#c7d6dd]">
    {#each projects as project}
        <ProjectListItem {...project} />
    {/each}
</div>
