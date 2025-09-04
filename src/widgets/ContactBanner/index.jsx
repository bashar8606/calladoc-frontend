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
        
    lg:bg-[url('/images/heroDesktopWave.webp'),linear-gradient(108deg,#E1E2FE_30%,#C3C4FD_100%)]
    bg-[size:100%_auto,100%_CALC(100%_-_1px)]
    md:bg-[size:75%_auto,100%_CALC(100%_-_1px)]
    lg:bg-[size:55%_auto,100%_CALC(100%_-_1px)]
    xxl:bg-[size:50%_auto,100%_CALC(100%_-_1px)]
    lg:bg-[position:bottom_right,top_right] bg-no-repeat
    md:bg-[url('/images/HeroTablet.webp'),linear-gradient(108deg,#E1E2FE_30%,#C3C4FD_100%)]
    bg-[url('/images/HeroMobile.png'),linear-gradient(108deg,#E1E2FE_0%,#C3C4FD_100%)]
    bg-[position:bottom_right,top_right]
  
    lg:h-[600px]
   relative h-auto lg:flex lg:items-center lg:justify-center p-0 md:pb-[59px] md:pt-[130px] pt-[74px]"
   style={{backgroundPosition: "200% 100%, 100% 0"}}
    >
      <div className=" container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="flex gap-10 lg:p-10 lg:pl-0 items-center text-center lg:text-start">
              <div className="flex-1 lg:p-0">
                <h2 className="fade opacity-0 text-sm font-semibold text-[#152072] mb-1">
                  Contact Us
                </h2>
                <h1 className="fade opacity-0 mb-2.5 font-dmSerif text-[25px] font-semibold leading-[30px] text-blue-900 lg:text-[40px] lg:leading-[50px]">
                  We'd love to hear from you
                </h1>
                <h2 className="fade opacity-0 mb-5 flex max-w-[370px] font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                  <div>
                    <p>We have stores around the world.</p>
                  </div>
                </h2>

                <div className="grid lg:grid-cols-2 gap-4 mt-10">
                  <div className=" bg-white/40 rounded-2xl border p-4 fade opacity-0">
                    <h4 className="text-lg font-semibold mb-1">Talk to us</h4>
                    <p className="mb-2 text-sm text-black/50">
                      Our Team Is Here To Help
                    </p>
                    <a className="underline text-[#152072] text-sm font-medium">
                      {" "}
                      +971 5072 46289


                    </a>
                  </div>

                  <div className=" bg-white/40 rounded-2xl border p-4 fade opacity-0">
                    <h4 className="text-lg font-semibold mb-1">Email to us</h4>
                    <p className="mb-2 text-sm text-black/50">
                      Our Team Is Here To Help
                    </p>
                    <a className="underline text-[#152072] text-sm font-medium">
                      {" "}
                      hello@calladoc.ae

                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" relative overflow-hidden fade opacity-0">
              <EnquireForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
