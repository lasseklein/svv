// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


const tailwindcss = require("tailwindcss")("./tailwind.config.js");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  siteName: 'SVV Håndbøker',
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

  ]
}

chainWebpack: config => {
  config.module
      .rule('postcss-loader')
      .test(/\.css$/)
      .use(["tailwindcss", "autoprefixer"])
      .loader('postcss-loader')
}