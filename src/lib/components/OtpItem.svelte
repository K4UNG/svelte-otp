<script lang="ts">
	export let input: null | HTMLInputElement = null;
	export let index: number;
	export let value: string;
	export let codes: string[];
	export let inputs: (null | HTMLInputElement)[];
	export let nostyle: boolean;
	export let className: string;
	export let num: boolean;

	function keyUpHandler(e: KeyboardEvent) {
		const key = e.key;
		if (
			!/[0-9]/.test(key) &&
			num &&
			key !== 'Backspace' &&
			key !== 'ArrowLeft' &&
			key !== 'ArrowRight'
		)
			return;
		if ((key === 'Backspace' || key === 'ArrowLeft') && index !== 0) {
			(inputs[index - 1] as HTMLInputElement).focus();
		} else if (
			(key !== 'Backspace' && index !== inputs.length - 1) ||
			(key === 'ArrowRight' && index !== inputs.length - 1)
		) {
			(inputs[index + 1] as HTMLInputElement).focus();
		}
	}

	function typeHandler(e: KeyboardEvent) {
		if (value.length >= 1 || (!/[0-9]/.test(e.key) && num)) {
			e.preventDefault();
		}
	}

	function changeHandler(e: Event) {
		const val = (e.target as HTMLInputElement).value;
		if (/[0-9]/.test(val) || !num || !val) {
			value = val;
			if (!val) {
				const len = codes.length;
				const filtered = codes.filter((v) => !!v);
				codes = [...filtered, ...Array(len - filtered.length).fill('')];
			}
		}
	}
</script>

<input
	class={`${nostyle ? '' : 'default-input'} ${className}`}
	bind:this={input}
	on:keyup={keyUpHandler}
	on:keypress={typeHandler}
	on:input={changeHandler}
	{value}
/>

<style>
	.default-input {
		width: 30px;
		height: 40px;
		text-align: center;
		border: 1px solid black;
		margin: 0;
	}
</style>
