"use client";

import React from "react";
import Image from "../Image/image";
import Link from "../Link";
import { MdArrowOutward } from "react-icons/md";

export default function MedicalCard({ imageSrc, title, data }) {
  return (
    <Link href={`/services/${data?.slug}`} className="group block border-black relative w-full h-[400px] md:h-[460px] rounded-[20px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Background Image */}
      <Image
        src={data?.cover?.url}
        alt={`${data?.title} image`}
        fill
        className="object-cover transition-transform  ease-[cubic-bezier(0.4,0,0.2,1)] duration-500 group-hover:scale-110"
      />


<span className="scale-75  opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out w-12  h-12 absolute top-2 right-2 bg-white rounded-full border border-white flex items-center justify-center text-black text-2xl">
<MdArrowOutward />
              </span>
<span className="absolute bottom-0 left-0 w-full   bg-gradient-to-t from-[#0052d0] to-transparent h-[50%] z-10 "></span>
 
      <div className="p-2 z-10 absolute bottom-0 left-0 w-full  translate-y-[0%]   flex flex-col justify-end ">
        <div className="p-3 px-4 rounded-[20px] bg-[#4a4a4a73] border border-white/40  backdrop-blur-sm">
        <div className="text-white text-lg font-semibold mb-1">
          {data?.title}
        </div>
        <p className="text-white text-sm opacity-80 mb-4 leading-tight">
          {data?.description}
        </p>
        </div>

        {/* <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1A1A] to-black/80 opacity-80 hover:opacity-100 transition duration-300" />
        </div> */}
      </div>
    </Link>
  );
}
