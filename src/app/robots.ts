export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/dashboard', '/login'] },
    sitemap: 'https://vdcc-web.vercel.app/sitemap.xml',
  }
}
