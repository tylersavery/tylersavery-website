<script lang="ts">
    import type { Project } from "$lib/types";

    let project: Project = $props();
</script>

<a
    class="hero group bg-base-100 hover:bg-base-200 shadow-sm transition-colors duration-600 ease-in-out border-b border-neutral"
    href={`/project/${project.slug}`}
>
    <div class="hero-content flex-col lg:flex-row py-8">
        <img
            src={project.imageUrl}
            class="w-full max-w-sm rounded-lg shadow-2x group-hover:scale-110 transition-transform duration-600 ease-in-out"
            alt={project.title}
        />
        <div
            class="pl-none md:pl-3 group-hover:translate-x-3 transition-transform duration-600 ease-in-out"
        >
            <h1 class="text-2xl md:text-5xl font-bold text-center md:text-left">
                {project.title}
            </h1>
            <p class="py-6 text-center md:text-left">
                {project.excerpt}
            </p>
            <div class="flex items-center flex-col md:flex-row">
                <div class="flex-1 gap-y-2 flex flex-col">
                    <div
                        class="flex gap-x-2 gap-y-3 flex-wrap justify-center md:justify-start"
                    >
                        {#each project.roles as item}
                            <span
                                class="badge badge-primary tooltip"
                                data-tip="Role">{item}</span
                            >
                        {/each}

                        {#each project.languages as item}
                            <span
                                class="badge badge-secondary tooltip"
                                data-tip="Language">{item}</span
                            >
                        {/each}

                        {#each project.frameworks as item}
                            <span
                                class="badge badge-info tooltip"
                                data-tip="Framework">{item}</span
                            >
                        {/each}
                        {#each project.platforms as item}
                            <span
                                class="badge badge-warning tooltip"
                                data-tip="Platform">{item}</span
                            >
                        {/each}
                    </div>
                </div>
                <button
                    class="btn mt-6 md:mt:0 btn-outline btn-accent rounded-4xl hover:text-white"
                    >About Project</button
                >
            </div>
        </div>
    </div>
</a>
