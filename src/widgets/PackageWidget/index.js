"use client";
import React from "react";
import Image from "@/components/Image/image";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/Slider";
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { PricingCard } from "@/components/PricingCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PackageWidget = ({ data, slug, ...props }) => {
  const customSettings = {
    slidesPerView: 1.5,
    pagination: false,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    modules: [Autoplay],
    slidesPerView: 1.5,
    // modules: [Navigation],
    breakpoints: {
      640: {
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (
    <section
      className={`home-services-widget relative overflow-hidden py-[60px] lg:py-[100px]`}
    >
      <span
        className="size-[800px] block rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  pointer-events-none"
        style={{ background: "radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)" }}
        aria-hidden="true"
      ></span>
      {/* <h2>HomeDoctors Widget</h2> */}
      {/* Widget content here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

      <div className="container">
        <div className=" lg:mb-14">
          <h2 className="  text-lg text-[#2463eb] text-center uppercase 2xl:text-2xl font-semibold tracking-wider  leading-normal mb-2">
            {data?.title}
          </h2>
          <h3 className="text-sky-900 text-center mx-auto font-dmSerif  text-5xl xl:text-6xl font-light max-w-[14ch]">
            {data?.titleMain}
          </h3>
        </div>
        <Card className="w-full h-full bg-white grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 mx-auto overflow-hidden  max-w-2xl relative bg-white/30 border border-[#d4e1ff] shadow-[1px_3px_11px_0px_#dbe6ff] backdrop-blur-[12px] rounded-[36px] p-[30px]">
          
          <div className="">
          <div className="md:block   mb-6  justify-center ">


{data?.items?.map((item, i) => {
  return (
    <div
      key={i}
      className={`border border-[#d4e1ff] p-3 mb-3 bg-[linear-gradient(303deg,#2463eb_65%,#abc2f6_102%)] z-[1] rounded-[20px] relative shadow-[0px_0px_10px_1px_#2463eb0f] ${i !== data?.items.length - 1 ? "" : ""}`}
    >
       <div className="mb-1">
  <h3 className="text-sm uppercase tracking-wider font-bold text-[#ffffff] mb-1 text-center">
    {item?.type}
  </h3>
  {item?.description && (
    <p className="text-white/65 text-sm text-center">
      {item?.description}
    </p>
  )}
</div>

<div className="text-center">
  <div className="text-4xl font-bold text-white mb-1">
    {item?.price}
    <span className="text-white/65 text-sm">AED</span>
  </div>
  <div className="text-white/65 text-sm">/{item?.title}</div>
</div>
    </div>
  );
})}
</div>
<Button className="w-full bg-[#2463eb]  text-white font-medium py-4 rounded-xl mb-6">
            <Link
              href="https://calladoc.okadoc.com/en-ae/search/result"
              target="_blank"
            >
              Book Now
            </Link>
          </Button>
          </div>
          
          <span
            className="size-[600px] block rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  pointer-events-none"
            style={{
              background: "radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)",
            }}
            aria-hidden="true"
          ></span>

          {/* Header with icon and popular badge */}
       
         

          {/* CTA Button */}
       

          {/* Features section */}
          <div>
          <h4 className="font-semibold text-gray-900 mb-4">Who can avail</h4>
          <p className="text-gray-700 text-sm flex-1 mb-7">
                    {data?.avail||"Type 2 Diabetes, Prediabetes, Gestational Diabetes Mellitus (GDM), Insulin Resistance."}
                  </p>

            <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
            <div className="space-y-3 mb-7">
              {data?.items[0]?.items?.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#2463eb] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm flex-1">
                    {feature?.title}
                  </span>
                  {/* {feature.hasInfo && <Info className="w-4 h-4 text-gray-400 flex-shrink-0" />} */}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm flex-1 ">
                    {data?.note||"Customization (if required) Lab services screening Medical Assessment devices etc"}
                  </p>
          </div>
        </Card>
        {/* <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
          {data?.items?.map((item, i) => {
            return (
              <div key={i} className="">
                <PricingCard data={item} />
              </div>
            );
          })}
        
        </div> */}
      </div>
    </section>
  );
};

export default PackageWidget;
