import { redirect } from '@sveltejs/kit';

export async function POST({ request, url }) {
	const data = await request.formData();
	console.log(data); 
	console.log(url.href);
	
	const referer = request.headers.get('referer') || '/';
	throw redirect(303, referer);
}
