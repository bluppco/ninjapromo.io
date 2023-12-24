/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'dm_sans': ["DM Sans","sans-serif"]
			},
			colors: {
				"body" : "#3C39C6",
				"nonjapromo_black": "#212121"
			}
		},
	},
	plugins: [],
}
