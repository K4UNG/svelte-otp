<script lang="ts">
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import '../app.css';

	let drawer = false;

	function hideDrawer() {
		drawer = false;
	}

	$: pathname = $page.url.pathname;
</script>

<nav
	class="p-4 border-b border-gray-400 flex items-center justify-between bg-white md:justify-center z-30 sticky top-0"
>
	<a href="/usage" class="font-semibold text-xl">svelte-<span class="text-blue-600">otp</span></a>
	<button on:click={() => (drawer = true)} class="md:hidden">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="black" />
		</svg>
	</button>
	{#if drawer}
		<div
			transition:fade={{ duration: 100 }}
			class="fixed bg-black bg-opacity-40 top-0 left-0 right-0 bottom-0 md:hidden"
			on:click={hideDrawer}
			on:keypress={hideDrawer}
		/>
		<ul
			class="fixed bg-white min-h-screen w-2/3 right-0 top-0 p-8 md:hidden"
			in:fly={{ duration: 100, x: 200 }}
			out:fly={{ duration: 100, x: 200 }}
		>
			<li class="flex justify-end">
				<button on:click={hideDrawer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6"
					>
						<path
							fill-rule="evenodd"
							d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</li>
			<li class={`py-2 font-semibold text-lg ${pathname === '/usage' ? '' : 'text-gray-400'}`}>
				<a on:click={hideDrawer} href="/usage">Usage</a>
			</li>
			<li class={`py-2 font-semibold text-lg ${pathname === '/playground' ? '' : 'text-gray-400'}`}>
				<a on:click={hideDrawer} href="/playground">Playground</a>
			</li>
		</ul>
	{/if}
</nav>
<div class="md:grid grid-cols-6">
	<div>
		<ul class="p-4 sticky top-16 border-r border-gray-400 min-h-screen hidden md:block">
			<li class={`py-2 font-semibold text-lg ${pathname === '/usage' ? '' : 'text-gray-400'}`}>
				<a on:click={hideDrawer} href="/usage">Usage</a>
			</li>
			<li class={`py-2 font-semibold text-lg ${pathname === '/playground' ? '' : 'text-gray-400'}`}>
				<a on:click={hideDrawer} href="/playground">Playground</a>
			</li>
		</ul>
	</div>
	<div class="col-span-5">
		<slot />
	</div>
</div>
