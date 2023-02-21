import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://github.com/KBot-discord/KBot');
}
