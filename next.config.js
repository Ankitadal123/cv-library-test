/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Configure internationalization - these are the locales that will be available
    locales: ['en', 'fr', 'de', 'es'],
    // Default locale when visiting a non-locale prefixed path
    defaultLocale: 'en',
  },
  images: {
    domains: ['api.cv-library.co.uk'],
  },
}

module.exports = nextConfig