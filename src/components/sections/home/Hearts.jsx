'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Hearts = () => {

    useEffect(() => {
        const TLH = gsap.timeline({
            scrollTrigger: {
                trigger: '.heart_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLH.to('.innderHerartCont', {
            gap: 100,
        }, 'b1')
        TLH.to('.innderHerartCont2', {
            gap: 800,
        }, 'b1')

        TLH.to('.tlr', {
            opacity: 0,
            // scale:1,
            ease: 'none'
        }, 'b1')
        TLH.to('.TOPUPTEXT', {
            opacity: 1,
            ease: 'none'
        })

    }, [])

    // SM
    useEffect(() => {
        const TLH = gsap.timeline({
            scrollTrigger: {
                trigger: '.heart_cont',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                // markers: true
            }
        })
        TLH.to('.innderHerartCont2SM', {
            gap: 200,
        }, 'b1')
        TLH.to('.TOPUPTEXTSM', {
            opacity: 1,
            scale: 1,
            ease: 'none'
        }, 'b1')
    }, [])


    return (
        <div className='w-full h-[250vh] relative heart_cont '>
            <div className='w-full h-screen overflow-hidden sticky flex flex-col max-sm:hidden justify-center top-0 left-0 COLOR_BG_RED COLOR_TEXT_CREAM uppercase'>
                {/* 1 */}
                <div className=' w-full innderHerartCont tlr  h-fit text-[8vw] leading-[8vw] Font_Q flex  gap-[10vw] justify-center'>
                    <h1>Two</h1>
                    <h1>hearts</h1>
                    <h1> met</h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont2 tlr   whitespace-nowrap flex-nowrap h-fit text-[8.5vw] leading-[8.5vw] Font_Q flex gap-10 justify-center'>
                    <h1>love grew</h1>
                    <h1> quietly,</h1>
                </div>
                {/* 1 */}
                <div className=' w-full innderHerartCont tlr  h-fit text-[8.5vw] leading-[8.5vw] Font_Q flex gap-10 justify-center'>
                    <h1>and </h1>
                    <h1>forever </h1>
                    <h1> began.</h1>
                </div>

                {/* <div className=' TOPUPTEXT absolute opacity-0 scale-[0.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 COLOR_TEXT_CREAM flex flex-col justify-center items-center'>
                    <h5 className='text-[40px] Font_Q font-light'>Gracefully</h5>
                    <p className='Font_YV font-semibold'>United</p>
                </div> */}


                <div className=' TOPUPTEXT absolute w-full h-screen overflow-hidden opacity-0  top-0 left-0 flex flex-col justify-center items-center'>
                    <img src={`/imgs/SonalKush1.webp`} className='w-full h-full object-center object-cover' alt="img" />
                </div>
            </div>

            {/* SM */}
            <div className='w-full h-screen overflow-hidden sticky flex flex-col px-[20px] text-[3rem] leading-[3rem] sm:hidden justify-center top-0 left-0 COLOR_BG_RED COLOR_TEXT_CREAM uppercase'>
                {/* 1 */}
                <div className=' w-full  overflow-hidden h-fit  Font_Q flex flex-col '>
                    <h1>Two</h1>
                    <h1>hearts</h1>
                    <h1> met</h1>
                </div>
                {/* 1 */}
                <div className=' w-full i overflow-hidden innderHerartCont2SM gap-1  whitespace-nowrap flex-nowrap h-fit  Font_Q flex flex-col  justify-between'>
                    <h1>love grew</h1>
                    <h1> quietly,</h1>
                </div>
                {/* 1 */}
                <div className=' w-full  overflow-hidden h-fit  Font_Q flex flex-col  justify-center'>
                    <h1>and </h1>
                    <h1>forever </h1>
                    <h1> began.</h1>
                </div>

                <div className=' TOPUPTEXTSM absolute opacity-0 scale-[0.5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 COLOR_TEXT_CREAM flex flex-col justify-center items-center'>
                    <h5 className='text-[40px] Font_Q font-light'>Gracefully</h5>
                    <p className='Font_YV font-semibold'>United</p>
                </div>
            </div>
        </div>
    )
}

export default Hearts
