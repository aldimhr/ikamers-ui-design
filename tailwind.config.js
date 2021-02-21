module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 2px 7px 8px 2px rgba(0, 0, 0, 0.1)',
            none: 'none',
        },
        extend: {
            fontFamily: {
                'lobster': ['Lobster Two'],
                'roboto': ['Roboto']
            },
            colors: {
                'ikBackground': 'rgb(214, 208, 196)',
                'ikYellow': 'rgb(240, 156, 20)',
                'ikGreen': 'rgb(82, 126, 22)',
                'ikRed': 'rgb(218, 55, 48)',
                'ikBlue': 'rgb(47, 121, 197)',
                'ikPink': 'rgb(209, 98, 149)',
                'ikOrange': 'rgb(224, 68, 17)',
                'ikGrey': 'rgb(210, 197, 186)',
                'ikBlack': 'rgb(44, 40, 37)',
                'ikPurple': 'rgb(177, 24, 210)',
            },
        },
    },
    variants: {
        backgroundOpacity: ['active'],
    },
    plugins: [],
}