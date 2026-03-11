"use client"
import Image from "@/components/Image/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";


export default function DoctorDetail({ data }) {
console.log(data,"datadatadatadata");

  const [active, setActive] = useState("overview")

  const sections = [
    { id: "overview", title: "Overview", content: data?.overview },
    { id: "qualifications", title: "Qualifications", items: data?.qualifications },
    { id: "specializations", title: "Specializations", items: data?.specializations },
    { id: "expertise", title: "Expertise", items: data?.expertise },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={` bg-slate-50 py-12 2xl:py-[100px]`} id="LeaderDetail">
      <div className="container">
      <>
      {/* MOBILE ACCORDION */}
      <div className="lg:hidden">
        <Accordion type="multiple" className="w-full">

          {/* Overview */}
          <AccordionItem value="overview">
            <AccordionTrigger className="font-semibold">
              Overview
            </AccordionTrigger>
            <AccordionContent>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data?.designation }}></div>
            </AccordionContent>
          </AccordionItem>

          {sections.slice(1).map((section) => (
            section.items?.length > 0 && (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="font-semibold">
                  {section.title}
                </AccordionTrigger>

                <AccordionContent>
                  {section.items.map((item, i) => (
                    <p key={i} className="mb-2 flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700">
                        <FiArrowRight size={11} />
                      </span>
                      {item.title}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            )
          ))}

        </Accordion>
      </div>

      {/* DESKTOP SCROLLSPY */}
      <div className="hidden lg:grid grid-cols-12 gap-10">

        {/* LEFT NAV */}
        <div className="col-span-3">
          <nav className="sticky top-24 space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block border-b pb-3 transition ${
                  active === section.id
                    ? "text-sky-900 font-semibold border-sky-900"
                    : "text-gray-500 border-gray-200"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-span-9 ">

          {/* Overview */}
          <section id="overview" className="border-b py-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          </section>

          {sections.slice(1).map((section) => (
            section.items?.length > 0 && (
              <section key={section.id} id={section.id} className="border-b py-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.title}
                </h2>

                {section.items.map((item, i) => (
                  <p key={i} className="mb-3 flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700">
                      <FiArrowRight size={11} />
                    </span>
                    {item.title}
                  </p>
                ))}
              </section>
            )
          ))}

        </div>
      </div>
    </>

        {/* <div className="max-w-[800px] mx-auto">

          <Accordion type="multiple" className="w-full">

            {Array.isArray(data?.qualifications) && data.qualifications.length > 0 && (
              <AccordionItem value="qualifications">
                <AccordionTrigger className="text-sky-900 font-dmSerif text-lg font-bold flex justify-between w-full">
                  Qualifications
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {data?.qualifications?.map((feature, index) => (
                      <p key={index} className="mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700 shrink-0">
                          <FiArrowRight size={11} />
                        </span>
                        {feature?.title}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {Array.isArray(data?.specializations) && data.specializations.length > 0 && (
              <AccordionItem value="specializations">
                <AccordionTrigger className="flex justify-between w-full text-sky-900 font-dmSerif text-lg font-bold">
                  Specializations
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {data?.specializations?.map((feature, index) => (
                      <p key={index} className="mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700 shrink-0">
                          <FiArrowRight size={11} />
                        </span>
                        {feature?.title}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {Array.isArray(data?.expertise) && data.expertise.length > 0 && (
              <AccordionItem value="expertise">
                <AccordionTrigger className="text-sky-900 font-dmSerif text-lg font-bold flex justify-between w-full">
                  Expertise
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {data?.expertise?.map((feature, index) => (
                      <p key={index} className="mb-2 flex items-center gap-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sky-100 text-sky-700 shrink-0">
                          <FiArrowRight size={11} />
                        </span>
                        {feature?.title}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

          </Accordion>

        </div> */}





        {/* <p className="text-sky-900  font-dmSerif  text-3xl md:text-5xl xl:text-6xl font-bold  max-w-[14ch]">Qualifications
        </p>
        {Array.isArray(data?.qualifications) && data.qualifications.length > 0 && (
          <FeaturesSectionWithHoverEffects data={data?.qualifications} />
        )}

        <p className="text-sky-900 font-dmSerif  text-3xl md:text-5xl xl:text-6xl font-bold  max-w-[14ch]">Specializations
        </p>
        {Array.isArray(data?.specializations) && data.specializations.length > 0 && (
          <FeaturesSectionWithHoverEffects data={data?.specializations} />
        )}


        <p className="text-sky-900 font-dmSerif  text-3xl md:text-5xl xl:text-6xl font-bold  max-w-[14ch]">Expertise
        </p>
        {Array.isArray(data?.expertise) && data.expertise.length > 0 && (
          <FeaturesSectionWithHoverEffects data={data?.expertise} />
        )} */}




        <div className="2xl:px-24">
          <div className="max-w-[800px] mx-auto">
            {/* 
            {Array.isArray(data?.qualifications) && data.qualifications.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {data?.qualifications?.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-blue-600/10 text-blue-600 text-xs lg:text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {item?.title}
                  </span>
                ))}
              </div>
            )} */}
            {/* 
            <p className="mt-5 text-black/50 font-medium text-base leading-relaxed lg:leading-relaxed mb-3">Specializations
            </p>
            {Array.isArray(data?.specializations) && data.specializations.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {data?.specializations?.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-block shadow-sm bg-white text-black/60 text-xs lg:text-sm font-medium px-5 py-3 rounded-lg"
                  >
                    {item?.title}
                  </span>
                ))}
              </div>
            )} */}


            {/* <h2 className="  text-3xl lg:text-5xl xl:text-6xl font-semibold  lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-4">{data?.title}</h2>
            {Array.isArray(data?.expertise) && data.expertise.length > 0 && (
              <div className="flex flex-wrap gap-1 md:gap-1.5 mb-4">
                {data?.expertise?.map((item, idx) => (
                  <p key={idx} className="mb-1 flex max-w-[370px] font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                    {item?.title}
                  </p>
                ))}
              </div>
            )} */}
            {/* <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data?.description }}></div> */}
          </div>
          {/* <div className="col-span-12 lg:col-span-4 relative">
              <div className="relative">

                <div className="w-px h-full absolute left-[10px] bg-black/20"></div>
                {data?.timeline?.map((item, i) => {
                  return (
                    <div className=" justify-start items-start gap-6 flex mb-[70px] z-10 relative" key={i}>
                      <div className="w-5 h-5 bg-blue-600 rounded-3xl flex-col-auto" />
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="text-zinc-500 text-base font-normal leading-none">{item?.period}</div>
                        <div className="text-black text-xl lg:text-3xl font-medium  leading-snug">{item?.title}</div>
                        <div className="self-stretch text-neutral-700 text-sm font-normal  leading-normal">{item?.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}


