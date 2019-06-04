const { withPlugins } = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')()
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})


const environment = process.env.NODE_ENV;

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
      ? require('next/constants') // Get values from `next` package when building locally
      : require('next-server/constants'); // Get values from `next-server` package when building on now v2

// module.exports = (phase, { defaultConfig }) => {
//   const withMDX = require('@next/mdx')({
//     extension: /.mdx?$/
//   })
//
//   return withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx'],
//     target: 'serverless'
//   })
// };


const nextConfig = {
  target: 'serverless'
};

module.exports = withPlugins([
  [withSourceMaps, {
    webpack(config, options) {
      return config
    }
  }],
  [withMDX, {
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  }]
], nextConfig);
