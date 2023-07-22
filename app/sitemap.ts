import { type MetadataRoute } from 'next'

import { url } from '~/lib'

export default function sitemap() {
  const staticMap = [
    {
      url: url('/').href,
      lastModified: new Date(),
    },
    {
      url: url('/blog').href,
      lastModified: new Date(),
    },
    {
      url: url('/projects').href,
      lastModified: new Date(),
    },
    {
      url: url('/guestbook').href,
      lastModified: new Date(),
    },
  ] satisfies MetadataRoute.Sitemap

  return [...staticMap]
}

export const runtime = 'edge'
export const revalidate = 60
