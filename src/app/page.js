import WidgetBlocks from "@/components/WidgetBlocks";
import { HOME_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";
import HomeBanner from "@/widgets/HomeBanner";
import HomeServices from "@/widgets/HomeServices";
import HomeSpec from "@/widgets/HomeSpec";
import HomeDoctors from "@/widgets/HomeDoctors";
import HomeStats from "@/widgets/HomeStats";
import HomeChoose from "@/widgets/HomeChoose";
import HomeBlogs from "@/widgets/HomeBlogs";
import HomeAbout from "@/widgets/HomeAbout";

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
      {/* <HomeBanner/>
      <HomeStats/>
      <HomeAbout/>
      <HomeSpec/>
      <HomeDoctors/>
      <HomeServices />
      <HomeChoose/>
      <HomeBlogs/> */}
    </main>
  );
}

