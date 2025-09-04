"use client"
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useContactBanner = () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const { width } = useGetDeviceType();


  useGSAP(
    (context, contextSafe) => {

      const fade = context.selector(`.fade`);
      const cover = context.selector(`.cover img`);


      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          gsap.set(fade, { y: 200, autoAlpha: 0, willChange: "transform" });
      gsap.set(cover, { scale: 1.3, autoAlpha: 0, willChange: "transform" });
      gsap.set(sliderRef.current, { scale: 2, filter: `blur(10px)`, autoAlpha: 0, willChange: "transform" });
      gsap.set(main.current, { backgroundPosition: "200% 100%, 100% 0" });

      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(
        fade,
        {
          y: 0,
          autoRound: false,
          stagger: 0.05,
          autoAlpha: 1,
          ease: "Expo.easeOut",
          duration: 2,
        },
        0
      )
      tl.to(
        cover,
        {
          scale: 1,
          autoAlpha: 1,
          ease: "Expo.easeOut",
          duration: 2,
        },
        0
      )

      tl.to(
        main.current,
        {
          backgroundPosition: "100% 100%, 100% 0",
          ease: "Expo.easeOut",
          duration: 2,
        },
        0
      )
     
        .play(0);
      
        },
        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },
        all: function () { },
        // gsap.to(pinner[0], {
        //   scrollTrigger: {
        //     trigger: pinner[0],
        //     end: "1700%",
        //     scrub: 1.5,
        //     pin: true,
        //     pinSpacer: true,
        //     pinSpacing: true,
        //     parent: main.current,
        //   },
        // });
      });
      },
        { scope: main, dependencies: [width] }
      );

      return {
        main,
        width,
        sliderRef,
        contentRef
      };
    };
