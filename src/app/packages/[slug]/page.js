import WidgetBlocks from "@/components/WidgetBlocks";
import { PACKAGE_SINGLE } from "@/constants/apiRoutes";
import { getPackage } from "@/lib/getPackages";
import { notFound } from "next/navigation";

export default async function PackageDetail({ params: { slug } }) {
  try {
    const data = await getPackage(slug);
    const widgetData = data?.data?.widgets;
    
    if (!data) return notFound();
    
    return (
      <main className="min-h-screen">
        <WidgetBlocks widgets={widgetData} />
      </main>
    );
  } catch (error) {
    return notFound();
  }
}