const nib = require('nib');
const rupture = require('rupture');
const withStylus = require('@zeit/next-stylus');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = withStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([autoprefixer({ flexbox: 'no-2009' }), require('postcss-css-variables')])
    ]
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
});
