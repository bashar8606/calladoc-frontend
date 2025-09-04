import WidgetBlocks from "@/components/WidgetBlocks";
import { HOME_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";
import CtaSection from "@/widgets/CtaSection";

// export async function generateMetadata({ params: { lang } }) {
//   const data = await nextFetch(HOME_PAGE, lang);  
//   const seo = data?.data?.seo
//   return {
//       title: seo?.metaTitle,
//       description: seo?.metaDescription,
//       // keywords: seo?.meta_keywords,
//   };
// }

export default async function Home() {
  const data = await nextFetch(HOME_PAGE);
  const widgetData = data?.data?.widgets
  return (
    <main className="min-h-screen">
      <WidgetBlocks widgets={widgetData} />
    </main>
  );
}

