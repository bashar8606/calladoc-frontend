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
    <header
      className={`fixed top-0 left-0 z-50 w-full duration-300 ease-out ${
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
              alt="udf logo"
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
              <div className="flex flex-col h-full">
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
                <p className="font-medium text-sm">{sub.label}</p>
                {sub?.links?.length > 0 && (
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
  );
}
