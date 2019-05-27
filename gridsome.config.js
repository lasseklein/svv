// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


//const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
    tailwind('./tailwind.config.js'),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

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
                apiKey: 'keyBL8EdTEVmtAKOn',
                base: 'app2szVnKxhLteAUt',
            },
        },

        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                config: './tailwind.config.js'
            }
        }

    ],


    chainWebpack: config => {
        config.module
            .rule('postcss-loader')
            .test(/\.css$/)
            .use(["tailwindcss", "autoprefixer"])
            .loader('postcss-loader')
    }
}
