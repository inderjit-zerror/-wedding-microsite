"use client";
import HeroSection3D from "@/components/common/HeroSection3D";
import RSVP from "@/components/common/RSVP";

import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const venue = () => {
  useGSAP(() => {
    const TlW = gsap.timeline();
    TlW.to(".MainVenuSection, .imginfoVenu", {
      opacity: 1,
      duration: 1.5,
      ease: "none",
    });
    TlW.to(".textinfoVenu", {
      delay: 0.2,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
    });
    TlW.to(".imginfoVenu", {
      delay: 0.5,
      opacity: 0,
      duration: 0.3,
      ease: "none",
    });
  }, []);

  return (
    <>
      <div className="w-full h-screen relative top-0 left-0 pointer-events-none opacity-0 MainVenuSection ">
        <HeroSection3D srcURL={"/imgs/venu.webp"} />
        <div className="w-full h-screen absolute top-0 left-0 flex items-center  pointer-events-none z-40 ">
          {/* img-info */}
          <div className=" absolute top-0 left-0 w-full h-screen z-10 pointer-events-none opacity-0 imginfoVenu">
            <img
              src={"/imgs/venu.webp"}
              alt="img"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Text-Info */}
          <div className="w-fit h-fit pointer-events-none scale-[0.95] z-40 px-[4vw] absolute top-[17%] left-1/2 -translate-x-1/2 opacity-0 textinfoVenu ">
            <h1 className=" uppercase COLOR_TEXT_CREAM Font_Q text-[4vw] leading-[4vw] max-sm:text-[15vw] max-sm:leading-[15vw] ">
              Raffles Udaipur
            </h1>
          </div>
        </div>
      </div>
      {/* <HeroSection3D srcURL={"/imgs/venu.webp"} /> */}
      <WeddingVenue />
      <VenueGallery />
      <TravelInfo />
    </>
  );
};

export default venue;
