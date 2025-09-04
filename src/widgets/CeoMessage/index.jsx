"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Markdown from "react-markdown";
import { IoArrowForwardOutline } from "react-icons/io5";
import ExploreLink from "@/components/ExploreLink";
import Image from "@/components/Image/image";

const CeoMessage = ({ data, slug, ...props }) => {
  return (
    <section
      className={`home-about-widget bg-white w-full pt-16 lg:pt-[120px] bg-[linear-gradient(346deg,rgb(32_108_233/56%)_5%,#6ca0f363_13%,#f9fafe_44%)]`}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-8 lg:gap-[100px] items-end">
       
          <div className="col-span-12 md:col-span-6 gap-[10px] w-full pb-16 lg:pb-[120px] max-w-full">
            <div className="flex flex-col w-full">
              {/* "Who we are" label */}
              <h3 className="font-dmSans font-medium text-sm lg:text-[18px] leading-[3em] text-blue-600 mb-0">
                {data?.title}
              </h3>
  {/* CEO Name */}
  {data?.name && (
                <p className="font-dmSerif text-2xl lg:text-3xl text-blue-900 font-semibold mb-1">
                  {data.name}
                </p>
              )}
              {/* CEO Designation */}
              {data?.designation && (
                <p className="font-dmSans text-base lg:text-lg text-blue-600 mb-6">
                  {data.designation}
                </p>
              )}
           

              <Markdown
                // className="prose font-dmSans font-normal text-2xl lg:text-[44px] leading-[1.636em] text-[#080808] mb-0"
                components={{
                  p: ({ children }) => (
                    <p className="font-dmSans font-normal mb-2 text-lg lg:text-[24px] leading-[1.636em] text-[#080808]">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-normal font-">{children}</strong>
                  ),
                }}
              >
                {data?.description}
              </Markdown>
            
            </div>
          </div>


<div className="  col-span-12 md:col-span-6 md:sticky bottom-0">
  <div className="">
<div className="aspect-[567/685] mx-auto w-[500px] max-w-full relative">
            <Image
              src={data?.img?.url}
              fill
              alt={data?.name}
              className="object-cover"
            />
          </div>
</div></div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
