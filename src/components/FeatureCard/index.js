"use client";

import React from "react";
import Image from "../Image/image";

export default function FeatureCard({ data }) {
  return (
    <div className="group flex flex-col h-full relative overflow-hidden bg-[#2a457e] shadow-lg rounded-3xl  hover:scale-95 will-change-transform scale-100 ease-in-out duration-500  text-white">
      <div className="overflow-hidden aspect-[100/70] transform-gpu translate-x-[0%] translate-y-[0%] ease-in-out duration-500 group-hover:translate-y-[0%] w-full  relative before:content-[''] before:absolute before:inset-0  before:z-10 before:pointer-events-none before:bg-gradient-to-t before:from-[#2a457e] before:to-transparent">
        
        <Image
          src={data?.img?.url}
          // src={"/family.png"}
          alt={data?.title}
          fill
          className="object-cover "
        />
      </div>

      <div className="p-4 md:p-8">
        {/* Icon */}
        {/* <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                </div>
              </div> */}

        {/* Content */}
        <div className="mb-2">
          <h3 className="text-2xl opacity-80 text-[#fff] font-light  font-dmSerif mb-4 tracking-wide">
            {data?.title}
          </h3>
          <p className="text-[#ffffff96] text-sm leading-relaxed tracking-normal opacity-80 mb-0">
            {data?.description}
          </p>
          {/* <span className="inline-block font-light font-dmSerif tracking-wide text-white ">Learn more</span> */}
        </div>
      </div>
      {/* Image */}
    </div>
  );
}
