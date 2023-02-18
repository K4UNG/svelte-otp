import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';

export function load(): PageLoad {
	throw redirect(302, '/usage');
}
