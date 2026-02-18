'use client'
import HeroSection3D from "@/components/common/HeroSection3D";
import CardX from "@/components/sections/wedding/CardX";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React from "react";

const page = () => {

  useGSAP(()=>{
    const TlW = gsap.timeline();
    TlW.to('.MainWeddingSection, .imginfoWedd',{
      opacity:1,
      duration:1.5,
      ease:'none' 
    });
    TlW.to('.textinfoWedd',{
      delay:0.3,
      scale:1,
      opacity:1,
      duration:1,
      ease:'power1.inOut' 
    });
    TlW.to('.imginfoWedd',{
      delay:0.5,
      opacity:0,
      duration:0.3,
      ease:'none' 
    });
  },[])

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full h-screen fixed top-0 left-0 pointer-events-none opacity-0 MainWeddingSection  ">
        <HeroSection3D srcURL={"/imgs/love.webp"} />\
        <div className="w-full h-screen absolute top-0 left-0 flex items-center  pointer-events-none z-40 ">
          {/* img-info */}
          <div className=" absolute top-0 left-0 w-full h-screen z-10 pointer-events-none opacity-0 imginfoWedd">
            <img src={"/imgs/love.webp"} alt="img" className="w-full h-full object-cover object-center" />
          </div>
          {/* Text-Info */}
          <div className="w-fit h-fit pointer-events-none scale-[0.95] z-40 px-[4vw] max-sm:absolute max-sm:bottom-[15%] max-sm:left-1/2 max-sm:-translate-x-1/2 opacity-0 textinfoWedd ">
            <h1 className="  COLOR_TEXT_CREAM Font_YIV text-[6vw] leading-[3vw] max-sm:text-[10vw] max-sm:leading-[8vw] ">
              The
            </h1>
            <h1 className=" uppercase COLOR_TEXT_CREAM Font_Q text-[6vw] leading-[6vw] max-sm:text-[15vw] max-sm:leading-[15vw] ">
              Wedding
            </h1>
            <h1 className=" uppercase COLOR_TEXT_CREAM Font_Q text-[6vw] leading-[6vw] max-sm:text-[15vw] max-sm:leading-[15vw] ">
              Itinerary
            </h1>
          </div>
        </div>
      </div>
      <CardX />
    </div>
  );
};

export default page;
