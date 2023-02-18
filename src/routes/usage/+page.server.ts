import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/usage/$types';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const load: PageServerLoad = () => {
	const firstData = fs.readFileSync(
		path.join(process.cwd(), '/src/lib/docs/usage') + '/first.md',
		'utf-8'
	);

	const secondData = fs.readFileSync(
		path.join(process.cwd(), '/src/lib/docs/usage') + '/second.md',
		'utf-8'
	);

	const thirdData = fs.readFileSync(
		path.join(process.cwd(), '/src/lib/docs/usage') + '/third.md',
		'utf-8'
	);

	const fourthData = fs.readFileSync(
		path.join(process.cwd(), '/src/lib/docs/usage') + '/fourth.md',
		'utf-8'
	);

	const fifthData = fs.readFileSync(
		path.join(process.cwd(), '/src/lib/docs/usage') + '/fifth.md',
		'utf-8'
	);

	return {
		first: marked.parse(firstData),
		second: marked.parse(secondData),
		third: marked.parse(thirdData),
		fourth: marked.parse(fourthData),
		fifth: marked.parse(fifthData)
	};
};
