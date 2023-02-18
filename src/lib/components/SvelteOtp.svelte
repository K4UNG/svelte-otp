<script lang="ts">
	import OtpItem from './OtpItem.svelte';

	export let numOfInputs: number = 6;
	export let value = '';
	export let separator = '';
	export let disableDefaultStyle = false;
	export let inputClass = '';
	export let wrapperClass = '';
	export let separatorClass = '';
	export let numberOnly = false;

	let codes: string[] = [...value.split(''), ...Array(numOfInputs - value.length).fill('')];
	let inputs: (null | HTMLInputElement)[] = Array(numOfInputs).fill(null);

	$: value = codes.join('');
</script>

<div class={`${disableDefaultStyle ? '' : 'wrapper'} ${wrapperClass}`}>
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
		/>
		{#if separator && i !== codes.length - 1}
			<span class={separatorClass}>{separator}</span>
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
