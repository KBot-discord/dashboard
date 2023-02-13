/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	// output: 'standalone',
	experimental: {
		appDir: true
	},
	async redirects() {
		return [
			{
				source: '/invite',
				destination:
					'https://discord.com/oauth2/authorize?client_id=918237593789947925&permissions=1376290073686&scope=bot%20applications.commands',
				permanent: true
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/4bXGu4Gf4c',
				permanent: true
			},
			{
				source: '/github',
				destination: 'https://github.com/KBot-discord/KBot',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
