const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */});

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/land',
        permanent: true
      }
    ]
  },
};

