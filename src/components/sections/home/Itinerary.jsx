'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const Itinerary = () => {

  // useGSAP(() => {

  //   gsap.from('.ImgTDcont', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.ImgTDcont',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate1TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate1TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate2TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate2TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate3TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate3TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate4TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate4TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 65%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate5TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate5TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })
  //   gsap.from('.animate6TDIMGANDTEXT', {
  //     yPercent: 20,
  //     opacity: 0,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.animate6TDIMGANDTEXT',
  //       start: 'top 90%',
  //       end: 'top 60%',
  //       scrub: true,
  //       // markers:true
  //     }
  //   })

  // }, [])

  return (
    <>
      <div className='w-full -h-fit COLOR_BG_CREAM flex flex-col relative px-10 overflow-hidden'>
        {/* 
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 left-0 w-1/4' alt="IMG" />
      <img src={`/svgs/WeddingDesign.svg`} className=' absolute object-cover object-center top-0 right-0 w-1/4 rotate-[90deg]' alt="IMG" /> */}

        {/* Titile */}
        <div className='w-full h-fit  max-sm:h-fit flex justify-center  items-center mt-[10vh] max-sm:mt-[10vh] mb-[1vh] max-sm:mb-[10vh] ImgTDcont'>
          {/* <img src={`/svgs/WeddingTitle.svg`} alt="IMG" className=' sm:h-full max-sm:w-full object-cover object-center  ' /> */}
          <div className='w-fit flex flex-col COLOR_TEXT_RED' >
            <h1 className='Font_YIV text-[7rem] translate-y-10 max-sm:translate-y-5 leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw]'>The</h1>
            <h1 className='Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase'>Wedding</h1>
            <h1 className='Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase'>ITINERARY.</h1>
            <div className='Font_YV mt-5 w-full flex flex-col text-center'>
              <p>A series of sacred ceremonies and joyful </p>
              <p>celebrations as we begin our new journey together</p>
            </div>
          </div>
        </div>

        {/* 1 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center my-20'>

  
        <div className='w-1/2 h-fit relative flex justify-center max-sm:w-full max-sm:mt-10 '>
          <img src={`/imgs/home/imgH4.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day01BG.svg`} alt="Img" className='w-2/3 max-sm:hidden object-cover animate1TDIMGANDTEXT object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>


        <div className='w-1/2 h-fit animate2TDIMGANDTEXT max-sm:w-full max-sm:mt-[5vh]'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>25 March 2026</p>
            
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 01</h1>
            </div>
           
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

            
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

          
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest capitalize text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

        
            <div className="mt-10 flex justify-center">
              <Link href={'/venue'} ><button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>

      </div> */}

        {/* 2 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:w-full justify-center items-center my-20 max-sm:my-10'>

       
        <div className='w-1/2 h-fit animate3TDIMGANDTEXT max-sm:w-full'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 ">
            <p className='Font_YV'>26 March 2026</p>
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 02</h1>
            </div>
            
            <h3 className="Font_Q text-[#7b1e24] leading-snug uppercase">
              Sangeet
            </h3>

           
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

            
            <span className="mt-6 w-1/2 max-sm:w-full text-[18px] leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

            
            <div className="mt-10 flex justify-center">
              <Link href={'/venue'} > <button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>


        

        <div className='w-1/2 max-sm:w-full h-fit relative flex max-sm:mt-15  justify-center'>
          <img src={`/imgs/home/imgH5.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day02BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate4TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

      </div> */}

        {/* 3 */}
        {/* <div className='w-full h-fit flex max-sm:flex-col max-sm:flex-col-reverse justify-center items-center mt-20 mb-[30vh] max-sm:mb-[10vh]'>

        
        <div className='w-1/2 h-fit max-sm:w-full relative flex justify-center max-sm:mt-10 '>
          <img src={`/imgs/home/imgH6.webp`} alt="Img" className='w-2/3 max-sm:w-full object-cover object-center' />
          <img src={`/svgs/Day03BG.svg`} alt="Img" className='w-2/3 max-sm:hidden animate5TDIMGANDTEXT object-cover object-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
        </div>

      
        <div className='w-1/2 max-sm:w-full h-fit animate6TDIMGANDTEXT'>
          <div className="w-full text-center flex flex-col justify-center items-center px-6 max-sm:mt-10 ">
            <p className='Font_YV'>27 March 2026</p>
            <div className='w-full'>
              <h1 className='Font_Q text-[7rem] text-center  mb-5 text-[#7b1e24]'>Day 03</h1>
            </div>
            
            <h3 className="Font_Q text-[#7b1e24] leading-snug">
              MEHENDI AND HALDI
              <br />
              CEREMONY
            </h3>

           
            <p className="mt-3 Font_YV tracking-wide text-[#7b1e24]">
              4:00 PM
            </p>

          
            <span className="mt-6 w-1/2 text-[18px] max-sm:w-full leading-[18px] Font_YV tracking-widest text-gray-500">
              A SERIES OF SACRED CEREMONIES AND JOYFUL
              CELEBRATIONS AS WE BEGIN OUR NEW JOURNEY
              TOGETHER
            </span>

         
            <div className="mt-10 flex justify-center">
              <Link href={'/venue'} ><button className="group flex items-center gap-3 px-8 py-3 border border-gray-700 rounded-full text-xs tracking-widest transition-all duration-300 hover:bg-[#7b1e24] hover:text-white">
                VIEW DETAILS
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button></Link>
            </div>
          </div>
        </div>

      </div> */}


        {/* ========================================================================================================= */}
      </div>

      {/* ================================ */}

      <div className="w-full h-fit flex flex-col z-20 COLOR_BG_CREAM  ">
        {/* div-1 Sangeet */}
        <div className="w-full min-h-screen max-sm:h-fit flex max-sm:flex-col">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 1</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase ">Sangeet</h5>

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

            <div className='w-full h-fit flex flex-col gap-5 justify-center items-center mt-5'>
              {/* --------------------------------------------- */}
              {/* <Link href="/venue"> <button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Explore Venue
              </button></Link> */}

              <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(No white red or gold )</span>

              <Link href="#"><button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                RSVP
              </button></Link>

              {/* --------------------------------------------- */}</div>


          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              {/* <h3 className="Font_Q  uppercase">OutFit</h3> */}
              {/* <p className="Font_YV  mt-10">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
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

        {/* div-2  */}
        <div className="w-full min-h-screen  max-sm:h-fit  flex max-sm:flex-col flex-row-reverse">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 2</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase ">Haldi, Barat & Wedding</h5>

            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=' uppercase'>
                <span className="font-semibold"></span> 26 March 2006
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
            <div className='w-full h-fit flex gap-5 justify-center items-center mt-5'>
              {/* --------------------------------------------- */}
              {/* <Link href="/venue"> <button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Explore Venue
              </button></Link> */}

              <Link href="/wedding"><button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                RSVP
              </button></Link>

              {/* --------------------------------------------- */}</div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              {/* <h3 className="Font_Q  uppercase">OutFit</h3>
              <p className="Font_YV  mt-10">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
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

        {/* div-3 */}
        <div className="w-full min-h-screen  max-sm:h-fit  flex max-sm:flex-col">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[10vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>
            <h5 className="Font_Q text-[40px] leading-[40px] max-sm:text-center  mt-4 uppercase ">Pool Party & Reception</h5>

            <div className=" text-[16px] mt-6 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 27 March 2006
              </span>
              <span>
                <span className="font-semibold"></span> 7:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span>

            </div>

            <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
              Short description for wedding e-vite- This love story was never meant to be subtle. Join us for a sangeet packed with rhythm, energy, and main-character moments.
            </p>

            <span className='Text_YV font-semibold py-4 text-[14px] capitalize '>(No white red or gold )</span>
            <div className='w-full h-fit flex gap-5 justify-center items-center mt-5'>

              {/* --------------------------------------------- */}
              {/* <Link href="/venue"> <button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                Explore Venue
              </button></Link> */}

              <Link href="/wedding"><button className="button" style={{ backgroundColor: '#551301' }}>
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="10"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy "
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                RSVP
              </button></Link>

              {/* --------------------------------------------- */}

              {/* <Link href="/wedding"><button className=' uppercase w-fit h-fit  px-[20px] py-[10px] border rounded-full text-[14px] hover:bg-[#551301] hover:text-white select-none cursor-pointer'>See More</button></Link> */}
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:pb-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-[80%] h-fit  flex flex-col justify-center items-center">
              {/* <h3 className="Font_Q  uppercase">OutFit</h3>
              <p className="Font_YV  mt-10">
                Light-coloured Indian or fusion wear
              </p>
              <p className="Font_YV ">
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


      </div>

    </>
  )
}

export default Itinerary
