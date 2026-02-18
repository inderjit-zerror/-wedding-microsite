"use client";

import RSVP from "@/components/common/RSVP";
import Countdown from "@/components/sections/home/Countdown";
import Destiny from "@/components/sections/home/Destiny";
import FAQ from "@/components/sections/home/FAQ";
import Hearts from "@/components/sections/home/Hearts";
import Itinerary from "@/components/sections/home/Itinerary";
import Line from "@/components/sections/home/Line";
import WeddingHero from "@/components/sections/home/WeddingHero";
import HeroSection3D from "@/components/common/HeroSection3D";
import HomePreloading from "@/components/sections/home/HomePreloading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".MainHeroSectionText", {
      delay: 5,
      opacity: 1,
      duration: 1,
      ease: "none",
    });
  }, []);

  return (
    <>
      <HomePreloading />
      <div className="w-full h-screen pointer-events-none relative">
        <HeroSection3D srcURL={"/imgs/SonalKush3.webp"} />
        <div className=" absolute bottom-0 left-0 w-full h-fit flex justify-center items-center pb-5">
          <h1 className=" uppercase text-[8vw] leading-[8vw] max-sm:text-[15vw] max-sm:leading-[15vw] MainHeroSectionText COLOR_TEXT_CREAM Font_Q opacity-0">
            Sonal & KUSH
          </h1>
        </div>
      </div>
      <WeddingHero />
      <Line />
      <Countdown />
      <Hearts />
      <Destiny />
      <Itinerary />
      <FAQ />
      <RSVP />
    </>
  );
}
