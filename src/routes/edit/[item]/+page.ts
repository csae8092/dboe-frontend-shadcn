import { routeMapper } from '$lib/constants.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (!(params.item in routeMapper)) {
		throw error(404, 'Not found');
	}
    const selectedItem = routeMapper[params.item as keyof typeof routeMapper]
    const res = await fetch(selectedItem.api_url);
	const payload = await res.json();
    console.log(payload)



	return {
		selectedItem: selectedItem,
        payload: payload
	};
}