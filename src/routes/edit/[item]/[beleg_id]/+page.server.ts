import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { routeMapper } from '$lib/constants';
import { getJwt } from '$lib/server/auth';

export const actions: Actions = {
	default: async ({ request, params, cookies }) => {
		const referer = request.headers.get('referer') || '/';
		const formData = await request.formData();
		const payload = Object.fromEntries(formData.entries());
		const jwt = getJwt(cookies);
		const api_url = routeMapper[params.item as keyof typeof routeMapper].api_url;
		const response = await fetch(`${api_url}${payload.id}/`, {
			method: 'PATCH',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Token ${jwt}`
			},
			body: JSON.stringify(payload)
		});
		throw redirect(303, referer);
	}
};
