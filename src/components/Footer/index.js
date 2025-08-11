"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaSnapchat } from "react-icons/lia";
import Image from "../Image/image";
import Link from "../Link";
export default function Footer({ data }) {
  const iconMap = {
    linkedin: <FaLinkedinIn />,
    instagram: <FaInstagram />,
    facebook: <FaFacebookF />,
    youtube: <FaYoutube />,
    snapchat: <LiaSnapchat />,
    twitter: <RiTwitterXLine />,
  };
  return (
    <footer>

      <div className="">
        <div className="lg:pb-8 lg:pt-[100px] bg-white">
          <div className="container">
            <div className=" grid-cols-4 lg:grid">
              <div>
                <Link href="/" className={`aspect-[1/1] block   relative duration-300 ease-out  w-14 lg:w-[120px]`}>
                  <Image src={'/images/logo.png'} className="object-cover" fill alt="udf logo" />
                </Link>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-16 space-y-3">

                  <div className="justify-start items-start gap-[13px] inline-flex ">
                    {data?.socialLinks?.map((link, index) => {
                      const IconComponent = iconMap[link?.label];
                      return (
                        <a href={link?.url} target="_blank" rel="noopener noreferrer" className='w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex' key={index}>
                          {IconComponent}<span className='sr-only'>{link?.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              {data?.footer?.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className=" text-black text-lg font-semibold  mb-2">
                      {item?.title}
                    </h3>
                    <ul className="">
                      {item?.items?.map((nav, index) => {
                        return (
                          <li className="mb-2" key={index}>
                            <Link href={`${nav?.url}`} className=" text-black text-sm  ">
                              {nav?.label}
                            </Link>
                          </li>
                        )
                      })}



                    </ul>
                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  border-t border-zinc-100 py-3 lg:py-4">
            <div>
              <p className=" text-black text-xs md:text-sm  ">
                ©Copyright Voizzit. All Right Reserved
              </p>
            </div>
            <div className=" lg:text-right">
            <p className="text-black text-xs md:text-sm">
              Designed by{" "}
              <a href="https://voizzit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                Voizzit
              </a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
