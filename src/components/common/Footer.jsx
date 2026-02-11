import React from "react";

const Footer = () => {
  return (
    <footer className="w-full COLOR_BG_CREAM py-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-1 opacity-40">

        {/* Heading */}
        <p className="uppercase Font_Q COLOR_TEXT_RED ">
          Email us for more information
        </p>

        {/* Email */}
        <div
          className="text-sm  text-[13px] mt-2 COLOR_TEXT_RED transition-colors "
        >
         sonalskushie@gmail.com 
        </div>

        {/* Copyright */}
        <div className=" COLOR_TEXT_RED text-[13px]">
          © 2026 by  <a href="https://www.zerrorstudios.com/"><span> Zerror Studios</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
