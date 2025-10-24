"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function MediaCard({ data, isSm = false, isLg = false, isPopular = false }) {  
  return (

    <Link href={`/blogs/${data?.slug}`} className="group h-full flex flex-col w-full relative">
  {isLg || isSm ? "" : (
    <>
      <span className="absolute bottom-0 left-0 w-full bg-[#dbdbdb] h-[2px] z-10" />
      <span className="absolute bottom-0 left-0 w-full bg-blue-600 h-[2px] z-20 scale-x-0 transform transition-transform origin-left duration-700 ease-in-out group-hover:scale-x-100" />
    </>
  )}

  {isPopular ? "" : (
    <div className="aspect-[470/283] relative bg-white w-full rounded-2xl overflow-hidden">
      {data?.cover?.url && (
          <Image
            src={data?.cover?.url}
            fill
            className="object-cover"
            alt={`${data?.title}`}
          />
        )
      }
    </div>
  )}
  <div className={` relative z-20 ${isSm ? "pt-3 pb-4" : isPopular ? "pt-6 pb-4" : "pt-4 pb-8"}`}>
    <div>
      <p className=" text-base leading-none mb-3 text-blue-600 font-medium">{data?.category?.name}</p>
      <h4 className={`text-black font-normal leading-normal line-clamp-2 ${isSm ? "text-lg" : isLg ? "text-3xl" : "text-xl mb-3"}`}>
        {data?.title}
      </h4>
    </div>
    {isLg || isSm || isPopular ? "" : (
      <p className="text-black text-sm lg:text-base font-medium">Read More</p>
    )}
  </div>
</Link>
  );
}
