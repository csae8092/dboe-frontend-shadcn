import { routeMapper } from '$lib/constants.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (!(params.item in routeMapper)) {
		throw error(404, 'Not found');
	}
	return {
		post: {
			title: `Title for ${params.item} goes here`,
			content: `Content for ${params.item} goes here`
		}
	};
}