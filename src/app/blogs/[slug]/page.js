import { getSingleMedia } from "@/lib/getPages";
import DetailWidget from "@/widgets/DetailWidget";
import { notFound } from "next/navigation";
import Script from "next/script";


export async function generateMetadata({ params: { slug } }) {
    const data = await getSingleMedia(slug);
    const seo = data?.data?.seo
    const title=data?.data?.seo?.metaTitle||data?.data?.title

    const desc =seo?.metaDescription ||data?.data?.blocks[0]?.body?.replace(/\r?\n|\r/g, " ")   
    .replace(/\s+/g, " ")      
    .trim().slice(0, 150)  ;   
    const adminBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://admin.calladoc.ae'
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": title,
      "description": desc,
      "url": seo?.url,
      "logo": "https://admin.calladoc.ae/uploads/logo_1_9a17c503ec.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971502909369",
        "contactType": "customer service",
      }
    };
    // console.log("meta madia dataaaaaaaaaaaaaaa",data);
    return {
        title: title,
        description: desc,
        // keywords: seo?.meta_keywords,
        openGraph: {
          title: title,
          description: desc,
          url: seo?.canonicalUrl,
          images: [
            {
              url: seo?.ogImage?.url ? `${adminBaseUrl}${seo.ogImage.url}` : seo?.shareImage?.url ? `${adminBaseUrl}${seo.shareImage.url}` : null,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          type: seo?.ogType || 'website',
        },
        twitter: {
          card: 'summary_large_image',
          title: title,
          description: desc,
          images: [seo?.ogImage?.url ? `${adminBaseUrl}${seo.ogImage.url}` : seo?.shareImage?.url ? `${adminBaseUrl}${seo.shareImage.url}` : null],
        },
        other: {
          'script:ld+json': JSON.stringify(schema),
        },
    };
}


export default async function BlogSinglePage({ params: { slug } }) {
    const data = await getSingleMedia(slug)
    const seo = data?.data?.seo;
    const title=data?.data?.seo?.metaTitle||data?.data?.title
    
    if (!data) return notFound();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": title,
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
            <DetailWidget data={data?.data}/>
            
            <Script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </main>
    )
}
