const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

const withPlugins = require('next-compose-plugins')

const withPreact = require('next-plugin-preact')
const withPWA = require('next-pwa')

dayjs.extend(utc)
dayjs.extend(timezone)

module.exports = withPlugins(
  [
    [withPreact],
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === 'development',
          dest: 'public',
          register: true,
          skipWaiting: true,
        },
      },
    ],
  ],
  {
    experimental: {
      reactRoot: 'concurrent',
      polyfillsOptimization: true,
      scrollRestoration: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    env: {
      buildNumber: dayjs.tz(dayjs(), 'Asia/Bangkok').format('YYYYMMDD.HH'),
    },
    async headers() {
      return [
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'cache-control',
              value: 'public, max-age=2592000',
            },
          ],
        },
      ]
    },
  }
)
