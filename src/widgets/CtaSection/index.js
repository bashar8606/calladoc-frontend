"use client";
import React from "react";
import styles from "./CtaSection.module.scss";
import Image from "@/components/Image/image";
import Link from "next/link";

const CtaSection = ({ data, slug, ...props }) => {
  const { title, description, items } = data || {};
  return (
      <section className="relative pb-14 md:pb-0 pt-10 md:pt-[50px] bg-[linear-gradient(346deg,rgba(32,108,233,.89)_5%,#6ca0f3_13%,#f9fafe_44%)]">
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="aspect-[567/597] mx-auto w-full max-w-[250px] md:max-w-[400px] relative">
            <Image
              src={"/images/cta-banner.png"}
              fill
              alt="calladoc cta banner"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-center md:text-left mb-2 md:mb-5 pb-5 md:max-w-[20ch] font-dmSerif text-3xl leading-tight  lg:pb-6 lg:text-[45px]  text-blue-900">
                 {title}
            </h3>
            <div className="text-center md:text-left">
            {data?.link?.url&&
            <Link href={data?.link?.url} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 min-w-[150px] rounded-full">
            {data?.link?.label}
            </Link>
          }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
