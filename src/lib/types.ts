


export interface Project {
    title: string;
    imageUrl: string;
    heroImageUrl?: string;
    heroVideoUrl?: string;
    heroIsVertical?: boolean;
    excerpt: string;
    slug: string;
    frameworks: string[];
    languages: string[];
    roles: string[];
    externalUrl?: string;
    media: string[];
    body: string;
    platforms: string[];

}

export interface LiteProject {
    title: string;
    imageUrl: string;
    externalUrl?: string;
    tech?: string[]

}