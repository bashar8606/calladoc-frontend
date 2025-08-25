import WidgetBlocks from "@/components/WidgetBlocks";
import { PACKAGES_PAGE } from "@/constants/apiRoutes";
import nextFetch from "@/utils/nextFetch";

export default async function PackagesPage() {
  try {
    const data = await nextFetch(PACKAGES_PAGE);
    const widgetData = data?.data?.widgets;
    
    return (
      <main className="min-h-screen">
        <WidgetBlocks widgets={widgetData} />
      </main>
    );
  } catch (error) {
    // Fallback content if API fails
    return (
      <main className="min-h-screen">
        <section className="packages-widget relative overflow-hidden py-[60px] lg:py-[100px]">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl xl:text-6xl font-light text-gray-900 mb-6">
                Our Packages
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive packages designed to meet your needs
              </p>
            </div>
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Packages will be displayed here once configured.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}