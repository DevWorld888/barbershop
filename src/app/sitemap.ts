import type { MetadataRoute } from 'next';
import { suburbPages } from '@/lib/suburbs';

const siteUrl = 'https://www.manafadebarbershop.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...suburbPages.map((page) => ({
      url: `${siteUrl}/barber/${page.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
