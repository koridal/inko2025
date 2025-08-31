"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DIVERSITY, INTEGRITY, MULTI_PROCESS } from "../lib/index";
import visionImg from "../../public/images/homeimage/visionImg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 텍스트 애니메이션
      gsap.to(".vision-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });

      // 이미지 애니메이션
      gsap.to(".vision-img", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mb-4 max-w-7xl">
      <h1 className="pb-4 mb-2 text-3xl font-normal tracking-tighter text-left lg:text-4xl sm:mb-8 vision-text opacity-0 translate-y-10 mt-10">
        Our Vision
      </h1>
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-wrap items-center lg:items-start">
            <div className="w-full px-4 pr-4 mt-4 vision-text opacity-0 translate-y-10">
              <span className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                Diversity
              </span>
              <p className="max-w-xl py-2 my-2 text-md tracking-tighter text-justify font-md">
                {DIVERSITY}
              </p>
            </div>
            <div className="w-full px-4 vision-text opacity-0 translate-y-10">
              <span className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                Integrity
              </span>
              <p className="max-w-xl py-2 my-2 text-md tracking-tighter text-justify font-md">
                {INTEGRITY}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:mt-6 lg:items-start">
            <div className="w-full px-4 vision-text opacity-0 translate-y-10">
              <span className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
                Multi Process
              </span>
              <p className="max-w-xl py-2 my-2 text-md tracking-tighter text-justify font-md">
                {MULTI_PROCESS}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mb-6">
            <Image
              src={visionImg}
              alt="greeting"
              className="px-2 rounded-3xl w-[500px] vision-img opacity-0 scale-95"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
