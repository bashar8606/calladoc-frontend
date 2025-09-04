"use client"
import DoctorCard from "@/components/DoctorCard";
import Image from "@/components/Image/image";

export default function DoctorsContent({ data }) {
  return (
    <section className={`overflow-hidden py-10 lg:py-[100px]  relative `} id="LeadersContent">
      <div className="container relative z-10">
        <div className="grid grid-cols-12 items-end mb-20 gap-y-4">
          <div className="col-span-12 lg:col-span-6">
            <span className="  text-blue-600 text-xl font-condensed font-semibold mb-3"> {data?.title} </span>
            <h1 className=" font-dmSerif  text-3xl lg:text-5xl  font-semibold  lg:leading-normal xl:leading-tight bg-gradient-to-r from-[#242E49]  to-[#5B95F9] bg-clip-text text-transparent font-condensed ">{data?.titleMain}</h1>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-neutral-700 text-base font-normal  leading-relaxed ">{data?.description}</p>
          </div>
        </div>

        <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5  gap-2 lg:gap-4 ">
          {data?.items?.map((item, i) => {
            return (
              <div className="" key={i}>
                <DoctorCard data={item} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}


