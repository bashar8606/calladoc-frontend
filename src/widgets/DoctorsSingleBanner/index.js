"use client"
import Image from "@/components/Image/image";

export default function DoctorsSingleBanner({ data }) {
  console.log(data,"datadatadatadatadatadata");
  
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
                <h1 className="mb-2.5 font-dmSerif text-[25px] font-semibold leading-[30px] text-blue-900 lg:text-[40px] lg:leading-[50px]">
                  {data?.name}
                </h1>
             
                {Array.isArray(data?.expertise) && data.expertise.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {data?.expertise?.map((item, idx) => (
                    <h2 key={idx} className="mb-5 flex max-w-[370px] font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                    <div>
                      <p>{item?.title}</p>
                    </div>
                  </h2>
                ))}
              </div>
            )}
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
