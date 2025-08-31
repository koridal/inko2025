"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

const ServicesCard = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    cards.forEach((card) => {
      // 카드 전체 애니메이션
      gsap.from(card, {
        opacity: 0,
        scale: 0.7,
        rotation: -20,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      // 내부 요소 순차 등장
      const img = card.querySelector("img");
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      const a = card.querySelector("a");

      if (img) {
        gsap.from(img, {
          opacity: 0,
          scale: 0.3,
          duration: 1.2,
          ease: "elastic.out(1, 0.75)",
          delay: 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      }

      if (h3) {
        gsap.from(h3, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      }

      if (p) {
        gsap.from(p, {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      }

      if (a) {
        gsap.from(a, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "bounce.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        });
      }
    });
  }, []);

  return (
    <div className="border-b border-b-gray-500 pb-10 lg:mb-10 max-w-7xl mx-auto mt-20">
      {/* 제목 */}
      <div className="flex items-center justify-center w-full mt-10 mb-6">
        <h1 className="px-2 text-2xl font-semibold text-[#1f1c0c] border-l-[4px] border-[#504e4d] dark:text-white mb-10">
          Our Services
        </h1>
      </div>

      {/* 서비스 카드 섹션 */}
      <section className="service-style-three">
        <div className="max-w-screen-xl mx-auto mb-10">
          <div className="grid grid-cols-1 px-4 sm:grid-cols-2 sm:gap-6">
            {/* 카드 1 */}
            <div className="col-sm-6">
              <div className="text-center service-card">
                <div className="service-img construction" />
                <div className="service-content">
                  <Image
                    alt="city"
                    src="/images/homeimage/city.svg"
                    width={45}
                    height={45}
                  />
                  <h3>Construction</h3>
                  <p>
                    Construction design and building <br />
                    Construction regulation review <br />
                    Earthquake-proof and structure calculation <br />
                    Maintenance
                  </p>
                  <Link href="/construction" className="service-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="col-sm-6">
              <div className="text-center service-card">
                <div className="service-img fire-fighting" />
                <div className="service-content">
                  <Image
                    alt="fire-fighting"
                    src="/images/homeimage/fire-fighting.svg"
                    width={45}
                    height={45}
                  />
                  <h3>Fire-fighting Equipment</h3>
                  <p>
                    Fire fighting facility design and construction <br />
                    Fire fighting regulation review <br />
                    Evacuation and rescue facilities <br />
                    Maintenance
                  </p>
                  <Link href="/hydrant" className="service-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2">
            {/* 카드 3 */}
            <div className="col-sm-6">
              <div className="text-center service-card">
                <div className="service-img machinery" />
                <div className="service-content">
                  <Image
                    alt="machine"
                    src="/images/homeimage/architect.svg"
                    width={45}
                    height={45}
                  />
                  <h3>Architectural Design</h3>
                  <p>
                    Design considering formative beauty, economy, and safety<br />
                    Design based on the scientific principles of architectural
                    structure<br />
                    Presents eco-friendly building solutions that protect <br />
                    the environment and increase energy efficiency
                  </p>
                  <Link href="/machinery" className="service-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* 카드 4 */}
            <div className="col-sm-6">
              <div className="text-center service-card">
                <div className="service-img electric" />
                <div className="service-content">
                  <Image
                    alt="s1"
                    src="/images/homeimage/machine.svg"
                    width={45}
                    height={45}
                  />
                  <h3>Machinery & Electrical Equipment</h3>
                  <p>
                    Machinery & Electrical facility design and construction
                    <br />
                    Machinery & Electrical regulation review <br />
                    Selecting equipment for manufacturing process
                    <br />
                    Energy saving suggestion <br />
                  </p>
                  <Link href="/electric" className="service-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
    </div>
  );
};

export default ServicesCard;
