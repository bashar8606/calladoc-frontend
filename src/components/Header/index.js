"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useHeader } from "./useHeader";
import Image from "../Image/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Header({ data }) {
  const { main, isScrollingDown } = useHeader();
  const isInner = true;
  const isHeaderSmall = isInner || isScrollingDown;

  // Track hover open states
  const [openMenu, setOpenMenu] = useState(null);
  const timeoutRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const handleMouseEnter = (menuIndex) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(menuIndex);
  };

  const handleMouseLeave = () => {
    // Set a timeout before closing the menu
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150); // 150ms delay
  };

  return (
    <>
    <header
      className={`sticky top-0 left-0 z-50 w-full duration-300 ease-out ${
        isHeaderSmall ? "bg-white/40 backdrop-blur-md" : "bg-transparent"
      }`}
      ref={main}
    >
      <div className="shadow-s z-50  relative py-3 md:py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="aspect-[100/35] relative duration-300 ease-out w-[150px] lg:w-[190px]"
          >
            <Image
              src={data?.favicon?.url}
              className="object-cover"
              fill
              alt="Calladoc logo"
            />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <span className="text-2xl">
                <RxHamburgerMenu />
              </span>
            </SheetTrigger>
            <SheetContent side="left" className="px-0 h-full pt-0">
              <div className="flex flex-col h-full max-h-full overflow-y-auto">
                {/* Logo inside Sheet */}
                <div className="px-2.5 py-10 bg-gradient-to-br from-stone-200 to-[#6678ce] rounded-md">
                  <Link
                    href="/"
                    className="aspect-[100/35] relative duration-300 ease-out w-[150px]"
                  >
                    <Image
                      src={data?.favicon?.url}
                      className="object-cover"
                      fill
                      alt="udf logo"
                    />
                  </Link>
                </div>

                {/* Accordion for nested menus */}
                <div className="px-3">
                <Accordion type="single" collapsible className="w-full">
  {data?.menu?.map((item, i) =>
    item?.sub?.length > 0 ? (
      <AccordionItem key={i} value={`item-${i}`}>
        <AccordionTrigger className="text-sm font-semibold text-zinc-800 w-full">
          {item.label}
        </AccordionTrigger>
        <AccordionContent>
        <ul className="pl-3 space-y-2">
      {item.sub.map((sub, j) => (
        <li key={j}>
          {sub?.links?.length > 0 ? (
            <button
              onClick={() => toggleAccordion(j)}
              className="font-medium text-sm flex justify-between w-full text-left"
            >
              {sub.label}
              <span className="ml-2">{openIndex === j ? "−" : "+"}</span>
            </button>
          ) : (
            <SheetClose asChild>
              <Link
                href={sub.url ?? "#"}
                className="font-medium text-sm flex w-full text-left"
              >
                {sub.label}
              </Link>
            </SheetClose>
          )}

          {sub?.links?.length > 0 && openIndex === j && (
            <ul className="pl-4 mt-1 space-y-1">
              {sub.links.map((link) => (
                <li key={link.id}>
                  <SheetClose asChild>
                    <Link
                      href={link.url ?? "#"}
                      className="text-xs text-zinc-700 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
        </AccordionContent>
      </AccordionItem>
    ) : (
      <div key={i} className="py-2">
        <SheetClose asChild>
          <Link
            href={item.url ?? "#"}
            className="block text-sm text-zinc-700 hover:text-blue-600 font-semibold"
          >
            {item.label}
          </Link>
        </SheetClose>
      </div>
    )
  )}
</Accordion>

                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden lg:flex ms-auto">
            <nav className="space-x-5 flex items-center">
              {data?.menu?.map((item, i) =>
                item?.sub?.length > 0 ? (
                  <DropdownMenu
                    key={i}
                    open={openMenu === i}
                    onOpenChange={(open) => {
                      if (!open) {
                        setOpenMenu(null);
                      }
                    }}
                  >
                    <DropdownMenuTrigger
                      className={`text-sm font-medium px-3 py-2 rounded-md ${
                        isHeaderSmall
                          ? "text-gray-900 hover:text-blue-600"
                          : "text-white hover:text-blue-600"
                      }`}
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.label}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      onMouseEnter={() => handleMouseEnter(i)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.sub.map((sub) =>
                        sub?.links?.length > 0 ? (
                          <DropdownMenuSub key={sub.id}>
                            <DropdownMenuSubTrigger>
                              {sub.label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              {sub.links.map((link) => (
                                <DropdownMenuItem key={link.id} asChild>
                                  <Link href={link.url ?? "#"}>
                                    {link.label}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem key={sub.id} asChild>
                            <Link href={sub.url ?? "#"}>{sub.label}</Link>
                          </DropdownMenuItem>
                        )
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={i}
                    href={item.url ?? "#"}
                    className={`rounded-md text-nowrap xl:px-2 2xl:px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                      isHeaderSmall
                        ? "text-gray-900 hover:text-blue-600"
                        : "text-white hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Contact Us Button */}
              <Link
                href="https://calladoc.okadoc.com/en-ae/search/result"
                target="_blank"
                className={`btn ${
                  isHeaderSmall ? "btn-primary" : "btn-white"
                } text-nowrap`}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <a
      href="https://wa.me/971502909369?text=hi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-[100] left-[20px] bottom-[20px] md:right-[20px] md:bottom-[20px] text-white rounded-full shadow-lg flex items-center justify-center size-16 md:size-16 transition-colors duration-200"
      style={{
        background: "linear-gradient(45deg, #03a936e8, #beffe2a6)",
        backdropFilter: "blur(3px)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="size-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.003 5.45-4.437 9.884-9.888 9.884zm8.413-18.297A11.815 11.815 0 0011.988 0C5.373 0 0 5.373 0 11.988c0 2.114.553 4.174 1.601 5.981L.057 24l6.164-1.623a11.93 11.93 0 005.767 1.472h.005c6.615 0 11.988-5.373 11.993-11.987a11.86 11.86 0 00-3.497-8.388z"/>
      </svg>
    </a>

    </>
  );
}
