import type { Handle } from '@sveltejs/kit';
import { getUserNameFromCookie, getJwt } from '$lib/server/auth';


export const handle: Handle = async ({ event, resolve }) => {
  const userData = getUserNameFromCookie(event.cookies);
  const jwt = getJwt(event.cookies)

  event.locals.username = userData;
  event.locals.usertoken = jwt

  const protectedPrefixes = ['/edit'];

  const isProtected = protectedPrefixes.some((p) => event.url.pathname.startsWith(p));
  if (isProtected && !event.locals?.usertoken) {
    return Response.redirect(new URL('/log-in', event.url), 303);
  }

  return resolve(event);
};