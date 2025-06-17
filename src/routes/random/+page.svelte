<script lang="ts">
    import { randomProjects } from "$lib/data/random-projects";
</script>

<section class="p-6 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold text-white mb-6">Random Projects</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each randomProjects as project}
            <a
                href={project.externalUrl ?? "#"}
                target={project.externalUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                class="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />

                <!-- Overlay -->
                <div
                    class="absolute inset-0 flex items-center justify-center text-center transition-opacity duration-300
						bg-black/60 text-white px-4
						md:opacity-0 md:group-hover:opacity-100"
                >
                    <div>
                        <h2 class="text-2xl font-semibold">{project.title}</h2>

                        {#if project.tech && project.tech.length > 0}
                            <div
                                class="flex gap-2 justify-center items-center mt-2"
                            >
                                {#each project.tech as tech}
                                    <div class="badge badge-primary">
                                        {tech}
                                    </div>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </a>
        {/each}
    </div>
</section>
