<script lang="ts">
    interface Props {
        isBig: boolean;
    }

    const { isBig }: Props = $props();
</script>

<a
    href="https://www.youtube.com/@TylerCodes"
    class="text-accent hover:text-success transition-colors duration-300"
    aria-label="Visit My YouTube Channel"
    target="_blank"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 576 512"
        stroke="currentColor"
        class={isBig ? "size-8" : "size-6"}
    >
        <path
            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
        />
    </svg>
</a>
