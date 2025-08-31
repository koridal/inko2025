"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="border-b border-b-gray-500 pb-20 lg:mb-20 max-w-7xl mx-auto mt-20"
    >
      <div>
        <h1 className="pb-2 text-3xl font-normal tracking-tighter opacity-0 translate-y-6 hero-title md:pb-6 lg:mt-12 lg:pb-20 lg:text-4xl">
          Our Story Unveiled
        </h1>
      </div>
      <div className="items-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2 pr-20">
            <video
              src="/videos/crane.mp4"
              className="object-cover max-h-screen"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="w-full pr-6 mt-6 mb-10 tracking-tighter text-justify opacity-0 translate-y-6 hero-text md:mt-16">
              Inko Jaya Konstruksi, established in 1988, has been providing
              construction services with a focus on quality, adherence to
              timelines, and reliability. Our commitment to excellence is
              showcased through our portfolio, demonstrating our dedication to
              promoting our work.
              <br />
            </p>
            <p className="w-full pr-6 text-sm tracking-tighter text-justify opacity-0 translate-y-6 hero-text">
              Dedicated to meeting and exceeding client expectations, we strive
              to deliver projects that reflect precision, innovation, and
              superior craftsmanship. With a strong emphasis on quality, we aim
              to build structures that stand the test of time and exceed
              industry standards.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
