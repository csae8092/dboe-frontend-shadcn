export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		console.log(request)
		console.log(username, password )

		cookies.set('sessionid', "foobar", { path: '/' });

		return { success: true };
	}
};