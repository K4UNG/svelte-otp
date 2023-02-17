<script lang="ts">
	export let input: null | HTMLInputElement = null;
	export let index: number;
	export let value: string;
	export let codes: string[];
	export let inputs: (null | HTMLInputElement)[];
	export let nostyle: boolean;
	export let className: string;
	export let num: boolean;

	let key: string;

	function shiftFocus(key: string) {
		if (!/[0-9]/.test(key) && num) return;
		if (index !== inputs.length - 1) (inputs[index + 1] as HTMLInputElement).focus();
	}

	function keyDownHandler(e: KeyboardEvent) {
		key = e.key;
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
			shiftFocus(key);
		}
	}

	function keyUpHandler(e: KeyboardEvent) {
		if (e.key === 'Backspace' && index !== 0) {
			inputs[index - 1]?.focus();
		}
	}
</script>

<input
	class={`${nostyle ? '' : 'default-input'} ${className}`}
	bind:this={input}
	on:keydown={keyDownHandler}
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
