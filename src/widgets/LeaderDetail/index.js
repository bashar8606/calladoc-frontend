"use client"
import Image from "@/components/Image/image";


export default function LeaderDetail({ data }) {
  return (
    <section className={`overflow-hidden bg-slate-50 py-12 2xl:py-[100px]`} id="LeaderDetail">
      <div className="container">
        <div className="2xl:px-24">
          <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="  text-3xl lg:text-5xl xl:text-6xl font-semibold  lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed mb-4 lg:mb-4">{data?.title}</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data?.content }}></div>
            </div>
            <div className="col-span-12 lg:col-span-4 relative">
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
