"use client"
import React from 'react';
import styles from './ServiceAbout.module.scss';
import Markdown from 'react-markdown';
import Image from '@/components/Image/image';

const ServiceAbout = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  return (
    <section
    className={`home-about-widget overflow-hidden relative bg-white w-full py-16 lg:py-[120px] ${
      props.className || ""
    }`}
  >

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
        className="size-[800px] block rounded-full absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2  pointer-events-none"
        style={{
          background: "radial-gradient(#3c7fe663 0%, #ecf1ff00 60%)",
        }}
        aria-hidden="true"
      ></span>
    <div className="container">

        {/* Right side - Content */}
        <div className=" w-full lg:w-[915px] mx-auto">
          <div className="flex flex-col w-full">
            {/* "Who we are" label */}
            <h3 className="font-dmSans font-medium text-lg lg:text-[24px] leading-[3em] text-[#2563eb] mb-0">
              {data?.title}
            </h3>
          <div className='prose w-full'>
            <Markdown
              // className="prose font-dmSans font-normal text-2xl lg:text-[44px] leading-[1.636em] text-[#080808] mb-0"
              components={{
                p: ({ children }) => (
                  <p className="font-dmSans mb-5 font-normal text-lg lg:text-[28px] leading-[1.636em] text-[#080808] mb-0">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 mb-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="mb-2 text-base lg:text-[22px] leading-[1.636em] text-[#080808] font-dmSans">
                    {children}
                  </li>
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
        </div>

    </div>
  </section>
  );
};

export default ServiceAbout; 