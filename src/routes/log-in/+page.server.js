import { appConfig } from '$lib/constants.js';

import { redirect, fail } from '@sveltejs/kit';
import { setJwt, setUserDataCookie } from '$lib/server/auth.js';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		console.log(appConfig.auth_url, username, password);

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
			console.log(res.token);
			setJwt(cookies, res.token);
			setUserDataCookie(cookies, { username: username });
			throw redirect(303, '/');
		} else {
			return fail(400, {
				message: `Password for user ${username} did not match`
			});
		}
	}
};
