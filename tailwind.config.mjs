/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					navy: '#0F2744',
					blue: '#2F6FED',
					sky: '#F4F7FB',
					sand: '#FAF8F5',
					heart: '#E24B57',
					gold: '#C9A46A',
					ink: '#1B1C1A',
					muted: '#5C6478',
				},
			},
			fontFamily: {
				display: ['Newsreader', 'Georgia', 'serif'],
				sans: ['Manrope', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				card: '0 20px 50px -24px rgba(15, 39, 68, 0.18)',
				soft: '0 12px 32px -20px rgba(15, 39, 68, 0.14)',
			},
			borderRadius: {
				'4xl': '1.5rem',
			},
		},
	},
	plugins: [],
}
