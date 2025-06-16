import { projects } from '$lib/data/projects.js';
import { error, redirect } from '@sveltejs/kit';


export function load({ params }) {

    const slug = params.slug;
    const project = projects.find((p) => p.slug == slug);
    if (!project) {
        throw error(404, "Project Not Found");
    }

    return {
        project: project
    };
}
