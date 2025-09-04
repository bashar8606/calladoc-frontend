import { getSingleMedia } from "@/lib/getPages";
import DetailWidget from "@/widgets/DetailWidget";
import { notFound } from "next/navigation";


export async function generateMetadata({ params: { slug } }) {
    const data = await getSingleMedia(slug);
    const seo = data?.data?.seo
    // console.log("meta madia dataaaaaaaaaaaaaaa",data);
    return {
        title: seo?.metaTitle,
        description: seo?.metaDescription,
        // keywords: seo?.meta_keywords,
    };
}


export default async function LeaderSinglePage({ params: { slug } }) {
    const data = await getSingleMedia(slug)
    
    if (!data) return notFound();
    return (
        <main>
            <DetailWidget data={data?.data}/>
        </main>
    )
}
