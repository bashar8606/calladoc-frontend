"use client";

import React from "react";
import Image from "../Image/image";

export default function MedicalCard({ imageSrc, title, data }) {
  return (
    <div className="group relative w-full h-[460px] rounded-[20px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Background Image */}
      <Image
        src="/images/banner.png"
        alt={`${data?.title}`}
        fill
        className="object-cover transition-transform  ease-[cubic-bezier(0.4,0,0.2,1)] duration-500 group-hover:scale-110"
      />

      {/* Idle title */}
      <div className="absolute bottom-6 left-6 text-white text-lg font-medium opacity-100 group-hover:opacity-0 group-hover:translate-y-1/2 group-hover:scale-90 will-change-transform transition-[opacity,transform] duration-300">
        {data?.title}
      </div>
      {/* bg-gradient-to-t from-black/60 via-black/30 to-transparent */}
      {/* Hover Overlay */}
      <div className="absolute bottom-0 left-0 w-full   opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-6">
        <div className="text-white text-lg font-semibold mb-1">
          {data?.title}
        </div>
        <p className="text-white text-sm opacity-80 mb-4 leading-tight">
          {data?.description}
        </p>

        {/* <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A1A1A] to-black/80 opacity-80 hover:opacity-100 transition duration-300" />
        </div> */}
      </div>
    </div>
  );
}
