import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://discord.gg/4bXGu4Gf4c');
}
