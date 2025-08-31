"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { KNOW_HOW, INDUSTRY, TRUST, LEADING_COMPANY } from "../lib/index";
import greetingImg from "../../public/images/homeimage/city.jpeg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Greeting = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 제목
      gsap.to(".greet-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse", // 반복
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 텍스트
      gsap.to(".greet-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // 반복
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 이미지
      gsap.to(".greet-img", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // 반복
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mb-4 max-w-7xl">
      {/* 제목 */}
      <h1 className="pb-4 text-3xl font-normal tracking-tighter text-left lg:text-4xl sm:mb-2 opacity-0 translate-y-6 greet-title">
        Greeting
      </h1>

      <div className="flex flex-wrap border-b border-b-neutral-900 dark:border-b-neutral-200 pb-10">
        {/* 왼쪽 텍스트 */}
        <div className="w-full lg:w-2/3">
          <div className="flex flex-wrap items-center lg:items-start">
            <div className="w-full px-4 pr-4 lg:w-1/2">
              <span className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text opacity-0 translate-y-6 greet-text">
                Accumulated know-how
              </span>
              <p className="max-w-xl py-2 text-sm tracking-tighter text-justify font-md opacity-0 translate-y-6 greet-text">
                {KNOW_HOW}
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <span className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text opacity-0 translate-y-6 greet-text">
                Industry 4.0
              </span>
              <p className="max-w-xl py-2 text-sm tracking-tighter text-justify font-md opacity-0 translate-y-6 greet-text">
                {INDUSTRY}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:mt-6 lg:items-start">
            <div className="w-full px-4 lg:w-1/2">
              <span className="text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text opacity-0 translate-y-6 greet-text">
                Trust
              </span>
              <p className="max-w-xl py-2 text-sm tracking-tighter text-justify font-md opacity-0 translate-y-6 greet-text">
                {TRUST}
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <span className="mt-6 text-xl font-bold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text opacity-0 translate-y-6 greet-text">
                Leading Company
              </span>
              <p className="max-w-xl py-2 text-sm tracking-tighter text-justify font-md opacity-0 translate-y-6 greet-text">
                {LEADING_COMPANY}
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽 이미지 */}
        <div className="w-full lg:w-1/3">
          <div className="flex justify-center mb-6">
            <Image
              src={greetingImg}
              alt="greeting"
              className="px-2 rounded-3xl opacity-0 translate-x-10 greet-img"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
