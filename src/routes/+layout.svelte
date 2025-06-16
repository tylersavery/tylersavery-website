<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import "../app.css";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<Header show={true} />
<div class="py-8"></div>
<div class="min-h-screen">
	{@render children()}
</div>

<Footer />
