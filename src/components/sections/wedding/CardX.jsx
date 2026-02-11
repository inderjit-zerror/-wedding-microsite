'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const CardX = () => {


  useGSAP(() => {
    gsap.from('.imgQ1', {
      y: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.imgQ1',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
        // markers:true
      }
    })
    gsap.from('.imgQ2', {
      y: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.imgQ2',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
        // markers:true
      }
    })
    gsap.from('.imgQ3', {
      y: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.imgQ3',
        start: 'top 80%',
        end: 'top 60%',
        scrub: true,
        // markers:true
      }
    })
  }, [])

  return (
    <div className="w-full h-fit flex flex-col z-20 mt-[150vh]">
      {/* div-1 Sangeet */}
      <div className="w-full min-h-screen flex  max-sm:flex-col-reverse">
        {/* Left */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
          <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 1</h2>
          <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-10 uppercase ">Sangeet</h5>
          <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
            <span className=' uppercase'>
              <span className="font-semibold"></span> 25 March 2006
            </span>
            <span className=' uppercase'>
              <span className="font-semibold"></span> 7:30 PM
            </span>
            <span className=' uppercase'>
              <span className="font-semibold"></span> Raffles Udaipur
            </span>
          </div>

          <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
            Short description for wedding e-vite- This love story was never meant to be subtle. Join us for a sangeet packed with rhythm, energy, and main-character moments.
          </p>

          <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(No white red or gold )</span>
        </div>

        {/* right */}
        <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex flex-col COLOR_BG_RED px-12 justify-center items-center">
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>
            <p className="Font_YV COLOR_TEXT_CREAM mt-5">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full imgQ1 object-cover object-center mt-4"
            />
          </div>
        </div>
      </div>

      {/* Div - 2*/}
      <div className='w-full min-h-screen relative flex max-sm:flex-col '>
        {/* Left */}
        <div className='w-1/2 max-sm:w-full max-sm:h-fit max-sm:py-[10vh] h-screen sticky top-0 left-0 flex justify-center items-center COLOR_BG_RED'>
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>
            <p className="Font_YV COLOR_TEXT_CREAM mt-5">
              Light-coloured Indian or fusion wear
            </p>
            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover imgQ2 object-center mt-4"
            />
          </div>
        </div>

        {/* Right */}
        <div className='w-1/2 max-sm:w-full max-sm:h-fit min-h-screen COLOR_BG_CREAM relative top-0 ml-auto'>
          {/* Day Sticky */}
          <div className='w-full h-fit sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 '>
            <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 2</h2>
          </div>

          {/* 1 Detail Haldi */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Haldi</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=' uppercase'>
                <span className="font-semibold"></span> 22 September 2026
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> 10 AM
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Where tradition meets sunshine and a great playlist. Come celebrate our haldi with vibrant colors, music, and nonstop dancing
            </p>
            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p>

            <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(Yellow )</span>

          </div>


          {/* 2 Detail */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Barat</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 25 March 2006
              </span>
              <span>
                <span className="font-semibold"></span> 3 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p>

            <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>( No White Red )</span>

          </div>

          {/* 3 Detail Standing Barat (girls side) */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Standing Barat (girls side)</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 25 March 2006
              </span>
              <span>
                <span className="font-semibold"></span> 4:00 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p>

          </div>

          {/* 4 Wedding */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Wedding</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 25 March 2006
              </span>
              <span>
                <span className="font-semibold"></span> 6 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Beneath carved arches and golden skies, we promise each other forever. Join us for a wedding steeped in tradition, grace, and enduring love.
            </p>
            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Amidst timeless beauty and sacred rituals, our forever begins. Join us as love is celebrated with grace, heritage, and quiet grandeur.
            </p>

          </div>

          {/* 5 Wedding Dinner*/}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Wedding Dinner</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 25 March 2006
              </span>
              <span>
                <span className="font-semibold"></span> 7:00 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Guests are welcomed for a relaxed and joyful afternoon as we begin
              the celebrations with Mehendi and Haldi ceremonies. These rituals
              are filled with laughter, music, and meaningful traditions shared
              with close family and friends.
            </p>

          </div>


        </div>
      </div>

      {/* Div - 3*/}
      <div className='w-full min-h-screen relative flex max-sm:flex-col-reverse'>


        {/* left */}
        <div className='w-1/2 min-h-screen max-sm:w-full  COLOR_BG_CREAM relative z-50 top-0 mr-auto'>
          {/* Day Sticky */}
          <div className='w-full h-fit sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 '>
            <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 3</h2>
          </div>

          {/* 1 Detail Pool Party & Lunch */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Pool Party & Lunch</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=' uppercase'>
                <span className="font-semibold"></span> 23 September 2026
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> 10 AM
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Sun out, volume up, worries off. Join us poolside for a beach-club-inspired party made for dancing, and soaking it all in.
            </p>
            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p>

            <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white )</span>

          </div>

          {/* 2 Detail Cocktail Hour */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Cocktail Hour</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=' uppercase'>
                <span className="font-semibold"></span> 23 September 2026
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span>  7:00 PM
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Sun out, volume up, worries off. Join us poolside for a beach-club-inspired party made for dancing, and soaking it all in.
            </p>
            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p>
            <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white red & gold )</span>


          </div>

          {/* 3 Reception */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">Reception</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span>
                <span className="font-semibold"></span> 23 September 2026
              </span>
              <span>
                <span className="font-semibold"></span> 8:00 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Candlelight, old-world beauty, and a night made to celebrate. Come toast to love in a reception filled with warmth, rhythm, and refined revelry.
            </p>
            {/* <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Steeped in tradition and splashed with sunshine. Come celebrate our haldi with lively music, dancing, and happy moments.
            </p> */}

            {/* <span className='Text_YV font-semibold py-4 text-[14px] capitalize'>( no white red & gold )</span> */}

          </div>

          {/* 4 After Party */}
          <div className="w-full max-sm:w-full h-[100vh] max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">After Party</h5>
            <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
              <span className=' uppercase'>
                <span className="font-semibold"></span> 23 September 2026
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> 12:00 AM
              </span>
              <span className=' uppercase'>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>
            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Sleep is optional. Meet us after dark for a high-energy after party where the music doesn’t stop and neither do we.
            </p>




          </div>



        </div>

        {/* right */}
        <div className='w-1/2 h-screen max-sm:w-full max-sm:h-[50vh] sticky top-0 right-0 flex justify-center items-center COLOR_BG_RED'>
          <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
            {/* <h3 className="Font_Q COLOR_TEXT_CREAM uppercase">OutFit</h3>

            <p className="Font_YV COLOR_TEXT_CREAM mt-4">
              Light-coloured Indian or fusion wear
            </p>

            <p className="Font_YV COLOR_TEXT_CREAM">
              (Comfortable, breezy fabrics recommended)
            </p> */}

            <img
              src={`/demo.png`}
              alt="Img"
              className="w-full object-cover imgQ2 object-center mt-4"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardX;

