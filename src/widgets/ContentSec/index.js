"use client";
import React from "react";
import styles from "./ContentSec.module.scss";
import Markdown from "react-markdown";
import Image from "@/components/Image/image";

const ContentSec = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  return (
    <section
      id={`widget-${slug}`}
      className={`py-16 lg:py-[120px] ${styles.container || ""} content-sec-widget`}
      {...props}
    >
      <div className="container">
        {title&&
        <div className="mb-5 lg:mb-14 mx-auto max-w-[530px]">
        {/* <h2 className="  text-lg text-[#2463eb] text-center uppercase 2xl:text-2xl font-semibold tracking-wider  leading-normal mb-2">{title}</h2> */}
    <h3 className="text-sky-900 text-center  font-dmSerif text-xl xl:text-[40px] font-light ">{title}</h3> </div>}
        {description && <p>{description}</p>}
        {items &&
          items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-20 py-4 md:py-12`}
              >
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="aspect w-full aspect-4/3  relative overflow-hidden rounded-3xl ">
                  {item?.img?.url && (
                    <Image
                      src={item?.img.url}
                      alt={item.img.alt || item.titleMain || item.title || ""}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                </div>
                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2">
                  {item?.title && (
                    <h3 className="text-sm text-blue-500 font-semibold mb-2">
                      {item.title}
                    </h3>
                  )}
                  {item?.titleMain && (
                    <h2 className="text-2xl font-dmSerif font-light lg:text-4xl font-bold mb-4">
                      {item.titleMain}
                    </h2>
                  )}
                  <div className="prose w-full">
                    <Markdown
                    // className="prose font-dmSans font-normal text-2xl lg:text-[44px] leading-[1.636em] text-[#080808] mb-0"
                    // components={{
                    //   p: ({ children }) => (
                    //     <p className="font-dmSans mb-5 font-normal text-lg lg:text-[28px] leading-[1.636em] text-[#080808] mb-0">
                    //       {children}
                    //     </p>
                    //   ),
                    //   ul: ({ children }) => (
                    //     <ul className="list-disc pl-6 mb-4">
                    //       {children}
                    //     </ul>
                    //   ),
                    //   li: ({ children }) => (
                    //     <li className="mb-2 text-base lg:text-[22px] leading-[1.636em] text-[#080808] font-dmSans">
                    //       {children}
                    //     </li>
                    //   ),
                    //   strong: ({ children }) => (
                    //     <strong className="font-normal font-">{children}</strong>
                    //   ),
                    // }}
                    >
                      {item.description}
                    </Markdown>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ContentSec;
