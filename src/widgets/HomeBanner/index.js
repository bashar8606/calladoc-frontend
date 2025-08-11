"use client";
import Image from "@/components/Image/image";
// import {
//   EffectFade,
//   Navigation,
//   Pagination,
//   Autoplay,
//   FreeMode,
//   Thumbs,
// } from "swiper/modules";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import 'swiper/css/pagination';
// import "swiper/css/autoplay";
import style from "./HomeBanner.module.scss";
import { MdCallEnd } from "react-icons/md";
import Link from "@/components/Link";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaVideoSlash } from "react-icons/fa";
import ExploreLink from "@/components/ExploreLink";

export default function HomeBanner({ data }) {
  // const customSettings = {
  //   slidesPerView: 1,
  //   effect: "fade",
  //   autoplay: true,
  //   modules: [EffectFade, Navigation, Autoplay, Pagination],
  //   // modules: [Navigation],
  //   pagination: {
  //     clickable: true,
  //   },
  //   navigation: {
  //     prevEl: `.swiper-button-prev`,
  //     nextEl: `.swiper-button-next`,
  //   },
  // };
  return (
    <section
      className={`overflow-hidden flex items-end bg-[#ECF1FF] pb-[100px] relative min-h-[100vh] ${style.section}`}
      id="HomeBanner"
    >
      {/* <Slider className={""} customSettings={customSettings}>
        {data?.slides?.map((item, i) => {
          return (
            <SwiperSlide key={i} className="bg-white">
              <div className="h-[100vh] w-full relative flex items-end pb-14 lg:pb-16 2xl:pb-[100px]">
                <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent h-[50%] z-10 " />
                <span className="absolute top-0 left-0 w-full  bg-gradient-to-t from-transparent to-black h-[70%] z-10 " />
                <Image
                  src={item?.cover?.url}
                  fill
                  className="object-cover"
                  alt={item?.title}
                />

                <div className="container z-10 relative">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-7">
                      <h2 className="text-4xl lg:text-5xl 2xl:text-[64px] font-semibold  lg:leading-tight  text-white font-condensed mb-4 lg:mb-5">{item?.title}</h2>
                      <p className="text-white text-base lg:text-lg 2xl:text-xl  lg:leading-9 mb-5 lg:mb-8 2xl:mb-11">{item?.description}</p>
                      <Link href={item?.link?.url} className="btn btn-white">{item?.link?.label}</Link>
                    </div>

                  </div>

                </div>
              </div>

            </SwiperSlide>
          )
        })}
<div className="container">
        <div className="custom-pagination"></div>
      </div>
      </Slider>
       */}
      <div className="absolute top-0 left-0 z-10 w-[220px] aspect-[220/474]">
        <Image
          src="/images/shape-banner.svg"
          alt=""
          fill
          className=" object-cover"
          aria-hidden="true"
        />
      </div>
      <span
        className="size-[800px] block rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2  pointer-events-none"
        style={{
          background: "radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)",
        }}
        aria-hidden="true"
      ></span>

      <div className="absolute top-0 right-0 w-[40%] h-[95%]  ">
        <div className="overflow-hidden bg-red-500 rounded-bl-[142px] absolute inset-0">
          <Image
            src="/images/banner.png"
            fill
            className="object-cover"
            alt="sdfs"
          />
        </div>
        <div className="absolute top-[30%] left-0 -translate-x-1/2 w-[240px] flex flex-col items-end">
          <div className="pl-3 mb-3 w-full  pr-5 py-2 bg-white rounded-3xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.07)] inline-flex  items-center gap-2.5 text-indigo-950 text-xl font-medium">
            <div className="rounded-full size-9 bg-red-400"></div>
            Calling...
          </div>
          <div className="pl-3  pr-5 py-2 bg-white rounded-3xl shadow-[0px_4px_24px_0px_rgba(0,0,0,0.07)] inline-flex  items-center gap-2.5 text-indigo-950 text-xl font-medium">
            <div className="rounded-full size-9 bg-red-400"></div>
            CallAdoc
          </div>
        </div>

        <div className="left-1/2 -translate-x-1/2 bottom-[10%] absolute inline-flex flex-col justify-start items-start gap-2.5">
          <div className="px-5 py-2 bg-white/40 rounded-[90px] backdrop-blur-md inline-flex justify-center items-center gap-2.5">
            <div className="size-12 bg-white rounded-[44px] inline-flex flex-col justify-center items-center gap-2.5">
                <FaMicrophoneSlash />
            </div>
            <div className="size-16 text-2xl text-white bg-rose-500 rounded-[100px] inline-flex flex-col justify-center items-center gap-2.5">
              <MdCallEnd />
            </div>
            <div className="size-12 bg-white rounded-[62px] inline-flex flex-col justify-center items-center gap-2.5">
              <FaVideoSlash />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 items-end">
          <div className="col-span-1">
            <h1 className="font-dmSans lg:text-6xl !leading-tight font-semibold mb-5">
              <span className="text-indigo-950 ">
                Telehealth & Online <br />
                Doctor Consultation
                <br />
                in{" "}
              </span>
              <span className="text-blue-800 ">Dubai</span>
            </h1>
            <p className="w-[565px] mb-6  text-indigo-950 text-xl 2xl:text-2xl leading-10">
              Primary Care Just One Touch Away No Waiting, Easy Access, and
              Affordable Rates!
            </p>
            <ExploreLink>Read more</ExploreLink>
          </div>
        </div>
      </div>
    </section>
  );
}
