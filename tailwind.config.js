/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				valentine: {
					light: {
						bg: '#FFF5F7',
						primary: '#F9A8D4',
						accent: '#EC4899',
						text: '#831843'
					},
					dark: {
						bg: '#1F1118',
						primary: '#BE185D',
						accent: '#F472B6',
						text: '#FDF2F8'
					}
				}
			},
			animation: {
				'float': 'float 3s ease-in-out infinite',
				'sway': 'sway 4s ease-in-out infinite',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'pulse-heart': 'pulseHeart 1.5s ease-in-out infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				sway: {
					'0%, 100%': { transform: 'translateX(-10px)' },
					'50%': { transform: 'translateX(10px)' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				pulseHeart: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' }
				}
			}
		}
	},
	plugins: []
};
