import WidgetBlocks from "@/components/WidgetBlocks"
import { PAGES } from "@/constants/apiRoutes";
import { getPage } from "@/lib/getPages";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { slug } }) {
  const data = await getPage(slug)
  const seo = data?.data?.seo
  // const headersList = headers();
  // const header_url = headersList.get("x-url") || "";
  // const openGraphImage = data?.seo?.image
  //   ? [{ url: data?.seo?.image?.url, alt: data?.seo?.title }]
  //   : [];
  return {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
    // openGraph: {
    //   images: openGraphImage,
    //   title: data?.seo?.title,
    //   description: data?.seo?.description,
    //   // url: header_url,
    // },
    // twitter: {
    //   card: data?.seo?.title,
    //   title: data?.seo?.title,
    //   description: data?.seo?.description,
    //   images: {
    //     url: data?.seo?.image?.url,
    //     alt: data?.seo?.title,
    //   },
    // },
  };
}




export default async function CustomPage({ params: { slug } }) {
  const data = await getPage(slug)
  const widgetData = data?.data?.widgets
  // if (!data) return notFound();
  // console.log(data,slug,"data");
  return (
    <main>
      <WidgetBlocks widgets={widgetData} />
    </main>
  )
}
