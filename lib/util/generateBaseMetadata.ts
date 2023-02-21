import type { TemplateString } from 'next/dist/lib/metadata/types/metadata-types';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

const url: string = 'https://kbot.ca';

const siteName: string = 'KBot';

const title: TemplateString = {
	default: 'KBot',
	template: '%s | KBot'
};

const description: string = 'A multi-feature Discord bot.';

export function generateBaseMetadata(metadata?: Omit<Metadata, 'metadataBase'>): Metadata {
	return {
		metadataBase: new URL(url),
		title,
		description,
		themeColor: '#006BFC',
		generator: siteName,
		applicationName: siteName,
		referrer: 'origin-when-cross-origin',
		formatDetection: {
			email: false,
			address: false,
			telephone: false
		},
		icons: {
			icon: [
				{ url: '/favicon.ico', type: 'image/png' },
				{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
				{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
			],
			other: [
				{ rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
				{ rel: 'manifest', url: '/site.webmanifest' }
			]
		},
		openGraph: {
			title,
			description,
			url,
			siteName,
			locale: 'en-US',
			type: 'website'
		},
		twitter: {
			card: 'summary',
			title,
			description
		},
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true
			}
		},
		...metadata
	};
}
