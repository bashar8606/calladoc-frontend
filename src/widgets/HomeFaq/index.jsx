"use client"
import React from 'react';
import styles from './HomeFaq.module.scss';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const HomeFaq = ({ data, slug, ...props }) => {
  return (
    <div className="min-h-screen bg-[#f4f5f6] py-20 px-8">
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2 gap-24 items-start">
        {/* Left side - FAQ watermark and title */}
        <div className="relative pt-16">
          {/* FAQ Watermark */}
          <div className="absolute top-0 left-0 text-[280px] font-bold text-white/40 leading-[0.8] select-none tracking-tight">
            FAQ
          </div>

          {/* Title positioned over watermark */}
          <div className="relative z-10 pt-32 pl-4">
            <h1 className="text-[52px] font-bold text-[#252432] leading-[1.1] tracking-tight">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h1>
          </div>
        </div>

        {/* Right side - FAQ accordion */}
        <div className="pt-16">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-0">
            {data?.items?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0 border-t-0">
                <AccordionTrigger className="py-8 px-0 hover:no-underline group border-b border-gray-200 [&[data-state=open]>svg]:rotate-45">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[20px] font-semibold text-[#252432] text-left pr-8 group-hover:text-[#252432] leading-[1.3]">
                      {item.title}
                    </span>
                    <Plus className="h-6 w-6 text-[#252432] shrink-0 transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-4 px-0">
                  <div className="pr-12">
                    <p className="text-[16px] text-[#8987a1] leading-[1.6] font-normal">{item.descripiton}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HomeFaq; 


const faqItems = [
  {
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, web development, branding, UI/UX design, and digital marketing solutions.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer ongoing website maintenance services including security updates, content updates, performance optimization, and technical support.",
  },
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "The timeline varies depending on the complexity and scope of the project. Typically, a standard website takes 4-8 weeks from initial consultation to launch.",
  },
  {
    question: "Do you require a deposit for projects?",
    answer:
      "Yes, we typically require a 50% deposit to begin work on your project, with the remaining balance due upon completion and approval.",
  },
]