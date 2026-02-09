import { routeMapper } from '$lib/constants.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params, url }) {
    if (!(params.item in routeMapper) || params.item === 'belege') {
        throw error(404, 'Not found');
    }
    const selectedItem = routeMapper[params.item as keyof typeof routeMapper]
    const base_url = selectedItem.api_url
    let query_string = new URLSearchParams(Object.fromEntries(url.searchParams));
    query_string.set('beleg', params.beleg_id)
    if (!query_string.has('page_size')) {
        query_string.set('page_size', '15');
    }
    if (!query_string.has('page')) {
        query_string.set('page', '1');
    }
    const fetch_data_url = `${base_url}${query_string && query_string.toString() ? '?' + query_string.toString() : ''}`;
    const res = await fetch(fetch_data_url);
    const payload = await res.json();

    return {
        selectedItem: selectedItem,
        payload: payload,
        fetch_data_url: fetch_data_url
    };
}