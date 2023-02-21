/**
 * @type {import('tailwindcss').Config}
 **/
module.exports = {
	plugins: [require('daisyui')],
	darkMode: 'class',
	content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
		themes: [
			{
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
