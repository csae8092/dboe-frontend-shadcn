import type { Handle } from '@sveltejs/kit';
import { getUserDataFromCookie, getJwt } from '$lib/server/auth';


export const handle: Handle = async ({ event, resolve }) => {
//   const jwtPayload = await getJwt(event.cookies.get('token'));
  const userData = getUserDataFromCookie(event.cookies);

//   event.locals.jwt = jwtPayload;
  event.locals.userData = userData;

  const protectedPrefixes = ['/app'];

  const isProtected = protectedPrefixes.some((p) => event.url.pathname.startsWith(p));
  if (isProtected && !event.locals?.jwt?.sub) {
    return Response.redirect(new URL('/log-in', event.url), 303);
  }

  return resolve(event);
};