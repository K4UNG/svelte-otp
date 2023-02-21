<script lang="ts">
	import SvelteOtp from '$lib/components/SvelteOtp.svelte';

	let numOfInputs = 6;
	let value = '';
	let placeholder = '';
	let onlyShowMiddleSeparator = false;
	let separator = '';
	let inputStyle = 'border-radius: 5px;';
	let wrapperStyle = '';
	let separatorStyle = '';
	let disableDefaultStyle = false;
	let numberOnly = false;
</script>

<svelte:head>
	<title>Svelte OTP | Playground</title>
	<meta name="description" content="Svelte OTP playground. Try it out online." />
</svelte:head>

<main class="p-4 grid grid-cols-1 lg:grid-cols-5">
	<div>
		<label for="value">Value</label><br />
		<input bind:value id="value" />
		<label for="numOfInputs">Number of Inputs ({numOfInputs})</label><br />
		<input
			id="numOfInputs"
			type="range"
			step="1"
			min={1}
			max={10}
			bind:value={numOfInputs}
			on:input={() => (value = '')}
		/><br />
		<label for="placeholder">Placeholder</label><br />
		<input id="placeholder" type="text" bind:value={placeholder} /><br />
		<label for="separator">Separator</label><br />
		<input id="separator" type="text" bind:value={separator} /><br />
		<label for="middle">Only show middle separator</label>
		<input id="middle" type="checkbox" bind:checked={onlyShowMiddleSeparator} /><br />
		<label for="style">Disable default style</label>
		<input id="style" type="checkbox" bind:checked={disableDefaultStyle} /><br />
		<label for="num">Number only</label>
		<input id="num" type="checkbox" bind:checked={numberOnly} /><br />
		<label for="input">Input Style</label><br />
		<textarea id="input" bind:value={inputStyle} /><br />
		<label for="wrapper">Wrapper Style</label><br />
		<textarea id="wrapper" bind:value={wrapperStyle} /><br />
		<label for="separator-style">Separator Style</label><br />
		<textarea id="separator-style" bind:value={separatorStyle} /><br />
	</div>
	<div class="flex justify-center col-span-3 py-8 order-first lg:order-last">
		{#key numOfInputs}
			<SvelteOtp
				{numOfInputs}
				bind:value
				{placeholder}
				{onlyShowMiddleSeparator}
				{separator}
				{inputStyle}
				{wrapperStyle}
				{separatorStyle}
				{disableDefaultStyle}
				{numberOnly}
			/>
		{/key}
	</div>
</main>

<style>
	input,
	textarea {
		border: 1px solid #333;
		border-radius: 5px;
		padding: 0.5rem;
	}

	label {
		margin-top: 0.5rem;
		display: inline-block;
		font-weight: 500;
	}
</style>
