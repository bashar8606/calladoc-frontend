"use client";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useHeader } from "./useHeader";
import Image from "../Image/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";

import { headerState } from "@/recoil/atoms";
import Link from "next/link";
import { useRecoilValue } from "recoil";

export default function Header({data}) {
  const { main, isScrollingDown } = useHeader();
  // const [userDetails, setUserDetails] = useRecoilState(headerState);
  // const isInner = useRecoilValue(headerState);
  const isInner = true
 const isHeaderSmall = isInner||isScrollingDown

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full duration-300 ease-out ${
        isHeaderSmall ? "bg-white/40 backdrop-blur-md" : "bg-transparent"
      }`}
      ref={main}
    >
      <div className="shadow-s z-50  relative py-3 md:py-2">
        <div className="container mx-auto flex justify-between items-center  px-4 md:px-6">
          <Link
            href="/"
            className={`aspect-[100/35]   relative duration-300 ease-out w-[150px] lg:w-[190px]`}
          >
            <Image
              src={data?.favicon?.url}
              className="object-cover"
              fill
              alt="udf logo"
            />
          </Link>

          <Sheet>
            <SheetTrigger className="lg:hidden">
              <span className="text-2xl">
                <RxHamburgerMenu />
              </span>
            </SheetTrigger>
            <SheetContent side={"left"} className="px-0 h-full pt-0">
              <div className="flex flex-col h-full">
                <div className="px-2.5 py-10 relative overflow-hidden bg-gradient-to-br from-stone-200 to-[#6678ce] rounded-md  items-start gap-[23px] inline-flex">
                <Link
            href="/"
            className={`aspect-[100/35]   relative duration-300 ease-out w-[150px] lg:w-[190px]`}
          >
            <Image
              src={data?.favicon?.url}
              className="object-cover"
              fill
              alt="udf logo"
            />
          </Link>
                </div>

                <div className="px-3 ">
                  <ul className="border-b border-zinc-100 pb-2">
                    {data?.menu?.map((item, i) => {
                      return (
                        <li key={i}>
                          <SheetClose asChild>
                            <Link
                              href={`${item?.url}`}
                              className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                            >
                              {item?.label}
                            </Link>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-auto px-3">
                  {/* <div className="flex-col justify-start items-start gap-2.5 flex">
                        <a
                          href="https://app.ikkxa.com"
                          target="_blank"
                          className="self-stretch px-[7px] py-[3px] bg-gradient-to-r from-orange-300 to-red-300 rounded-[9px] border-b border-zinc-100 justify-start items-center gap-2.5 inline-flex"
                        >
                          <div className="px-[7px] py-1 bg-white/90 rounded-[5px] justify-center items-start gap-[5px] flex">
                            <div className="aspect-1/1 w-[30px] relative">
                              <Image
                                src={"/images/favicon-144x144.png"}
                                fill
                                className="object-contain"
                                alt="logo"
                              />
                            </div>
                          </div>
                          <div className="grow shrink basis-0 py-2 flex-col justify-center items-start gap-[3px] inline-flex">
                            <div className="text-zinc-800 text-xs font-semibold ">
                              {t("DownloadIKKXAAppNow")}{" "}
                            </div>
                            <div className="text-black/40 text-[10px] font-normal ">
                              {t("GetExclusiveDeals")}
                            </div>
                          </div>
                        </a>
                      </div> */}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex ms-auto">
            <nav className="space-x-5 flex  align-middle items-center">
              {data?.menu?.map((link, i) => {
                return (
                  <Link
                    href={`${link?.url}`}
                    key={i}
                    className={`rounded-md text-nowrap xl:px-2 2xl:px-3 py-2 text-sm font-medium transition-colors  focus:outline-none ${
                      isHeaderSmall
                        ? "text-gray-900  hover:text-blue-600"
                        : "text-white  hover:text-blue-600"
                    }`}
                    prefetch={false}
                  >
                    {link?.label}
                  </Link>
                );
              })}

              <Link
                href="/contact-us"
                className={`btn  ${
                  isHeaderSmall ? "btn-primary" : "btn-white"
                } text-nowrap `}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
