import WidgetBlocks from "@/components/WidgetBlocks";
import { LEADER_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";

export async function generateMetadata({ params}) {
  const data = await nextFetch(LEADER_PAGE)
  const seo = data?.data?.seo
  return {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      keywords: seo?.meta_keywords,
  };
}

export default async function DoctorsPage({ params }) {
  const data = await nextFetch(LEADER_PAGE);
  const widgetData = data?.data?.widgets
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  )
}