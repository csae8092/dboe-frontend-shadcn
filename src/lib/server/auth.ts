import { type Cookies } from '@sveltejs/kit';

const jwtExpires = 60 * 60 * 24 * 14; // 14 days

export async function clearAuthCookies(cookies: Cookies) {
	cookies.delete("token", {path:"/"})
	cookies.delete("userData", {path:"/"})
}

export async function setJwt(cookies: Cookies, token: string) {
	cookies.set('token', token, {
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

export function setUserDataCookie(cookies: Cookies, userData: Record<string, unknown>) {
	cookies.set('userData', JSON.stringify(userData), {
		path: '/',
		sameSite: 'lax',
		secure: false,
		httpOnly: false,
		expires: new Date(Date.now() + jwtExpires * 1000)
	});
}

export function getUserDataFromCookie(cookies: Cookies) {
	const raw = cookies.get('userData');
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
