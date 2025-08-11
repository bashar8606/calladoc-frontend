// components/ReadMoreLink.tsx
'use client';

import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

export default function ExploreLink({children}) {
  return (
    <Link href="/your-target-page"  className="group relative inline-flex items-center justify-start bg-gradient-to-r from-[#3C7FE6] to-[#639CF4] rounded-[100px] py-[10px] pr-[10px] pl-5 transition-all duration-300 ease-in-out active:rounded-[12px]">
        {/* Label */}
        <span className="text-white block text-sm font-medium transform transition-all duration-300 ease-in-out group-active:scale-110 group-hover:translate-x-[20%]">
         {children}
        </span>

        {/* Arrow */}
        <span className="ms-3 size-10 2xl:size-14 rounded-full bg-white text-black text-xl flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-0 group-hover:opacity-0">
          <IoArrowForwardOutline />
        </span>
    </Link>
  );
}
