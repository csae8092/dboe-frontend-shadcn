import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { routeMapper } from '$lib/constants';
import { getJwt } from '$lib/server/auth';

export const actions: Actions = {
	default: async ({ request, url, params, cookies }) => {
		const formData = await request.formData();
        console.log(formData)
		const payload = Object.fromEntries(formData.entries());
		const jwt = getJwt(cookies);
		const api_url = routeMapper[params.item as keyof typeof routeMapper].api_url;
		console.log(`${api_url}${payload.id}`);

		const response = await fetch(`${api_url}${payload.id}/`, {
			method: 'PATCH',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Token ${jwt}`
			},
			body: JSON.stringify(payload)
		});
        console.log(response)
		const referer = request.headers.get('referer') || '/';
		throw redirect(303, referer);
	}
};
