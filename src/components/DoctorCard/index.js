"use client";

import React from "react";
import Image from "../Image/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function DoctorCard({ imageSrc, title, data }) {
  return (
    <Link href={`/doctors/${data?.slug}`} className="group block relative w-full aspect-[295/400] rounded-[20px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Background Image */}
      <Image
        src={data?.img?.url}
        alt={`${data?.title}`}
        fill
        className="object-cover transition-transform  ease-[cubic-bezier(0.4,0,0.2,1)] duration-500 group-hover:scale-110"
      />

      <span className="scale-75   group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out w-12  h-12 absolute top-2 right-2 bg-white rounded-full border border-white flex items-center justify-center text-black text-2xl">
        <MdArrowOutward />
      </span>
      <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-[#000000] to-transparent h-[50%] z-10 "></span>

      {/* bg-gradient-to-t from-black/60 via-black/30 to-transparent */}
      {/* Hover Overlay */}
      <div className="p-2 z-10 absolute bottom-0 left-0 w-full  group-hover:delay-200 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end ">
        <div className="p-3 px-4 rounded-[20px] bg-[#4a4a4a73] border border-white/50">
          <div className="text-white text-lg font-semibold mb-1">
            {data?.name}
          </div>
          <p className="text-white text-sm opacity-80 mb-2 leading-tight">
            {data?.designation}
          </p>
          <p className="text-white text-sm  leading-tight">
            {data?.languages?.length > 0 && data?.languages?.map((item, i)=>
            <span
              key={i}
              className="text-[#2463eb] py-[5px] px-[10px] rounded-full bg-[#cad8f8] bg-opacity-75 text-xs font-semibold leading-tight inline-block me-1 mb-1"
            
            >
              {item.title}
            </span>
            )}
          </p>
        </div>

      </div>
    </Link>
  );
}
