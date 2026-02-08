import { routeMapper } from '$lib/constants';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	return {
		username: locals.username ?? null,
		usertoken: locals.usertoken ?? null,
		routeMapper: routeMapper
	};
};
