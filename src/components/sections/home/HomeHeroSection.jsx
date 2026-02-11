'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HomeHeroSection = () => {

    const containerRefHome = useRef(null)
    const imageRefHome = useRef(null)

    // PRE-PRE-ANIMATION
    useGSAP(() => {
        const hYL = gsap.timeline();
        hYL.to('.HOMEMAIM', {
            opacity: 1,
            duration: 1,
            stagger: {
                each: '0.2',
                ease: 'none'
            },
            ease: 'none'
        })
        hYL.to(imageRefHome.current, {
            opacity:1,
            duration:2,
            ease: 'power1.Out'
        })
    }, [])

    useGSAP(() => {
        gsap.to(imageRefHome.current, {
            yPercent: 20, // parallax strength
            ease: 'none',
            scrollTrigger: {
                trigger: containerRefHome.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                // markers:true
            },
        })
    }, [])


    return (
        <div className='w-full h-screen overflow-hidden relative COLOR_BG_RED '>
            <div ref={containerRefHome} className='w-full h-screen flex overflow-hidden'>
                <Image
                    ref={imageRefHome}
                    src={`/imgs/SonalKush3.webp`}
                    className='w-full h-full scale-[1] opacity-0 object-cover object-center max-sm:object-[72%]'
                    width={1000}
                    height={1000}
                    alt='IMG'
                />

                {/* <video ref={imageRefHome} muted autoPlay loop src={`/file.mp4`} className='w-full h-screen scale-[1.4] opacity-0 object-cover object-center'></video> */}
            </div>
            <div className='w-full h-screen absolute top-0 left-0 z-20 flex max-sm:pb-8 justify-center items-end HOMEMAIM'>
                <h1 className=' uppercase  text-[9vw] max-sm:text-[14vw] max-sm:leading-[14vw] max-sm:text-center Font_Q opacity-0 COLOR_TEXT_CREAM HOMEMAIM'>sonal & Kush</h1>
            </div>
        </div>
    )
}

export default HomeHeroSection
