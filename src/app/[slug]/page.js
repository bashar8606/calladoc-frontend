import WidgetBlocks from "@/components/WidgetBlocks"
import { PAGES } from "@/constants/apiRoutes";
import { getPage } from "@/lib/getPages";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params: { slug } }) {
  const data = await getPage(slug)
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
  // const headersList = headers();
  // const header_url = headersList.get("x-url") || "";
  // const openGraphImage = data?.seo?.image
  //   ? [{ url: data?.seo?.image?.url, alt: data?.seo?.title }]
  //   : [];
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




export default async function CustomPage({ params: { slug } }) {
  const data = await getPage(slug)
  const seo = data?.data?.seo;
  const widgetData = data?.data?.widgets
  if (!data) return notFound();
  // console.log(data,slug,"data");

  const schemaData = {
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
    },
  };

  return (
    <main>
      <WidgetBlocks widgets={widgetData} />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
