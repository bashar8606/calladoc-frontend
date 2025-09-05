"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Markdown from "react-markdown";
import { IoArrowForwardOutline } from "react-icons/io5";
import ExploreLink from "@/components/ExploreLink";
import Image from "@/components/Image/image";

const HomeAbout = ({ data, slug, ...props }) => {
  return (
    <section
      className={`home-about-widget bg-white w-full py-16 lg:py-[120px] ${
        props.className || ""
      }`}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-8 lg:gap-[100px]">
          {/* Left side - Image container */}
          <div className="relative col-span-12 md:col-span-4">
            {/* Image mask group */}
            <div
              className="relative aspect-[456/500]"
              style={{
                WebkitMaskImage: "url('/images/shape-logo.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
                maskImage: "url('/images/shape-logo.svg')",
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
              }}
            >
              <Image
                src="/images/banner.png"
                alt="Masked"
                fill
                className="object-cover "
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-span-12 md:col-span-8 gap-[10px] w-full lg:w-[915px] max-w-full">
            <div className="flex flex-col w-full">
              {/* "Who we are" label */}
              <h3 className="font-dmSans font-medium text-lg lg:text-[24px] leading-[3em] text-[#1F6DF3] mb-0">
                {data?.title}
              </h3>

              <Markdown
                // className="prose font-dmSans font-normal text-2xl lg:text-[44px] leading-[1.636em] text-[#080808] mb-0"
                components={{
                  p: ({ children }) => (
                    <p className="font-dmSans font-normal text-2xl lg:text-[44px] leading-[1.636em] text-[#080808] mb-0">
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
              <div className="flex flex-col gap-[10px] pt-[30px] lg:pt-[50px] w-fit">
                {data?.link?.url&&
                <ExploreLink href={data?.link?.url}>{data?.link?.label}</ExploreLink>}
              </div>
            </div>
          </div>

          {/* Background blur effect */}
          <div className="hidden lg:block absolute w-[1168px] h-[1168px] top-[322px] right-[1144px] rounded-full bg-[rgba(27,117,255,0.21)] blur-[464px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
