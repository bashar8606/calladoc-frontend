import { getSingleLeader } from "@/lib/getPages";
import DoctorsDetail from "@/widgets/DoctorsDetail";
import DoctorsSingleBanner from "@/widgets/DoctorsSingleBanner";
import { notFound } from "next/navigation";


export async function generateMetadata({ params: { slug } }) {
    const data = await getSingleLeader(slug);
    const seo = data?.data?.seo
    // console.log("meta leaders dataaaaaaaaaaaaaaa",data);
    return {
        title: seo?.metaTitle,
        description: seo?.metaDescription,
        // keywords: seo?.meta_keywords,
    };
}


export default async function LeaderSinglePage({ params: { slug } }) {
    
    const data = await getSingleLeader(slug)
    if (!data) return notFound();
    return (
        <main>
            <DoctorsSingleBanner data={data?.data} />
            <DoctorsDetail data={data?.data} />
        </main>
    )
}
