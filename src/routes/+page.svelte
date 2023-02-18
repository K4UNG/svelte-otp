<script lang="ts">
	import SvelteOtp from '$lib/components/SvelteOtp.svelte';
</script>

<main>
	<SvelteOtp numOfInputs={6} separator="-" />
</main>

<style>
	main {
		display: grid;
		place-items: center;
		padding: 1rem;
	}
</style>
