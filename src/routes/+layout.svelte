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
	class="p-4 border-b border-gray-400 flex items-center justify-between bg-white z-30 sticky top-0"
>
	<a href="/usage" class="font-semibold text-xl">svelte-<span class="text-blue-600">otp</span></a>
	<button on:click={() => (drawer = true)} class="md:hidden">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="black" />
		</svg>
	</button>
	<div class="hidden items-center space-x-4 md:flex">
		<a href="https://github.com/K4UNG/svelte-otp" target="_blank" rel="noreferrer">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
					fill="black"
				/>
			</svg>
		</a>
		<a href="https://www.npmjs.com/package/@k4ung/svelte-otp" target="_blank" rel="noreferrer">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.5 15V17H11V15H23V8H1V15H7.5ZM7.5 15V8M13.5 8V15"
					stroke="black"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M18 11V15M5 11V15M11 11V12M20.5 11V15"
					stroke="black"
					stroke-width="1.5"
					stroke-linecap="round"
				/>
			</svg>
		</a>
	</div>
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
