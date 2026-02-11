'use client'
import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const VenueGallery = () => {


    // // Scroll Image Animation
    // useGSAP(() => {
    //     gsap.from('.L1ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.L1Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    //     gsap.from('.L2ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.L2Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    //     gsap.from('.L3ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.L3Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    //     gsap.from('.R4ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.R4Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    //     gsap.from('.R5ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.R5Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    //     gsap.from('.R6ImgCont', {
    //         scale: 0.5,
    //         yPercent: 20,
    //         duration:1,
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: '.R6Cont',
    //             start: 'top bottom',
    //             end: 'top 50%',
    //             scrub: true,
    //             // markers: true
    //         },
    //     })
    // }, [])



    return (
        <div className="w-full min-h-screen flex px-15 max-sm:px-[20px] pb-[15vw] max-sm:flex-col gap-10 COLOR_BG_CREAM">
            {/* Left */}
            <div className="w-1/2 h-fit flex flex-col max-sm:w-full ">
                {/* 1 */}
                <div className="w-full flex h-fit L1Cont max-sm:flex-col  max-sm:gap-2 ">
                    <div className="w-1/2 h-auto flex sm:flex-col justify-between max-sm:gap-5 max-sm:items-center COLOR_TEXT_RED max-sm:w-full">
                        <h2 className="Font_Q ">01</h2>

                        <div className="w-full h-fit flex sm:flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>
                    <div className="w-[80%] h-fit L1ImgCont">
                        <img src={`/imgs/h1.webp`} alt="IMG" className="w-full max-sm:object-cover object-cover object-center max-sm:object-center max-sm:aspect-3/3 sm:aspect-3/2" />
                    </div>
                </div>

                {/* 2 */}
                <div className="w-full flex flex-col h-fit gap-3 mt-[27vh] max-sm:mt-[5vh] L2Cont ">
                    <div className="w-full h-fit flex justify-between items-end  COLOR_TEXT_RED">
                        <h2 className="Font_Q">02</h2>

                        <div className="w-fit h-fit flex justify-end items-end uppercase ">
                            <p className="Font_YV">Grand Entrance / Facade</p>
                        </div>
                    </div>
                    <div className="w-full h-fit L2ImgCont">
                        <img src={`/imgs/h2.webp`} alt="IMG" className="w-full object-cover object-center max-sm:object-center max-sm:object-cover max-sm:aspect-4/5 sm:" />
                    </div>
                </div>


                {/* 3 */}
                <div className="w-full flex max-sm:flex-col max-sm:flex-col-reverse h-fit mt-[15vh] max-sm:mt-[5vh] gap-2  L3Cont">
                    <div className="w-1/2 h-fit L3ImgCont max-sm:w-[80%] max-sm:ml-auto">
                        <img src={`/imgs/h3.webp`} alt="IMG" className="w-full object-cover object-center max-sm:object-cover max-sm:object-center max-sm:aspect-3/3 sm:object-cover sm:object-center sm:aspect-2/2" />
                    </div>
                    <div className="w-1/2 h-auto flex max-sm:w-[80%] max-sm:gap-[2vw] max-sm:items-center max-sm:ml-auto sm:flex-col justify-between COLOR_TEXT_RED">
                        <h2 className="Font_Q">03</h2>

                        <div className="w-full h-fit flex sm:flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>

                </div>

            </div>



            {/* Right */}
            <div className="w-1/2 h-fit flex flex-col max-sm:w-full max-sm:mt-[5vw]">
                {/* 4 */}
                <div className="w-full flex h-fit gap-2 R4Cont max-sm:flex-col max-sm:flex-col-reverse ">
                    <div className="w-[70%] h-fit R4ImgCont max-sm:w-full">
                        <img src={`/imgs/h4.webp`} alt="IMG" className="w-full object-cover object-center max-sm:object-cover max-sm:object-center max-sm:aspect-3/3 sm:aspect-2/2" />
                    </div>
                    <div className="w-[30%] max-sm:w-full h-auto flex sm:flex-col max-sm:items-center max-sm:gap-[2vw] justify-between COLOR_TEXT_RED">
                        <h2 className="Font_Q">04</h2>

                        <div className="w-full max-sm:w-fit h-fit flex sm:flex-col uppercase">
                            <p className="Font_YV">Outdoor</p>
                            <p className="Font_YV">Ceremony Area</p>
                        </div>
                    </div>

                </div>


                {/* 5 */}
                <div className="w-full flex h-fit mt-[15vh] max-sm:mt-[5vh] max-sm:flex-col gap-2 R5Cont ">
                    <div className="w-1/2 max-sm:w-[80%] h-auto flex max-sm:items-center sm:flex-col justify-between COLOR_TEXT_RED pl-20 max-sm:pl-0">
                        <h2 className="Font_Q">05</h2>

                        <div className="w-full max-sm:w-fit h-fit flex sm:flex-col uppercase">
                            {/* <p className="Font_YV">Courtyard / </p> */}
                            <p className="Font_YV">Heritage</p>
                            <p className="Font_YV">Architecture</p>
                        </div>
                    </div>
                    <div className="w-1/2 max-sm:w-[80%] h-fit R5ImgCont">
                        <img src={`/imgs/h5.webp`} alt="IMG" className="w-full max-sm:object-cover object-cover object-center max-sm:object-center max-sm:aspect-3/4 sm:aspect-3/4" />
                    </div>
                </div>

                {/* 6 */}
                <div className="w-full flex flex-col h-fit gap-3 mt-[15vh] max-sm:mt-[5vh] R6Cont ">
                    <div className="w-full h-fit flex justify-between items-end max-sm:items-center  COLOR_TEXT_RED">
                        <h2 className="Font_Q">06</h2>

                        <div className="w-fit h-fit flex justify-end items-end uppercase ">
                            <p className="Font_YV">Grand Entrance / Facade</p>
                        </div>
                    </div>
                    <div className="w-full h-fit R6ImgCont">
                        <img src={`/imgs/h6.webp`} alt="IMG" className="w-full object-cover object-center aspect-4/2 max-sm:aspect-2/2" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default VenueGallery;
