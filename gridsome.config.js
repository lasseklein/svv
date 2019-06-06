// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwind = require('tailwindcss');
const postcssPlugins = [ tailwind('./tailwind.config.js') ];

//if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
    siteName: 'SVV Håndbøker',
    siteDescription: '',
    siteUrl: '',
    pathPrefix: '',
    icon: './src/favicon.png',

    configureWebpack: {
        // merged with the internal config
    },

    css: {
        loaderOptions: {
            scss: {
                // options here will be passed to sass-loader
            },
            less: {
                // options here will be passed to less-loader
            },
            postcss: {
                plugins: postcssPlugins,
            }
        }
    },

    plugins: [
        {
            use: '~/src/sources/krav',
            options: {
                apiKey: process.env.AIRTABLE_APIKEY,
                base: process.env.AIRTABLE_BASE,
            },
        },

        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                config: './tailwind.config.js',
                shouldPurge: false, //true removes too much, like .hidden
            }
        },
    ],



};
