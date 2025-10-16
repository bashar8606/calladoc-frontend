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
import DoctorCard from "@/components/DoctorCard";
import MediaCard from "@/components/MediaCard";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ExploreLink from "@/components/ExploreLink";

const HomeBlogs = ({ data, slug, ...props }) => {
  const customSettings = {
    slidesPerView: 1.5,
    pagination: false,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    modules: [Autoplay],
    slidesPerView: 1.2,
    modules: [Navigation],
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
      prevEl: `.sp2`,
      nextEl: `.sn2`,
    },
  };
  return (
    <section
      className={`home-services-widget relative overflow-hidden bg-[#fff] py-[60px] lg:py-[100px] md:pb-0`}
    >
      {/* <h2>HomeDoctors Widget</h2> */}
      {/* Widget content here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}

      <div className="container">
      <div className="flex justify-between items-end mb-7 lg:mb-14">
          <div className="grow">
            <h2 className=" text-[#2463eb]  text-sm md:text-lg uppercase 2xl:text-2xl font-medium tracking-wider  leading-normal mb-2">
              {data?.title}
            </h2>
            <h3 className="text-sky-900 font-dmSerif  text-3xl md:text-5xl xl:text-6xl font-light max-w-[14ch]">
              {data?.titleMain}
            </h3>
          </div>
          <div className="">
            <div className="flex gap-2 lg:justify-end">
              <button 
                className="size-8 md:size-12 relative bg-white rounded-full border border-white flex items-center justify-center text-blue-600 text-2xl sp2"
                aria-label="Previous blog posts"
              >
                <IoIosArrowRoundBack />
              </button>
              <button 
                className="size-8 md:size-12 relative bg-white rounded-full border border-white flex items-center justify-center text-blue-600 text-2xl sn2"
                aria-label="Next blog posts"
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
        <Slider className={"w-full mb-8 lg:mb-14"} customSettings={customSettings}>
          {data?.items?.map((item, i) => {
            return (
              <SwiperSlide key={i} className="h-auto">
                <MediaCard data={item} />
              </SwiperSlide>
            );
          })}
        
        </Slider>

        <div className="text-center">
        {data?.link?.url&&
        <ExploreLink aria-label={data?.link?.label} href={data?.link?.url}>{data?.link?.label}</ExploreLink>}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogs;
