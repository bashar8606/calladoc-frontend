"use client";
import React from "react";
import Image from "@/components/Image/image";
import EnquireForm from "@/components/EnquireForm";
import { useContactBanner } from "./useContactBanner";

const ContactBanner = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  const {main} = useContactBanner()
  return (
    <section
      id="DesignSysyemHero"
      ref={main}
      className="
        bg-[linear-gradient(108deg,#E1E2FE_30%,#C3C4FD_100%)]
 
    lg:h-[600px] overflow-hidden
   relative h-auto lg:flex lg:items-center lg:justify-center p-0  md:pt-[130px] pt-6"
   style={{backgroundPosition: "200% 100%, 100% 0"}}
    >

{/* // lg:bg-[url('/images/heroDesktopWave.webp'),linear-gradient(108deg,#E1E2FE_30%,#C3C4FD_100%)]
    // bg-[size:100%_auto,100%_CALC(100%_-_1px)]
    // md:bg-[size:75%_auto,100%_CALC(100%_-_1px)]
    // lg:bg-[size:55%_auto,100%_CALC(100%_-_1px)]
    // xxl:bg-[size:50%_auto,100%_CALC(100%_-_1px)]
    // lg:bg-[position:bottom_right,top_right] bg-no-repeat
    // md:bg-[url('/images/HeroTablet.webp'),linear-gradient(108deg,#E1E2FE_30%,#C3C4FD_100%)]
    // bg-[url('/images/HeroMobile.png'),linear-gradient(108deg,#E1E2FE_0%,#C3C4FD_100%)]
    // bg-[position:bottom_right,top_right] */}
  
      <div className=" container">
        <div className="grid  md:grid-cols-2 items-end">
          <div className=" pb-10 md:pb-[59px]">
            <div className="flex gap-10 lg:p-10 lg:pl-0 justify-center lg:justify-start items-center text-center lg:text-start">
              <div className="flex-1 lg:p-0">
                <h1 className="fade lg:opacity-0 text-sm font-semibold text-[#152072] mb-1">
                 {data?.title}
                </h1>
                <h2 className="fade lg:opacity-0 mb-2.5 font-dmSerif text-[25px] font-semibold leading-[30px] text-blue-900 lg:text-[40px] lg:leading-[50px]">
                {data?.titleMain}
                </h2>
                <p className="fade lg:opacity-0 mb-5 flex max-w-[370px] justify-center lg:justify-start font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                      {data?.description}
                </p>
          
                <div className="grid lg:grid-cols-2 gap-4 mt-10">
                  {data?.items?.map((item, i)=>
                    <div key={i} className=" bg-white/40 rounded-2xl border p-4 fade lg:opacity-0">
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="mb-2 text-sm text-black/50">{item.description}</p>
                      {item?.items?.map((subItem, index)=>{
                        return(
                          <a key={`rr${index}`} className="underline text-[#152072] text-sm font-medium">{subItem.value}</a>
                        )
                      })}
                     
                    </div>
                  )}
              
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" relative overflow-hidden fade lg:opacity-0">
              {/* <EnquireForm /> */}
              <div className="aspect-[567/597] mx-auto w-full max-w-[250px] md:max-w-[450px] relative">
            <Image
              src={"/images/cta-banner.png"}
              fill
              alt="calladoc cta banner"
              className="object-cover"
            />
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
