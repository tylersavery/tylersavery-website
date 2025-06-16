<script>
    import { page } from "$app/stores";
    import Header from "$lib/components/Header.svelte";
    import "../app.css";
</script>

<svelte:head>
    <title>{$page.status} - Page Not Found</title>
</svelte:head>

<Header show={true} />
{#if $page.status === 404}
    <div
        class="min-h-screen flex items-center justify-center flex-col text-center p-8"
    >
        <img
            src="/images/avatars/tyler-404.webp"
            alt="404 Error"
            width="256"
            height="256"
        />
        <h1 class="text-5xl font-bold mb-4">404</h1>
        <p class="text-xl">The page you are looking for does not exist.</p>
        <a href="/" class=" mt-6 btn btn-primary btn-outline">Go Back Home</a>
    </div>
{:else}
    <h1>{$page.status}</h1>
    <pre>{$page.error}</pre>
{/if}
