"use client";
import React from "react";
import styles from "./HomeFaq.module.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const HomeFaq = ({ data, slug, ...props }) => {
  return (
    <section className=" bg-[#f4f5f6] py-[60px] md:py-20 ">
      <div className="container">
      <div className="  mb-7 lg:mb-14">
          <h2 className="  text-sm md:text-lg  text-[#2463eb] text-center uppercase 2xl:text-2xl font-semibold tracking-wider  leading-normal mb-2">
            {data?.title}
          </h2>
          <h3 className="text-sky-900 text-center mx-auto font-dmSerif  text-3xl  md:text-5xl xl:text-6xl font-bold  max-w-[22ch]">
            {data?.titleMain}
          </h3>
        </div>
        <div className="max-w-[800px] mx-auto">
          <div className="">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full space-y-0"
            >
              {data?.items?.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t-[1px] border-gray-350 py-6 first-of-type:border-t-0 first-of-type:pt-[26px] md:py-[30px] lg:py-9 lg:first-of-type:pt-[17px]"
                >
                  <AccordionTrigger className=" px-0 w-full hover:no-underline group py-0  [&[data-state=open]>svg]:rotate-90">
                    <div className="flex items-center justify-between w-full">
                      <span className="flex w-full cursor-pointer justify-between  text-sm font-medium text-left leading-[26px] text-blue-900 outline-none md:text-lg">
                        {item.question}
                      </span>
                      {/* <Plus className="h-6 w-6 text-[#252432] shrink-0 transition-transform duration-200" /> */}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 px-0">
                    <div className="">
                      <p className="text-[16px] text-[#8987a1] leading-[1.6] font-normal">
                        {item?.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;

