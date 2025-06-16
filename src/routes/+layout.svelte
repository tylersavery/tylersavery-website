<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import { onMount } from "svelte";
	import "../app.css";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
	let showHeader = $state(false);

	// const onScroll = () => {
	// 	showHeader = window.scrollY > 200;
	// };

	// $effect(() => {
	// 	window.addEventListener("scroll", onScroll);
	// 	return () => window.removeEventListener("scroll", onScroll);
	// });

	// onMount(() => {
	// 	onScroll();
	// });
</script>

<Header show={true} />
<div class="py-8"></div>
<div class="min-h-screen">
	{@render children()}
</div>

<div class="my-4"></div>

<Footer />
