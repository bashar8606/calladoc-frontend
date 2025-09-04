"use client"
import MediaCard from "@/components/MediaCard";
import Slider from "@/components/Slider";
import useHeaderSecondary from "@/hooks/useHeaderSecondary";
import { headerState } from "@/recoil/atoms";
import { useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useRecoilState } from "recoil";
import { SwiperSlide } from "swiper/react";

export default function FeaturedBlogs({ data }) {
  const customSettings = {

    slidesPerView: 5,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  useHeaderSecondary(true)
  return (

    <section className={`overflow-hidden pt-6 lg:pt-32   relative bg-neutral-100`} id="FeaturedBlogs">
      <div className="container relative z-10">
        <h1 className=" text-3xl lg:text-6xl font-semibold  lg:leading-tight  bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-7">
          {data?.titleMain}
        </h1>
        <div className="grid grid-cols-12  lg:mb-14 gap-5 lg:gap-10">
          <div className="col-span-12 lg:col-span-3">
            {data?.latest?.slice(1).map((item, i) => {
              return (
                <div key={i}>
                  <MediaCard isSm={true} data={item} />
                </div>
              )
            })}
          </div>

          <div className="col-span-12 lg:col-span-6">
            <MediaCard isLg={true} data={data?.latest[0]} />
          </div>

          <div className="col-span-12 lg:col-span-3 hidden lg:block">
            <h2 className="text-blue-600 text-2xl font-semibold font-condensed ">Popular News </h2>
            {data?.popular?.map((item, i) => {
              return (
                <div key={i}>
                  <MediaCard isPopular={true} data={item} />
                </div>
              )
            })}
          </div>


        </div>
      </div>
      {/* <Slider className={""} customSettings={customSettings}>
        {data?.items?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <IssueCard data={item} />
            </SwiperSlide>
          )
        })}
      </Slider> */}
    </section>
  );
}
