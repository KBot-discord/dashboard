/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require('daisyui')],
	darkMode: 'class',
	content: ['./src/**/*.{html,svelte,ts}'],
	theme: {
		screens: {
			xs: '540px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {}
	},
	daisyui: {
		darkMode: ['class', '[data-theme="dark"]'],
		themes: [
			{
				light: {
					primary: '#3B82F6',
					secondary: '#1D4Ed8',
					accent: '#e4ebf1',
					neutral: '#83d1fc',
					'base-100': '#F1F5F9',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272',
				},
				dark: {
					primary: '#1E3A8A',
					secondary: '#1D4Ed8',
					accent: '#18212f',
					neutral: '#0F172A',
					'base-100': '#1E293B',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	}
};
