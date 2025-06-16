<script lang="ts">
    import EmailIconButton from "./EmailIconButton.svelte";
    import YoutubeIconButton from "./YoutubeIconButton.svelte";

    interface Props {
        show: boolean;
    }
    let { show }: Props = $props();
</script>

{#if show}
    <header
        class="fixed top-0 left-0 w-full bg-base-100 shadow-md flex justify-between items-center px-6 py-4 z-50"
    >
        <a class="text-lg hover:text-success" href="/"
            >Who is <span class="font-bold">Tyler Savery</span>?</a
        >

        <div class="flex space-x-4">
            <EmailIconButton isBig={false} />
            <YoutubeIconButton isBig={false} />
        </div>
    </header>
{/if}
