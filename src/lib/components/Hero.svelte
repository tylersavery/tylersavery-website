<script lang="ts">
    import EmailIconButton from "./EmailIconButton.svelte";
    import YoutubeIconButton from "./YoutubeIconButton.svelte";

    interface Props {
        name: string;
        photoUrl: string;
        onContactClick: () => void;
    }
    let { name, photoUrl, onContactClick }: Props = $props();
</script>

<section
    class="flex flex-col items-center md:items-start justify-start md:justify-center text-center p-8 min-h-[70vh] md:min-h-[300px] bg-base-300"
>
    <div class="flex items-center gap-2 flex-col md:flex-row">
        <img
            src="/images/avatars/tyler-coding.webp"
            alt="Tyler Coding"
            class="w-32 h-32"
        />

        <div class="flex flex-col">
            <div class="flex flex-col items-center md:items-start">
                <h1
                    class="text-3xl md:text-5xl font-crafty text-center md:text-left"
                >
                    Hi, I'm Tyler.
                </h1>
                <h2 class="text-xl font-crafty opacity-80 mt-3">
                    I make things that go on the internet.
                </h2>
            </div>

            <div
                class="flex space-x-4 items-center justify-center md:justify-start mt-2"
            >
                <EmailIconButton isBig={true} />
                <YoutubeIconButton isBig={true} />
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background-image: url(/images/hero-transparent.png);
        background-size: contain;
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
</style>
