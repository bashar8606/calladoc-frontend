"use client";

import React from "react";
import Image from "../Image/image";

export default function FeatureCard({  data }) {
  return (
    <div  className="group relative overflow-hidden rounded-3xl bg-[linear-gradient(346deg,rgb(58_122_227/89%)_10%,#aac1e4_0%,#0e52a4_104%)] hover:scale-95 will-change-transform scale-100 ease-in-out duration-500  text-white"
            >
              <span
                className="size-[300px] z-[11] blur-xl opacity-50 bg-[#008fff] absolute bottom-[-40%] right-[-30%] block pointer-events-none rounded-full"
              ></span>
              <div className="p-8 pb-0">
              {/* Icon */}
              {/* <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                </div>
              </div> */}

              {/* Content */}
              <div className="mb-8">
                <h3 className="text-3xl font-light  font-dmSerif mb-4 tracking-wide">{data?.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed tracking-normal opacity-80 mb-4">{data?.description}</p>
              {/* <span className="inline-block font-light font-dmSerif tracking-wide text-white ">Learn more</span> */}
              </div>
              </div>
              {/* Image */}
              <div className=" aspect-[100/70] transform-gpu translate-x-[0%] translate-y-[0%] ease-in-out duration-500 group-hover:translate-x-[5%] group-hover:translate-y-[5%] w-[85%] ml-auto relative">
                <Image
                  src={data?.img?.url}
                  alt={data?.title}
                  fill
                  className=" object-contain object-right-bottom"
                />
              </div>
            </div>
  );
}
