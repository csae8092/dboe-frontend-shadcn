import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';
import { clearAuthCookies } from '$lib/server/auth';

export const GET: RequestHandler = async ({ cookies }) => {
  clearAuthCookies(cookies);
  redirect(303, '/');
};