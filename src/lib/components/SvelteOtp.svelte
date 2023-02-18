<script lang="ts">
	import OtpItem from './OtpItem.svelte';

	export let numOfInputs: number = 6;
	export let value = '';
	export let separator = '';
	export let disableDefaultStyle = false;
	export let inputClass = '';
	export let wrapperClass = '';
	export let separatorClass = '';
	export let inputStyle = '';
	export let wrapperStyle = '';
	export let separatorStyle = '';
	export let numberOnly = false;
	export let placeholder = '';
	export let onlyShowMiddleSeparator = false;

	let codes: string[] = [...value.split(''), ...Array(numOfInputs - value.length).fill('')];
	let inputs: (null | HTMLInputElement)[] = Array(numOfInputs).fill(null);
	$: placeholders =
		placeholder.length < numOfInputs
			? [...placeholder.split(''), ...Array(numOfInputs - placeholder.length).fill('')]
			: placeholder.split('');

	$: value = codes.join('');
</script>

<div class={`${disableDefaultStyle ? '' : 'wrapper'} ${wrapperClass}`} style={wrapperStyle}>
	{#each codes as value, i (i)}
		<OtpItem
			num={numberOnly}
			bind:input={inputs[i]}
			bind:value
			index={i}
			bind:codes
			{inputs}
			nostyle={disableDefaultStyle}
			className={inputClass}
			style={inputStyle}
			placeholder={placeholders[i]}
		/>
		{#if separator && i !== codes.length - 1 && (!onlyShowMiddleSeparator || (onlyShowMiddleSeparator && i === codes.length / 2 - 1 && numOfInputs % 2 === 0))}
			<span class={separatorClass} style={separatorStyle}>{separator}</span>
		{/if}
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
</style>
