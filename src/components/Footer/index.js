"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaSnapchat } from "react-icons/lia";
import Image from "../Image/image";
import Link from "next/link";
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
    <footer className="bg-[#001647]">
      <div className="">
        <div className="pb-10 lg:pb-8 pt-[50px] lg:pt-[100px] ">
          <div className="container">
            <div className="grid-cols-2 md:grid-cols-4 lg:grid">
              <div>
                <Link
                  href="/"
                  className={`block aspect-[100/35]   relative duration-300 ease-out w-[120px]  lg:w-[190px]`}
                >
                  <Image
                    src={data?.favicon?.url}
                    className="object-cover filter brightness-0 invert"
                    fill
                    alt="udf logo"
                  />
                </Link>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-16 space-y-3">
                  <div className="justify-start items-start gap-[13px] inline-flex ">
                    {data?.socialLinks?.map((link, index) => {
                      const IconComponent = iconMap[link?.label];
                      return (
                        <a
                          href={link?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex"
                          key={index}
                        >
                          {IconComponent}
                          <span className="sr-only">{link?.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              {data?.footer?.map((item, i) => {
                return (
                  <div key={i}>
                    <h3 className=" text-white text-lg font-semibold  mb-2">
                      {item?.title}
                    </h3>
                    <ul className="">
                      {item?.link?.map((nav, index) => {
                        return (
                          <li className="mb-2" key={index}>
                            <Link
                              href={`${nav?.url}`}
                              className=" text-white/60 text-sm  "
                            >
                              {nav?.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              <div>
                <h3 className=" text-white text-lg font-semibold  mb-2">
                  We are licensed as follows
                </h3>
                <p className="text-white/50 text-sm font-semibold  mb-4">
                  MOH : AO7DVRGA-181224
                </p>

                <Link
                  href="/"
                  className={`block aspect-[100/35]   relative duration-300 ease-out w-[120px]  lg:w-[190px]`}
                >
                  <Image
                    src={"/images/Dubai_Health_Authority_logo.webp"}
                    className="object-contain filter brightness-0 invert"
                    fill
                    alt="udf logo"
                  />
                </Link>

                <Link
                  href="/"
                  className={`block aspect-[100/35] mt-5 rounded-2xl overflow-hidden   relative duration-300 ease-out w-[120px]  lg:w-[190px]`}
                >
                  <Image
                    src={"/images/mohap.webp"}
                    className="object-contain "
                    fill
                    alt="udf logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  border-t border-zinc-100/45 py-3 lg:py-4">
            <div>
              <p className=" text-white text-xs md:text-sm  ">
                ©Copyright . All Right Reserved
              </p>
            </div>
            <div className=" lg:text-right">
              <p className="text-white text-xs md:text-sm">
                Designed by{" "}
                <a
                  href="https://voizzit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Adam innovations
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
