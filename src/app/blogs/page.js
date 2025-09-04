import WidgetBlocks from "@/components/WidgetBlocks";
import { MEDIA_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";

export async function generateMetadata({  }) {
  const data = await nextFetch(MEDIA_PAGE);
  const seo = data?.data?.seo
  return {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      // keywords: seo?.meta_keywords,
  };
}

export default async function BlogsPage({  }) {
  const data = await nextFetch(MEDIA_PAGE);
  const widgetData = data?.data?.widgets
  console.log(widgetData,"widgetDatawidgetDatawidgetData");
  
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  )
}