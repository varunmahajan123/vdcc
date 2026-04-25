export default function sitemap() {
  return [
    { url: 'https://vdcc-web.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://vdcc-web.vercel.app/courses', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://vdcc-web.vercel.app/results', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
    { url: 'https://vdcc-web.vercel.app/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://vdcc-web.vercel.app/gallery', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://vdcc-web.vercel.app/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}