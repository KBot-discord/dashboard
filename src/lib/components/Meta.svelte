<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';

	export let title: string;

	const description = 'A multi-feature Discord bot.';
	const logo = 'https://kbot.ca/images/logo.png';
	const url = 'https://kbot.ca/';
</script>

<MetaTags
	{title}
	titleTemplate="%s | KBot"
	{description}
	canonical={url}
	openGraph={{
		type: 'website',
		url,
		title,
		description,
		images: [{ url: logo, alt: 'KBot icon' }],
		site_name: 'KBot'
	}}
	twitter={{
		cardType: 'summary',
		title,
		description,
		image: logo,
		imageAlt: 'KBot icon'
	}}
/>
<meta name="theme-color" data-react-helmet="true" content="#006BFC" />
