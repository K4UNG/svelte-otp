<script lang="ts">
	import SvelteOtp from '$lib/components/SvelteOtp.svelte';
</script>

<main class="p-4 grid place-items-center">
	<SvelteOtp numOfInputs={6} separator="-" numberOnly />
</main>

<style>
</style>
