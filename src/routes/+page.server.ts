import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export function load(): PageServerLoad {
	throw redirect(302, '/usage');
}
