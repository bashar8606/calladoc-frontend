"use client"
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeBanner = ({playAnimation}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const { width } = useGetDeviceType();


  useGSAP(
    (context, contextSafe) => {

      const fade = context.selector(`.fade`);
      const cover = context.selector(`.cover img`);
      const cards = context.selector(`.card`);
      const calling = context.selector(`.calling`);
      const calla = context.selector(`.calla`);
      const b1 = context.selector(`.b-1`);
      const b2 = context.selector(`.b-2`);
      const b3 = context.selector(`.b-3`);
      const bwrap = context.selector(`.b-wrap`);

      gsap.set(fade, { y: 200, autoAlpha: 0, willChange: "transform" });
      gsap.set(cover, { scale: 1.3, autoAlpha: 0, willChange: "transform" });
      gsap.set(sliderRef.current, { scale: 2, filter: `blur(10px)`, autoAlpha: 0, willChange: "transform" });
      gsap.set(main.current, { clipPath: "inset(0% 0%)" });
      gsap.set(calling, { willChange: "transform", yPercent:100, scale: 0.3,autoAlpha: 0 });
      gsap.set(calla, { willChange: "transform", yPercent:-50,autoAlpha: 0 });
      gsap.set([b1,b2,b3], { willChange: "transform", scale: 0.5,autoAlpha: 0 });
      gsap.set([b1], { xPercent: 100  });
      gsap.set([b3], { xPercent: -100  });
      gsap.set(bwrap, { willChange: "transform", scale: 0.5,autoAlpha: 0});

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
        calling,
        {
          scale: 1,
          autoAlpha: 1,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },
        0
      )
      tl.to(
        calling,
        {
          yPercent:0,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },"<.7"
      )
      tl.to(
        calla,
        {
          yPercent:0,
          autoAlpha: 1,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },"<"
      )
      tl.to(
        b2,
        {
          scale:1,
          autoAlpha: 1,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },"<"
      )
      tl.to(
        bwrap,
        {
          scale:1,
          autoAlpha: 1,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },"<"
      )
      tl.to(
        [b1,b3],
        {
          scale:1,
          xPercent:0,
          autoAlpha: 1,
          ease: "elastic.out(1,0.75)",
          duration: 1.2,
        },"<.4"
      )
        .play(0);

      // tl1.to(contentRef.current, {
      //   scale: 0.7,
      //   yPercent: 50,
      //     ease: "Expo.easeOut",
      //   }, "<")
      // tl1.to(fadeOut, {
      //   stagger: 0.005,
      //   scale: 0.7,
      //   autoAlpha: 0,
      //   filter: "blur(10px)",
      //     ease: "Expo.easeOut",
      //   }, "<")

      // tl2.to(app3, { xPercent: 0, yPercent: 0 }, "<")
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {
          const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              // markers: true,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          tl1.to(".cover", { xPercent: 20}, 0)
          tl1.to(bwrap, { xPercent: 50}, 0)
          tl1.to(cards, {
            yPercent: 100,
            stagger: .01,
            ease: "Expo.easeOut",
          }, "<")
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
        { scope: main, dependencies: [width,playAnimation] }
      );

      return {
        main,
        width,
        sliderRef,
        contentRef
      };
    };
