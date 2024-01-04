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
				"ninjapromo_black": "#212121",
				"ninjapromo_accent_blue": "#181692",
				"ninjapromo_blue": "#3C39C6",
				"ninjapromo_dark_slate": "#121212",
				"ninjapromo_light_blue": "#eaefff",
				"ninjapromo_gray": "#00000080"
			},
			backgroundImage: {
				partner: "url(data:image/png;base64,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)"
			}
		},
	},
	plugins: [],
}
