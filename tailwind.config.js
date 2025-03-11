import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
	],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Figtree',
					...defaultTheme.fontFamily.sans
				],
				acorn: ['Acorn', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				text: '#190c0e',
				background: '#fdfbfb',
				primary: '#e30022bf',
				secondary: '#e97239',
				accent: '#ff778b',
				'primary-blue': '#023047',
				'secondary-blue': '#2190ae',

			},
			height: {
				106: '26px'
			},
			fontSize: {
				'xxl-responsive': 'clamp(3.2rem, .5692rem + 8.238vw, 7.75rem)',
				'xl-responsive': 'clamp(3.2rem, .5692rem + 8.238vw, 5.75rem)'
			}
		}
	},

	plugins: [
		forms,
		require("tailwindcss-animate"),
		function({ addBase, theme }) {
			addBase({
				':root': {
					'--color-text': theme('colors.text'),
					'--color-background': theme('colors.background'),
					'--color-primary': theme('colors.primary'),
					'--color-secondary': theme('colors.secondary'),
					'--color-accent': theme('colors.accent'),
				},
			});
		},
	],
};
