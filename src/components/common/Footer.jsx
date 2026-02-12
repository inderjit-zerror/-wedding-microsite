import React from "react";

const Footer = () => {
  return (
    <footer className="w-full COLOR_BG_CREAM py-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-1 opacity-70">

        {/* Heading */}
        <p className="uppercase Font_Q COLOR_TEXT_RED w-full justify-center items-center">
          Email us for more information
        </p>

        {/* Email */}
        <div
          className="text-sm  text-[13px] mt-2 COLOR_TEXT_RED select-none cursor-pointer transition-colors group w-fit m-auto "
        >
         sonalskushie@gmail.com 
         <div className="w-[0%] group-hover:w-full transition-all duration-150 ease-in ml-auto h-px bg-[#551301] whitespace-nowrap border-b "></div>
           
        </div>

        {/* Copyright */}
        <div className=" COLOR_TEXT_RED text-[13px]  group w-fit m-auto select-none cursor-pointer ">
          © 2026 by  <a href="https://www.zerrorstudios.com/"><span className="w-fit  "> Zerror Studios
            <div className="w-[0%] group-hover:w-[55%] transition-all duration-150 ease-in ml-auto h-px bg-[#551301] whitespace-nowrap border-b "></div>
            </span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
