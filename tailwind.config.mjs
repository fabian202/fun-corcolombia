/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					navy: '#163A5F',
					blue: '#2B7BC1',
					sky: '#E8F3FB',
					sand: '#FBF6F0',
					heart: '#E23C4A',
					gold: '#E0B15A',
					ink: '#1C2836',
					muted: '#5C6B7A',
				},
			},
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['Figtree', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				card: '0 18px 50px -24px rgba(22, 58, 95, 0.35)',
				soft: '0 10px 30px -18px rgba(22, 58, 95, 0.25)',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
}
