import WidgetBlocks from "@/components/WidgetBlocks";
import { HOME_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";
import Head from "next/head";
import Script from "next/script";

export async function generateMetadata() {
  const data = await nextFetch(HOME_PAGE);
  const seo = data?.data?.seo;
  const adminBaseUrl = "https://admin.calladoc.ae";

  return {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      url: seo?.canonicalUrl,
      images: [
        {
          url: seo?.ogImage?.url
            ? `${adminBaseUrl}${seo.ogImage.url}`
            : seo?.shareImage?.url
            ? `${adminBaseUrl}${seo.shareImage.url}`
            : null,
          width: 1200,
          height: 630,
          alt: seo?.metaTitle,
        },
      ],
      type: seo?.ogType || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: [
        seo?.ogImage?.url
          ? `${adminBaseUrl}${seo.ogImage.url}`
          : seo?.shareImage?.url
          ? `${adminBaseUrl}${seo.shareImage.url}`
          : null,
      ],
    },
  };
}

export default async function Home() {
  const data = await nextFetch(HOME_PAGE);
  const seo = data?.data?.seo;
  const widgetData = data?.data?.widgets;

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
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  );
}
