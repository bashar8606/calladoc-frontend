"use client";
import React from "react";
import styles from "./CtaSection.module.scss";
import Image from "@/components/Image/image";
import { Button } from "@/components/ui/button";

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
              alt="xf"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-center md:text-left mb-2 md:mb-5 pb-5 md:max-w-[20ch] font-dmSerif text-3xl leading-tight  lg:pb-6 lg:text-[45px]  text-blue-900">
                 {title}
            </h3>
            <div className="text-center md:text-left">
              
            <Button className="min-w-[150px] rounded-full">Get started</Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
