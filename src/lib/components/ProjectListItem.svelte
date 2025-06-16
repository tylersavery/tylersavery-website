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
            <h1 class="text-5xl font-bold">
                {project.title}
            </h1>
            <p class="py-6">
                {project.excerpt}
            </p>
            <div class="flex items-center">
                <div class="flex-1 gap-y-2 flex flex-col">
                    <div class="flex gap-2 flex-wrap">
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
                                data-tip="framework">{item}</span
                            >
                        {/each}
                    </div>
                </div>
                <button
                    class="btn btn-outline btn-accent rounded-4xl hover:text-white"
                    >About Project</button
                >
            </div>
        </div>
    </div>
</a>
