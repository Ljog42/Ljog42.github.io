/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,tsx}"],
	safelist: ["roundex-cxs"],
	theme: {
		extend: {
			colors: {
				offblack: "#191308",
				lavender: "#F4EBFF",
				pink: "#DFC7FF",
				purple: "#9747FF",
			},
			borderRadius: {
				cxs: "0.2rem",
			},
			outline: {
				purple: "#9747FF",
			},
			backgroundImage: {
				darkpurple:
					"radial-gradient(at center, rgba(151,71,255,0.6) 0%, rgba(151,71,255,0) 60%)",
				mask1:
					"linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 98%,  rgba(0, 0, 0, 0.2) 100%)",
			},
			borderColor: {
				offblack: "#191308",
				lavender: "#F4EBFF",
				pink: "#DFC7FF",
				purple: "#9747FF",
			},
			backgroundColor: {
				darkgray: "#404040",
				lightgray: "#5C5C5C",
				offblack: "#191308",
				lavender: "#F4EBFF",
				pink: "#DFC7FF",
				purple: "#9747FF",
			},
			aspectRatio: {
				reel: "9 / 16",
				banner: "13 / 3",
			},
			animation: {
				carousel: "fadeInOut 500ms ease 1",
			},
			keyframes: {
				fadeInOut: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
			},
			fontFamily: {
				heading: "syne, sans-serif",
				nm: "'PP Neue Montreal', sans-serif",
			},
			boxShadowColor: {
				darkpurple: "#9747FF",
			},
		},
	},
	plugins: [],
};
