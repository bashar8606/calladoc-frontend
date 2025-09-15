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
import PackageCard from "@/components/PackageCard";

const PackageListing = ({ data, slug, ...props }) => {
  
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
      className={`home-services-widget relative overflow-hidden bg-gradient-to-b to-[#fafafe] from-white py-[60px] lg:py-[100px]`}
    >
      {/* <h2>HomeDoctors Widget</h2> */}
      {/* Widget content here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

      <div className="container">
        {/* <div className=" lg:mb-14">
          <h2 className="  text-lg text-[#2463eb] text-center uppercase 2xl:text-2xl font-semibold tracking-wider  leading-normal mb-2">
            {data?.title}
          </h2>
          <h3 className="text-sky-900 text-center mx-auto font-dmSerif  text-5xl xl:text-6xl font-light max-w-[14ch]">
            {data?.titleMain}
          </h3>
        </div> */}
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"} >
          {data?.items?.map((data, i) => {
            return (
              <div key={i} className="">
                <PackageCard data={data}  />
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

export default PackageListing;
