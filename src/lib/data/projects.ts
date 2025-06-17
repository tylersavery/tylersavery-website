import type { Project } from "$lib/types";

const projects: Project[] = [
    {
        imageUrl: "/images/projects/ya/ya.jpg",
        heroImageUrl: "/images/projects/ya/ya-hero.jpg",
        title: "The Young Astronauts",
        slug: "the-young-astronauts",
        excerpt: `The Young Astronauts are a team of multidisciplinary creatives based in Toronto & Los Angeles specializing in 360° Campaigns, Direction, Film, Technology & Design.`,
        frameworks: ["django", "svelte", "flutter"],
        languages: ["python", "javascript", "dart"],
        roles: ["co-founder", "CTO",],
        platforms: [],
        externalUrl: "https://theyoungastronauts.com",
        media: [],
        // media: ["/images/projects/ya/media/1.jpg", "/images/projects/ya/media/2.jpg", "/images/projects/ya/media/3.jpg", "/images/projects/ya/media/4.jpg", "/images/projects/ya/media/5.jpg", "/images/projects/ya/media/6.jpg", "/images/projects/ya/media/7.jpg", "/images/projects/ya/media/8.jpg"],
        body: `

Founded in 2008, [The Young Astronauts](https://theyoungastronauts.com) is a creative and technology studio based in Toronto and Los Angeles. We collaborate with global brands, artists, startups, and entertainment IP to build culturally impactful digital experiences.

I co-founded The Young Astronauts in 2008 and have led our creative and technical direction across a wide range of projects. My work spans product strategy, front-end architecture, UI/UX design, and creative development.

We've partnered with leading companies including **Nike**, **Pepsi**, **Amazon**, and **Apple**, as well as iconic artists such as **Ariana Grande**, **Drake**, and **Bruno Mars**. In addition to large-scale commercial campaigns, we work with tech startups to design and build MVPs, and provide extended creative and marketing support.

Our approach blends storytelling, design, and engineering to deliver unique, high-impact digital work.

`,
    },
    {
        imageUrl: "/images/projects/vfx/vfx.jpg",
        heroVideoUrl: "https://www.youtube.com/watch?v=hgp9nlsWFv8",

        title: "VerifiedX",
        slug: "verified-x",
        excerpt: `VerifiedX (VFX) is an open-source decentralized network that is both a universal layer 1 and a Bitcoin sidechain for the purpose of tokenized self-custody, on-chain storage, and peer-to-peer commerce of both digital & physical assets.`,
        frameworks: ["flutter", "django"],
        languages: ["dart", "python"],
        roles: ["co-founder", "dev"],
        platforms: ['windows', 'mac', 'web'],
        externalUrl: "https://verifiedx.io",
        media: [],
        body: `
[VerifiedX](https://verifiedx.io) is a next-generation Layer 1 blockchain designed for real-world asset validation and secure, transparent transaction infrastructure. Built with performance and integrity at its core, VerifiedX enables decentralized applications and systems that require trust, identity, and verifiability at scale.

As a co-founder of VerifiedX, I lead the development of our **frontend and developer-facing platforms**. My responsibilities include:

- Designing and building the **wallet interfaces** with an emphasis on usability, security, and responsiveness
- Creating the **block explorer** to provide real-time transparency into network activity, smart contracts, and token flows
- Developing the **web-based data API service**, powering dashboards, integrations, and external developer tools

These interfaces are critical to the ecosystem, enabling both end-users and builders to interact confidently with the VerifiedX chain. I work closely with our protocol and infrastructure teams to ensure seamless connectivity between the blockchain core and the UI/API layers.
`,

    },
    {
        imageUrl: "/images/projects/surf/surf.webp",
        heroVideoUrl: "/images/projects/surf/surf-hero.mp4",

        title: "Surf Music",
        slug: "surf-music",
        excerpt: `SURF MUSIC is a digital marketplace ecosystem for music creators and buyers across the global entertainment industry.`,
        frameworks: ["flutter", "django"],
        languages: ["dart", "python"],
        roles: ["CTO", "frontend", "backend"],
        externalUrl: "https://discover.surf",
        platforms: ['web'],
        media: [],
        body: `
[Surf Music](https://discover.surf) is a B2B platform for managing and licensing **exclusive music rights** across artists, labels, and brands. It enables streamlined negotiation, asset management, and usage tracking for high-value music placements in advertising, entertainment, and digital campaigns.


As **CTO** and lead developer at Surf, I architected and built the platform from the ground up — overseeing both **backend** and **frontend** systems. My responsibilities include:

- Building and scaling the **backend** with Django, including custom rights management logic, user roles, contract workflows, and secure asset delivery
- Developing the  **web app** with Flutter for artists and label reps to manage their catalogs and deal activity
- Managing DevOps, deployment pipelines, and integrations with cloud storage, authentication, and legal systems

Surf is purpose-built for speed, clarity, and legal precision — and as CTO, I ensure that every part of the stack supports the needs of a high-trust, business-critical user base.

`,

    },
    {
        imageUrl: "/images/projects/hdreye/hdreye.webp",
        heroVideoUrl: "/images/projects/hdreye/hdreye-hero.mp4",
        heroIsVertical: true,
        title: "HDReye",
        slug: "hdreye",
        excerpt: `HDReye is the first and only iOS app for capturing custom 360° HDRi images with your iPhone for realistic 3D lighting and compositing in VFX workflows and more.`,
        frameworks: ["django", "swiftUI"],
        languages: ["python", "swift"],
        platforms: ['iOS'],
        roles: ["co-founder", "backend"],
        externalUrl: "https://hdreye.app",
        media: [],
        body: ``,

    },
    {
        imageUrl: "/images/projects/storyplace/storyplace.webp",
        heroImageUrl: "/images/projects/storyplace/storyplace-hero.jpg",

        title: "Storyplace",
        slug: "storyplace",
        excerpt: `Storyplace is the first social journaling app, where people from around the world share their journal entries, stories, feelings, and thoughts in a supportive community.`,
        frameworks: ["django", "flutter"],
        languages: ["python", "dart"],
        platforms: ['iOS', "android", "web"],
        roles: ["backend", "frontend", "partner"],
        externalUrl: "https://storyplace.com",
        media: [],
        body: ``,

    },
];


export { projects };