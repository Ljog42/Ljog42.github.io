/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				offblack: "#191308",
				lavender: "#F4EBFF",
				pink: "#DFC7FF",
				purple: "#9747FF",
			},
			backgroundImage: {
				darkpurple:
					"radial-gradient(at center, rgba(151,71,255,0.5) 0%, rgba(151,71,255,0) 56%)",
			},
			borderColor: {
				offblack: "#191308",
				lavender: "#F4EBFF",
				pink: "#DFC7FF",
				purple: "#9747FF",
			},
			backgroundColor: {
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
		},
	},
	plugins: [],
};
