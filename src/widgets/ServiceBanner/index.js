"use client";
import React from "react";
import styles from "./ServiceBanner.module.scss";
import Image from "@/components/Image/image";
import { useServiceBanner } from "./useServiceBanner";
import { IoHomeOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ServiceBanner = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  const { main } = useServiceBanner();
  const pathname = usePathname(); // or const { pathname } = useLocation();
  
  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  return (
    <section
      id="DesignSysyemHero"
      ref={main}
      className="
lg:bg-[url('/images/heroDesktopWave.webp'),linear-gradient(108deg,#e1edfe_30%,#adbfff_100%)]
bg-[size:100%_auto,100%_CALC(100%_-_1px)]
md:bg-[size:75%_auto,100%_CALC(100%_-_1px)]
lg:bg-[size:55%_auto,100%_CALC(100%_-_1px)]
xxl:bg-[size:50%_auto,100%_CALC(100%_-_1px)]
lg:bg-[position:bottom_right,top_right] bg-no-repeat
md:bg-[url('/images/HeroTablet.webp'),linear-gradient(108deg,#e1edfe_30%,#adbfff_100%)]
bg-[linear-gradient(108deg,#e1edfe_0%,#adbfff_100%)]
bg-[position:bottom_right,top_right]

lg:h-[600px]
relative h-auto lg:flex lg:items-center lg:justify-center p-0 pb-[40px] md:pb-[59px] md:pt-[50px] pt-[0px]"
      style={{ backgroundPosition: "200% 100%, 100% 0" }}
    >
      <div className=" container px-0 md:px-3">
        <div className="flex gap-4 flex-column flex-col-reverse md:grid md:grid-cols-2  items-center">
          <div className="px-5 md:px-0">
            <div className="flex gap-10 lg:p-10 lg:pl-0 items-center text-center lg:text-start">
              <div className="flex-1 lg:p-0">
                {/* Breadcrumb */}
                <nav className="fade lg:opacity-0 mb-4 flex items-center text-xs text-blue-700/80 font-medium" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {/* Home - Always present */}
        <li>
          <a href="/" className="hover:underline flex items-center">
            <IoHomeOutline className="me-1" />
            Home
          </a>
        </li>
        
        {/* Dynamic segments */}
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          
          // Use title from data for the last segment if available
          const label = decodeURIComponent(segment).replace(/-/g, ' ')
          
          return (
            <li key={href} className={isLast ? 'truncate max-w-[120px] md:max-w-[200px]' : ''}>
              <span className="mx-0.5 text-blue-700/40">/</span>
              <Link
                href={href} 
                className={`hover:underline capitalize ${isLast ? 'text-blue-900 font-semibold' : ''}`}
                {...(isLast && { 'aria-current': 'page' })}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>


                <h1 className="fade lg:opacity-0 mb-2.5 font-dmSerif text-[25px] font-semibold leading-[30px] text-blue-900 lg:text-[40px] lg:leading-[50px]">
                  {data?.title}
                </h1>
                <h2 className="fade text-justify lg:text-start lg:opacity-0 mb-5 flex max-w-[370px] font-displayPro text-sm font-normal leading-6 text-blue-900 lg:mx-0 lg:max-w-[511px] lg:font-displayPro lg:text-base lg:leading-[26px] mx-auto">
                  <div>
                    <p>{data?.description}</p>
                  </div>
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <div className="cover aspect w-full aspect-[4/2.5] bg-blue-100  relative rounded-none md:rounded-3xl overflow-hidden">
              {data?.cover?.url && (
                <Image
                  src={data?.cover?.url}
                  alt={data?.cover?.alt || data?.titleMain || data?.title || ""}
                  fill
                  priority={true}
                  
                  className="object-cover lg:opacity-0"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
