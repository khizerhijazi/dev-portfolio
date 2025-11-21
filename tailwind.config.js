/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	screens: {
    		xs: '500px',
    		sm: '600px',
    		md: '1000px',
    		lg: '1300px'
    	},
    	container: {
    		center: 'true',
    		padding: {
    			DEFAULT: '20px'
    		},
    		screens: {
    			xl: '1350px'
    		}
    	},
    	fontFamily: {
    		baij: ['Bai Jamjuree', 'system-ui']
    	},
    	fontSize: {
    		xs: '12px',
    		sm: '16px',
    		base: '20px',
    		lg: '30px',
    		xl: '33px',
    		'2xl': '50px',
    		'3xl': '70px'
    	},
    	extend: {
    		boxShadow: {
    			'menu-shadow': '0 2px 30px 0 rgba(0,0,0,.25)',
    			'icon-shadow': '0 2px 10px 0 rgba(0,0,0,.1)'
    		},
    		backgroundImage: {
    			'logo-gradient': 'linear-gradient(90deg, #39e168 -1.88%, #6d64d3 104.56%)',
    			'title-gradient': 'linear-gradient(90deg, #239982 -1.88%, #6d64d3 104.56%)',
    			'skills-gradient': 'linear-gradient(261deg, #d2d8e7 5.73%, rgba(214, 223, 250, .98) 93.52%)',
    			'skills-gradient-dark': 'linear-gradient(261deg, #1f2739 5.73%, rgba(23, 38, 71, .98) 93.52%)',
    			'mouse-effects': 'radial-gradient(circle, rgba(10, 0, 147, .2) 0%, rgba(22, 16, 131, 0) 70%)',
    			'mouse-effects-dark': 'radial-gradient(circle, rgba(10, 0, 147, .55) 0%, rgba(22, 16, 131, 0) 70%)'
    		},
    		height: {
    			customBanner: 'calc(100vh - 80px)'
    		},
    		colors: {
    			primarybgLight: '#fff',
    			primarybgDark: '#0f172a',
    			secondarybgLight: '#eef8fd',
    			secondarybgDark: '#1b2335',
    			iconbgLight: '#dbeaf6',
    			iconbgDark: '#252f45',
    			iconHoverLight: '#bdcafd',
    			iconHoverDark: '#283a69',
    			textDark: '#c2bad2',
    			textLight: '#575380',
    			green: '#249a83',
    			primaryDarklightText: '#363662',
    			primaryLightDarkText: '#7778a4',
    			black: '#141e26',
    			white: '#fff',
    			cyan: '#56b6d4',
    			borderBlack: '#292929',
    			skillsStrokeDark: '#0f172a',
    			skillsText: '#252e52',
    			hyperlink: '#4c72f8',
    			workBoxHover: '#283a69e6',
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}

