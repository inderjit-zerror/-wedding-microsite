"use client";
import { useState } from "react";

const places = [
  {
    id: 1,
    title: "JEMAA EL-FNAA",
    image: "/imgs/venue/horizontal_section/img1.webp",
  },
  {
    id: 2,
    title: "BAHIA PALACE",
    image: "/imgs/venue/horizontal_section/img2.webp",
  },
  {
    id: 3,
    title: "KOUTOUBIA MOSQUE",
    image: "/imgs/venue/horizontal_section/img3.webp",
  },
  {
    id: 4,
    title: "MAJORELLE GARDEN",
    image: "/imgs/venue/horizontal_section/img4.webp",
  },
  {
    id: 5,
    title: "SAADIAN TOMBS",
    image: "/imgs/venue/horizontal_section/img5.webp",
  },
  {
    id: 6,
    title: "MEDINA SOUKS",
    image: "/imgs/venue/horizontal_section/img6.webp",
  },
  {
    id: 7,
    title: "PALMERAIE",
    image: "/imgs/venue/horizontal_section/img1.webp",
  },
  {
    id: 8,
    title: "MENARA GARDENS",
    image: "/imgs/venue/horizontal_section/img2.webp",
  },
];

const SMExplor = () => {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="w-full h-fit flex flex-col">
      {/* 1 */}
      <div className="w-full h-fit px-[2vw]  px-[20px] flex justify-center items-center mt-[15vh] ">
        <img
          src={`/imgs/smExplor/img1SME.svg`}
          className="w-full object-cover justify-center  object-center"
          alt="IMG"
        />
      </div>

      {/* 2 */}
      <div className="w-full h-fit flex flex-col justify-center items-center mt-[4vh] bg-[#395238]">
        <img
          className="w-full aspect-2/3 object-cover object-center"
          src={`/imgs/venue/horizontal_section/img5.webp`}
          alt="IMG"
        />
        <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
          <h2 className="Font_Q">01</h2>
          <p className="FontYV">Outdoor Ceremony Area</p>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center pt-[4vh] bg-[#395238]">
        <img
          className="w-full aspect-2/2 object-cover object-center"
          src={`/imgs/venue/horizontal_section/img2.webp`}
          alt="IMG"
        />
        <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
          <h2 className="Font_Q">02</h2>
          <p className="FontYV">Outdoor Ceremony Area</p>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full h-fit flex flex-col justify-center items-center pt-[4vh] bg-[#395238]">
        <img
          className="w-full aspect-2/3 object-cover object-center"
          src={`/imgs/venue/horizontal_section/img3.webp`}
          alt="IMG"
        />
        <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
          <h2 className="Font_Q">03</h2>
          <p className="FontYV">Outdoor Ceremony Area</p>
        </div>
      </div>

      {/* 4 */}
      <div className="w-full h-fit flex px-[20px] flex-col justify-center items-center py-[4vh] bg-[#395238]">
        <img
          className="w-full aspect-2/2 object-cover object-center"
          src={`/imgs/venue/horizontal_section/img6.webp`}
          alt="IMG"
        />
        <div className="px-[20px] flex  w-full justify-between items-center py-[4vw] text-[#E4BD95]">
          <h2 className="Font_Q">04</h2>
          <p className="FontYV">Outdoor Ceremony Area</p>
        </div>
      </div>

      {/* 5 */}
      <div className="w-full h-fit px-[2vw] flex justify-center items-center mt-[8vh] ">
        <img
          src={`/imgs/smExplor/img1SME.svg`}
          className="w-full object-cover justify-center  object-center"
          alt="IMG"
        />
      </div>

      {/* 6 */}
      <div className="max-w-xl mx-auto bg-white mt-[4vh]">
        {places.map((item, index) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => handleClick(item.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <div className="flex items-center gap-4">
                <span className="text-gray-400 Font_Q">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-lg Font_Q `}>{item.title}</span>
              </div>
              <span className="text-xl">
                {activeId === item.id ? "−" : "+"}
              </span>
            </button>

            {/* Expand Section */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeId === item.id
                  ? "max-h-[400px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover mb-4"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 7 */}
      <div className="w-full h-fit flex justify-center items-center mt-[10vh] mb-[5vh]">
        <img src={`/svgs/TravelService.svg`} alt="IMG" className="w-full object-cover object-center" />
      </div>

      {/* 8 */}
      <div className="w-full h-fit flex justify-center items-center px-[20px]">
        <img src={`/imgs/itinerary/Iimg2.webp`} alt="img" className="w-full object-cover object-center" />
      </div>

      {/* 9 */}
      <div className="w-full h-fit flex justify-center items-center px-[20px] mt-[5vh] mb-[10vh]">
        <img src={`/imgs/r1.webp`} alt="img" className="w-full object-cover object-center" />
      </div>
    </div>
  );
};

export default SMExplor;
