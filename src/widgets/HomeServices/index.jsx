"use client";
import React from "react";
import styles from "./HomeServices.module.scss";
import Image from "@/components/Image/image";
import MedicalCard from "@/components/MedicalCard";
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

const HomeServices = ({ data, slug, ...props }) => {
  
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
      className={`home-services-widget relative overflow-hidden bg-[#13499D] py-[60px] lg:py-[100px]`}
    >
      {/* <h2>HomeServices Widget</h2> */}
      {/* Widget content here */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
      <div className="absolute top-0 right-0 w-[50%] aspect-[1216/394]">
        <Image
          src="/images/shape-pattern.svg"
          alt="Masked"
          fill
          className="object-cover "
          priority
        />
      </div>
      <div className="container">
        <div className=" lg:mb-14">
          <h2 className=" text-white text-lg uppercase 2xl:text-2xl font-medium tracking-wider  leading-normal mb-2">
            {data?.title}
          </h2>
          <h3 className="text-white text-5xl xl:text-6xl font-light max-w-[14ch]">
            {data?.titleMain}
          </h3>
        </div>
        {console.log(data, "dfsggg")}
        <Slider className={""} customSettings={customSettings}>
          {data?.items?.map((item, i) => {
            return (
              <SwiperSlide key={i} className="">
                <MedicalCard data={item} title="sfdsdf" />
              </SwiperSlide>
            );
          })}
          {/* <div className="container">
            <div className="custom-pagination"></div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default HomeServices;
