/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Technologies',
    description: 'Collin\'s container store.',
    icon: '/img/logo.svg',
    listUrl: 'https://eatinsundip.github.io/kasm-registry',
    contactUrl: 'https://github.com/eatinsundip/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
