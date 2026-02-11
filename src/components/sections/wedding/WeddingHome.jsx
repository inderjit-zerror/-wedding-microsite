'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const WeddingHome = () => {

  // const WcontainerRef = useRef(null)
  // const WimageRef = useRef(null)

  useGSAP(() => {
    gsap.to(`.NN`, {
      height:'100vh',
      ease:'none',
      scrollTrigger: {
        trigger:'.nk',
        start: 'top top',
        end: 'top -10%',
        scrub: true,
        // markers:true
      },
    })
    gsap.to(`.nk`, {
      padding:0,
      ease:'none',
      scrollTrigger: {
        trigger:'.nk',
        start: 'top top',
        end: 'top -10%',
        scrub: true,
        // markers:true
      },
    })
  }, [])

   // PRE-PRE-ANIMATION
    useGSAP(()=>{
        gsap.from('.WEDMAIM',{
         y:50,
         duration:0.3,
         stagger:{
            each:'0.2',
            ease:'none'
         },
         ease:'none'
        })
    },[])

  return (
    <div  className="w-full  h-screen fixed top-0 left-0 nk flex justify-end items-end px-4 z-[-1] COLOR_BG_CREAM ">
      <div   className="w-full NN h-[85vh] overflow-hidden flex relative WEDMAIM ">
        <img
        
          src={`/imgs/save1.webp`}
          className="w-full h-full object-cover object-[50%_18%]"
          alt="Img"
        />

        {/* <img  src={`/svgs/WDText.svg`} alt="IMG" className=" absolute object-cover object-center w-1/3 max-sm:w-2/3 top-1/2 max-sm:top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
         <div className='w-fit flex flex-col absolute top-1/2 max-sm:top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 COLOR_TEXT_CREAM' >
          <h1 className='Font_YIV text-[7rem] translate-y-10 leading-[7rem] max-sm:translate-y-5 max-sm:text-[15vw] max-sm:leading-[16vw]'>The</h1>
          <h1 className='Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase'>Wedding</h1>
          <h1 className='Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase'>ITINERARY.</h1>
        </div>
      </div>
    </div>
  );
};

export default WeddingHome;
