<script context="module" lang="ts">
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('javascript', javascript);
</script>

<script lang="ts">
	import SvelteOtp from '$lib/components/SvelteOtp.svelte';
	import 'highlight.js/styles/github.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	let value = 'abc12';
	let value2 = '12';

	onMount(() => {
		hljs.highlightAll();
	});

	export let data: PageData;
</script>

<main class="p-4 content">
	{@html data.first}
	<div class="flex justify-center mt-4 mb-8">
		<SvelteOtp />
	</div>
	{@html data.second}
	<div class="flex justify-center mt-4 mb-8">
		<SvelteOtp numOfInputs={5} bind:value />
	</div>
	{@html data.third}
	<div class="flex justify-center mt-4 mb-8">
		<SvelteOtp numberOnly bind:value={value2} separator="-" placeholder="******" />
	</div>
	{@html data.fourth}
	<div class="flex justify-center mt-4 mb-8">
		<SvelteOtp
			inputClass="rounded-md bg-gray-200"
			separatorClass="border-blue-700 text-3xl font-bold"
			separator="-"
			onlyShowMiddleSeparator
		/>
	</div>
	{@html data.fifth}
</main>

<style>
</style>
