"use client"
import Image from "@/components/Image/image";
import Link from "@/components/Link";
import { IoHomeOutline } from "react-icons/io5";

export default function DoctorsSingleBanner({ data }) {
  
  return (

    <>
    <section
      id="DesignSysyemHero"
      className="
    lg:bg-[url('/images/heroDesktopWave.webp'),linear-gradient(108deg,#e1edfe_30%,#adbfff_100%)]
    bg-[size:100%_auto,100%_CALC(100%_-_1px)]
    md:bg-[size:75%_auto,100%_CALC(100%_-_1px)]
    lg:bg-[size:55%_auto,100%_CALC(100%_-_1px)]
    xxl:bg-[size:50%_auto,100%_CALC(100%_-_1px)]
    lg:bg-[position:bottom_right,top_right] bg-no-repeat
    md:bg-[url('/images/HeroTablet.webp'),linear-gradient(108deg,#e1edfe_30%,#adbfff_100%)]
    bg-[url('/images/HeroMobile.png'),linear-gradient(108deg,#e1edfe_0%,#adbfff_100%)]
    bg-[position:bottom_right,top_right]
  
    lg:h-[600px]
   relative h-auto lg:flex lg:items-center lg:justify-center p-0 md:pb-[59px]    md:pt-[130px] pt-[100px]"
    >
      <div className=" container">
        <div className="grid md:grid-cols-2 items-center">
          <div>
            <div className="flex gap-10 lg:p-10 lg:pl-0 items-center text-center lg:text-start">
              <div className="flex-1 lg:p-0">

              <nav className=" mb-4 flex items-center text-xs text-blue-700/80 font-medium" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {/* Home - Always present */}
        <li>
          <a href="/" className="hover:underline flex items-center">
            <IoHomeOutline className="me-1" />
            Home
          </a>
        </li>
        
        <li  className='truncate max-w-[120px] md:max-w-[200px]'>
              <span className="mx-0.5 text-blue-700/40">/</span>
              <Link
                href="/doctors" 
                className={`hover:underline capitalize text-blue-900 font-semibold`}
              >
                Doctors
              </Link>
            </li>
      </ol>
    </nav>


                <h1 className="mb-2.5 font-dmSerif text-[25px] font-semibold leading-[30px] text-blue-900 lg:text-[40px] lg:leading-[50px]">
                  {data?.name}
                </h1>
                <div className="prose max-w-none mb-4" dangerouslySetInnerHTML={{ __html: data?.designation }}></div>
                <p className="text-white text-sm  leading-tight">
            {data?.languages?.length > 0 && data?.languages?.map((item, i)=>
            <span
              key={i}
              className="text-[#2463eb] py-[5px] px-[10px] rounded-full bg-[#cad8f8] bg-opacity-75 text-xs font-semibold leading-tight inline-block me-1 mb-1"
            
            >
              {item.title}
            </span>
            )}
          </p>
                {/* {Array.isArray(data?.expertise) && data.expertise.length > 0 && (
              <div className="flex flex-wrap gap-1 md:gap-1.5 mb-4">
                {data?.expertise?.map((item, idx) => (
                    <p key={idx} className="mb-1 flex max-w-[370px] font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                     {item?.title}
                  </p>
                ))}
              </div>
            )} */}
              </div>
            </div>
          </div>

          <div>
            <div className="aspect w-full aspect-[4/5] max-w-[380px] mx-auto  relative rounded-3xl overflow-hidden">
              {data?.img?.url && (
              <Image src={data?.img?.url} fill alt={data?.name} className="object-cover" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    </>

  );
}
