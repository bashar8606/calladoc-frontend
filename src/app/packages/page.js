import WidgetBlocks from "@/components/WidgetBlocks";
import {  PACKAGE_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";

export async function generateMetadata({ params}) {
  const data = await nextFetch(PACKAGE_PAGE)
  const seo = data?.data?.seo
  const adminBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.calladoc.ae'
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": seo?.metaTitle,
    "description": seo?.metaDescription,
    "url": seo?.url,
    "logo": "https://admin.calladoc.ae/uploads/logo_1_9a17c503ec.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971502909369",
      "contactType": "customer service",
    }
  };
  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    // keywords: seo?.meta_keywords,
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: seo?.canonicalUrl,
      images: [
        {
          url: seo?.ogImage?.url ? `${adminBaseUrl}${seo.ogImage.url}` : seo?.shareImage?.url ? `${adminBaseUrl}${seo.shareImage.url}` : null,
          width: 1200,
          height: 630,
          alt: seo?.metaTitle,
        },
      ],
      type: seo?.ogType || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: [seo?.ogImage?.url ? `${adminBaseUrl}${seo.ogImage.url}` : seo?.shareImage?.url ? `${adminBaseUrl}${seo.shareImage.url}` : null],
    },
    other: {
      'script:ld+json': JSON.stringify(schema),
    },
};
}

export default async function PackagePage({ params }) {
  const data = await nextFetch(PACKAGE_PAGE);
  const widgetData = data?.data?.widgets
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  )
}