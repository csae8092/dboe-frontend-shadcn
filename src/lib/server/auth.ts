import { type Cookies } from '@sveltejs/kit';

const jwtExpires = 60 * 60 * 24 * 14; // 14 days

export async function clearAuthCookies(cookies: Cookies) {
	cookies.delete("usertoken", {path:"/"})
	cookies.delete("username", {path:"/"})
}

export async function setJwt(cookies: Cookies, token: string) {
	cookies.set('usertoken', token, {
		path: '/',
		sameSite: 'lax',
		secure: true,
		httpOnly: true,
		expires: new Date(Date.now() + jwtExpires * 1000)
	});
}

export function getJwt(cookies: Cookies) {
	const raw = cookies.get('token');
	if (!raw) return null;
	return raw
}

export function setUserName(cookies: Cookies, username: string) {
	cookies.set('username', username, {
		path: '/',
		sameSite: 'lax',
		secure: false,
		httpOnly: false,
		expires: new Date(Date.now() + jwtExpires * 1000)
	});
}

export function getUserNameFromCookie(cookies: Cookies) {
	const raw = cookies.get('username');
	if (!raw) return null;
	return raw
}
