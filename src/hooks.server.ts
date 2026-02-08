import type { Handle } from '@sveltejs/kit';
import { getUserDataFromCookie, getJwt } from '$lib/server/auth';


export const handle: Handle = async ({ event, resolve }) => {
  const userData = getUserDataFromCookie(event.cookies);
  const jwt = getJwt(event.cookies)

  event.locals.userData = userData;
  event.locals.jwt = jwt

  const protectedPrefixes = ['/edit'];

  const isProtected = protectedPrefixes.some((p) => event.url.pathname.startsWith(p));
  if (isProtected && !event.locals?.jwt) {
    return Response.redirect(new URL('/log-in', event.url), 303);
  }

  return resolve(event);
};