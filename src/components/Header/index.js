"use client";
import { Button } from "@/components/ui/button";
import Image from "../Image/image";
import Link from "../Link";

export default function Header({data}) {

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full duration-300 ease-out bg-[linear-gradient(180deg,_#000000cc,_transparent)]`}
    >
      <div className="shadow-s z-50  relative py-3 md:py-2">
        <div className="container mx-auto flex justify-between items-center  px-4 md:px-6">
          <Link href="/" className={`aspect-[100/46]   relative duration-300 ease-out w-14 lg:w-[190px]`}>
            <Image src={data?.favicon?.url} className="object-cover" fill alt="udf logo" />
          </Link>
          <div className="hidden lg:flex ms-auto">
            <nav className="space-x-5 flex  align-middle items-center">

              {data?.menu?.map((link, i) => {
                return (
                  <Link
                    href={`${link?.url}`}
                    key={i}
                    className={`rounded-md text-nowrap xl:px-2 2xl:px-3 py-2 text-sm font-medium transition-colors  focus:outline-none text-white  hover:text-blue-600`}
                    prefetch={false}
                  >
                    {link?.label}
                  </Link>
                );
              })}
            
              <Link href="/" >sfdgdzf</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

const links = [
  {
    title: "About Us",
    url: "/about-us"
  },
  {
    title: "Issues",
    url: "/issues"
  },
  {
    title: "Media and Press",
    url: "/media"
  },
  {
    title: "Achievements",
    url: "/achievements"
  },
  {
    title: "Leaders",
    url: "/leaders"
  },
];
