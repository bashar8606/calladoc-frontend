"use client";

import React from "react";
import Image from "../Image/image";
import Link from "next/link";

export default function PackageCard({ data }) {
  return (
    <Link
      href={`/packages/${data?.slug}`}
      className="group block relative overflow-hidden rounded-3xl bg-[linear-gradient(346deg,rgb(58_122_227/89%)_10%,#aac1e4_0%,#0e52a4_104%)] hover:scale-95 will-change-transform scale-100 ease-in-out duration-500  text-white"
    >
      <div className="aspect aspect-[100/130] relative">
        <Image
          src={data?.cover?.url}
          alt={data?.title}
          fill
          className=" object-cover"
        />

        <div className="p-6 pb-0 absolute z-10 bottom-0 left-0 h-full w-full flex flex-col justify-between">
          <div>
            <span className="text-xs inline-block rounded-full py-1 px-3 bg-white/20 backdrop-blur border-white/85 text-white font-bold border tracking-wide">
              {data?.category?.title}
            </span>
          </div>
          {/* Icon */}
          {/* <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                </div>
              </div> */}

          {/* Content */}
          <div className="mb-8">
            <h3 className="text-3xl font-light  font-dmSerif mb-4 tracking-wide">
              {data?.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed tracking-normal opacity-80 mb-4">
              {data?.description}
            </p>
            {/* <span className="inline-block font-light font-dmSerif tracking-wide text-white ">
            Learn more
          </span> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
