"use client";
import Link from "next/link";
import Image from "../Image/image";

export default function TestimonialCard({
  data,
  isSm = false,
  isLg = false,
  isPopular = false,
}) {
  return (
    <div className="bg-[#fff] border shadow-md rounded-3xl p-8">
      <div className="flex mb-6">
        {[...Array(data?.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-[#ff881b]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-[#697586] text-base leading-relaxed mb-8">
        {data?.description}
      </p>
      <div className="flex items-center">
        <img
          src="/orlando-diggs-headshot.png"
          alt="Orlando Diggs"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="text-[#202939] font-semibold"> {data?.name}</h4>
          <p className="text-[#697586] text-sm"> {data?.designation}</p>
        </div>
      </div>
    </div>
  );
}
