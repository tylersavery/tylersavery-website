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

    <p
        class="text-lg md:text-xl tracking-wider font-semibold text-center p-4 bg-primary"
    >
        Want to see more? Here are a few <a href="/random" class="link"
            >random projects</a
        >!
    </p>
    <div
        class="w-full max-w-3xl p-4 mx-auto bg-white rounded-xl shadow-2xl my-4"
    >
        <div class="flex justify-between items-center">
            <h3 class="text-black text-lg font-semibold">My Github Activity</h3>
            <a
                href="https://github.com/tylersavery"
                target="_blank"
                class="btn btn-xs">Visit My Profile</a
            >
        </div>
        <div class="py-1"></div>
        <a href="https://github.com/tylersavery" target="_blank">
            <img
                src="http://ghchart.rshah.org/tylersavery"
                alt="tylersavery's Github chart"
                class="w-full"
            />
        </a>
    </div>
</div>
