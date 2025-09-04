"use client"
import Image from "@/components/Image/image";

export default function InnerBanner({ data }) {
  return (
    <section className={`overflow-hidden py-6 lg:py-11 bg-blue-600 min-h-[300px] lg:min-h-[548px] relative flex items-end`} id="InnerBanner">
      <span className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-black to-transparent h-[50%] z-10 " />
      <span className="absolute top-0 left-0 w-full  bg-gradient-to-t from-transparent to-black h-[70%] z-10 " />
      <Image src={data?.cover?.url} fill className="object-cover" alt="cover" />
      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="px-3 lg:px-5 py-1 lg:py-2.5 bg-blue-100 rounded-3xl inline-block text-blue-600 text-sm lg:text-lg 2xl:text-xl font-semibold mb-3 lg:mb-5"> {data?.title} </span>
            <h1 className=" text-white text-3xl lg:text-5xl 2xl:text-6xl font-semibold  lg:leading-tight 2xl:leading-tight ">{data?.titleMain}</h1>
          </div>
          <div className="col-span-6 lg:col-span-4 text-right hidden lg:block">
            <div className="w-6 h-10 py-1 rounded-3xl border border-white justify-center items-end gap-3 inline-flex">
              <div className="w-2 h-2 bg-white rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
