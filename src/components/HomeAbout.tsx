'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useLayoutEffect } from "react"; // 요 친구들 모셔오기! 🧚‍♀️
import { gsap } from "gsap"; // gsap도 데려오기!
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // 스크롤 마법을 위해!
import AboutImg from "../../public/images/homeimage/excavator.jpeg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeAbout() {
  // 모션 줄 친구들에게 이름을 붙여줄 거예요 (ref)! 🏷️
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const sloganRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  // 화면에 나타날 때 애니메이션을 시작하는 마법! 🪄
  useLayoutEffect(() => {
    // gsap.context는 컴포넌트가 사라질 때 애니메이션도 깔끔하게 정리해줘요.
    const ctx = gsap.context(() => {
      // 시간의 흐름에 따라 애니메이션을 보여줄 타임라인이에요. ⏱️
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // 이 컴포넌트가 화면에 보이면 발동!
          start: "top 80%", // 컴포넌트 상단이 화면의 80% 지점에 도달할 때 시작!
          // scrub: 1, // 스크롤에 따라 애니메이션 진행 (선택 사항)
          toggleActions: "play reverse play reverse", // 한 번만 재생
        },
      });

      // 애니메이션 순서 정하기! 🚶‍♀️🚶‍♂️
      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          sloganRef.current,
          { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
          "<0.2" // 이전 애니메이션 시작 후 0.2초 뒤에 시작!
        )
        .from(
          textRef.current,
          { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
          "<0.2"
        )
        .from(
          buttonRef.current,
          { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
          "<0.2"
        )
        .from(
          imageRef.current,
          { opacity: 0, scale: 0.8, duration: 1, ease: "power3.out" },
          "<0.4"
        ); // 이미지는 좀 더 여유 있게!
    }, containerRef); // 이 컨텍스트 안에서 refs를 찾을 거예요.

    return () => ctx.revert(); // 컴포넌트가 사라지면 애니메이션도 깔끔하게 싹~
  }, []); // []는 한 번만 실행하라는 약속!

  return (
    // 전체 컨테이너에 ref 달아주기
    <div
      ref={containerRef}
      className="border-b border-b-gray-500 pb-20 lg:mb-20 max-w-7xl mx-auto mt-20"
    >
      <div className="flex flex-wrap">
        <div className="flex items-center justify-center w-full mt-10 mb-10">
          {/* 제목에 ref 달아주기 */}
          <h1
            ref={titleRef}
            className="px-2 text-2xl font-semibold text-[#1f1c0c] border-l-[4px] border-[#504e4d] dark:text-white mb-10"
          >
            Welcome to PT. Inko Jaya Konstruksi
          </h1>
        </div>
        <div className="w-full lg:w-1/2 justify-between px-10">
          <div className="flex flex-col items-center lg:items-start">
            {/* 슬로건에 ref 달아주기 */}
            <span
              ref={sloganRef}
              className="mx-auto text-xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              IJK Building Your Dream Since 1988
            </span>
            {/* 텍스트 내용에 ref 달아주기 */}
            <p ref={textRef} className="py-6 my-2 font-light tracking-tighter text-justify text-lg ">
              <strong>PT. INKO JAYA KONSTRUKSI</strong> separated and became
              independent of the construction sector in March 2020 in line with
              the trend of demanding more expertise from PT. YUNSUNG, who has
              led the development of machinery and factory construction in
              Indonesia, and has always achieved successful results
              since its launch.
              <br />
              <br />
              In the future, we will do our best not only for prompt and
              accurate delivery but also for follow-up management. In addition,
              We will always strive to become a leader in the machinery &
              construction industry in the future through constant challenges
              and also to become a company that fulfills its responsibilities as
              a social enterprise.
            </p>
            <div className="mx-auto">
              {/* 버튼에 ref 달아주기 */}
              <Link
                ref={buttonRef}
                href="/about"
                rel="noopener noreferrer"
                className="px-6 mx-auto border border-gray-500 p-2 rounded-full shadow-md text-md"
              >
                More Detail
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* 이미지에 ref 달아주기 */}
            <Image ref={imageRef} src={AboutImg} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}