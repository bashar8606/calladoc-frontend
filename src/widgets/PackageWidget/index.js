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

const PackageWidget = ({ data, slug, ...props }) => {
  
  const customSettings = {
    slidesPerView: 1.5,
    pagination: false,
    spaceBetween: 10,
    loop:true,
    autoplay:true,
    modules:[Autoplay],
    slidesPerView:1.5,
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
      <span className="size-[800px] block rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  pointer-events-none" style={{background:"radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)"}} aria-hidden="true"></span>
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
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"} >
          {data?.items?.map((item, i) => {
            return (
              <div key={i} className="">
                <PricingCard data={item}  />
              </div>
            );
          })}
          {/* <div className="container">
            <div className="custom-pagination"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PackageWidget;
