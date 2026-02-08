import { appConfig } from '$lib/constants.js';

import { redirect, fail } from '@sveltejs/kit';
import { setJwt, setUserName } from '$lib/server/auth.js';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const response = await fetch(appConfig.auth_url, {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		});

		if (response.ok) {
			const res = await response.json();
			setJwt(cookies, res.token);
			setUserName(cookies, username);
			throw redirect(303, '/');
		} else {
			return fail(400, {
				message: `Password for user ${username} did not match`
			});
		}
	}
};
