// export default function sitemap() {
//     return [
//       {
//         url: 'https://acme.com',
//         lastModified: new Date(),
//         changeFrequency: 'yearly',
//         priority: 1,
//       },
//       {
//         url: 'https://acme.com/about',
//         lastModified: new Date(),
//         changeFrequency: 'monthly',
//         priority: 0.8,
//       },
//       {
//         url: 'https://acme.com/blog',
//         lastModified: new Date(),
//         changeFrequency: 'weekly',
//         priority: 0.5,
//       },
//     ]
//   }

// app/sitemap.ts (Next.js 15 App Router)
// Automatically generates sitemap at /sitemap.xml

import { LEADER_SINGLE, MEDIA_SINGLE, PACKAGES_PAGE, PAGES, SERVICES } from '@/constants/apiRoutes'
import strapiFetch from '@/utils/strapiFetch'
import { MetadataRoute } from 'next'

export default async function sitemap() {
  const baseUrl = 'https://www.calladoc.ae'
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

  ]

  // Fetch dynamic content
  const [posts,pages,services,packages, doctors] = await Promise.all([
    fetchBlogPosts(),
    fetchPages(),
    fetchServices(),
    fetchPackages(),
    fetchDoctors()
  ])

  // Dynamic blog post routes
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const pagesRoutes = pages.map((post) => ({
    url: `${baseUrl}/pages/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const servicesRoutes = services.map((post) => ({
    url: `${baseUrl}/services/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const packagesRoutes = packages.map((post) => ({
    url: `${baseUrl}/packages/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  const doctorsRoutes = doctors.map((post) => ({
    url: `${baseUrl}/doctors/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  return [...staticRoutes, ...postRoutes,...pagesRoutes,...servicesRoutes,...packagesRoutes,...doctorsRoutes]
}

async function fetchBlogPosts() {
        const url = `${MEDIA_SINGLE}`
        const data = await strapiFetch(url);
        return data?.data;
}


async function fetchPages() {
    const url = `${PAGES}`
    const data = await strapiFetch(url);
    return data?.data;
}

async function fetchServices() {
    const url = `${SERVICES}`
    const data = await strapiFetch(url);
    return data?.data;
}
async function fetchPackages() {
    const url = `${PACKAGES_PAGE}`
    const data = await strapiFetch(url);
    return data?.data;
}
async function fetchDoctors() {
    const url = `${LEADER_SINGLE}`
    const data = await strapiFetch(url);
    return data?.data;
}
