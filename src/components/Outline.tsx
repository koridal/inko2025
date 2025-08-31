"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HISTORY } from "../lib/index";
import Outline from "../../public/images/homeimage/history.png";
import CEO from "../../public/images/homeimage/ceo.jpg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 제목 애니메이션
      gsap.to(".hero-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      // CEO 이미지
      gsap.to(".hero-ceo", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      });

      // 소개 문단
      gsap.to(".hero-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 히스토리 항목
      gsap.to(".hero-history", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // 아웃라인 이미지
      gsap.to(".hero-outline", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap border-b border-b-neutral-900 dark:border-b-neutral-200 pb-10"
    >
      <div>
        <h1 className="pb-2 text-3xl font-normal tracking-tighter opacity-0 translate-y-6 hero-title md:pb-6 lg:mt-12 lg:pb-12 lg:text-4xl">
          Company Introduction
        </h1>
      </div>

      <div className="items-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <Image
              src={CEO}
              alt="ceoImg"
              className="mx-auto mt-6 rounded-full opacity-0 scale-95 hero-ceo"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="w-full pr-6 mt-6 mb-4 tracking-tighter text-justify opacity-0 translate-y-6 hero-text md:mt-16">
              Specializes in supplying a variety of mechanical equipment and
              parts, including construction materials, high-pressure and
              low-pressure panels, lifts, and conveyors.
              <br />
            </p>
            <p className="w-full pr-6 text-md tracking-tighter text-justify opacity-0 translate-y-6 hero-text">
              Execute accurate and systematic processes from design to
              construction and commissioning.
              <br />
            </p>
            <p className="w-full pr-6 mt-4 tracking-tighter text-justify opacity-0 translate-y-6 hero-text">
              With a team of experts and a range of licenses, our expertise is
              built on years of experience and accumulated technology.
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-10 md:flex-row">
          <div className="w-full mt-10 lg:w-1/2">
            <div className="px-6">
              {HISTORY.map((history, index) => (
                <div
                  key={index}
                  className="flex flex-wrap mb-2 opacity-0 translate-y-6 hero-history lg:justify-center sm:mb-8"
                >
                  <div className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">
                      {history.year}
                    </p>
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{history.name}</h6>
                    <p className="mb-2 text-neutral-400">
                      {history.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={Outline}
              alt="outline"
              width={500}
              height={300}
              loading="lazy"
              className="p-2 px-2 mx-auto mt-6 border rounded-xl opacity-0 translate-x-10 hero-outline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
