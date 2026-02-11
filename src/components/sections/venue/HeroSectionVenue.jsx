'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeroSectionVenue = () => {

  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: 20, // parallax strength
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // markers:true
      },
    })
  }, [])

   // PRE-PRE-ANIMATION
    useGSAP(()=>{
        gsap.from('.WEDMAIMTT',{
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
    <div ref={containerRef} className='w-full h-screen flex overflow-hidden WEDMAIMTT relative COLOR_BG_CREAM'>
      <Image
        ref={imageRef}
        src={`/imgs/RafflesUdaipur.webp`}
        className='w-full h-full object-cover object-center  WEDMAIMTT'
        width={1000}
        height={1000}
        alt='IMG'
      />

      {/* <img src={`/name.png`} alt="IMG" className='w-1/3 max-sm:w-2/3 object-cover object-center absolute bottom-[15%] left-1/2 -translate-x-1/2' /> */}

      <div className='w-1/2 absolute top-[12%] left-1/2  justify-center items-center -translate-x-1/2 flex flex-col gap-4'>
        <p className=' uppercase Font_YV  COLOR_TEXT_CREAM text-[6rem] leading-[6rem] max-sm:text-[15vw] max-sm:leading-[16vw] ' >THE wedding Venue</p>
        <h1 className=' uppercase Font_Q COLOR_TEXT_CREAM text-[6rem] leading-[6rem] max-sm:text-[15vw] max-sm:leading-[16vw] ' >raffles udaipur</h1>
      </div>
    </div>
  )
}

export default HeroSectionVenue
