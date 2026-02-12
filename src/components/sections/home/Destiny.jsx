'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AccordGallery from './AccordGallery '

gsap.registerPlugin(ScrollTrigger)

const Destiny = () => {

    useEffect(() => {
        const TLD = gsap.timeline({
            scrollTrigger: {
                trigger: '.Destiny_cont',
                start: 'top top',
                end: 'top -20%',
                scrub: true,
                // markers: true
            }
        })
        // TLD.to('.innderDestinyCont', {
        //     // opacity: 1,
        //     ease: 'none'
        // }, 'b1')


        // --------------------------------------

        gsap.to('.SecondInnerContDestiny', {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.SecondInnerContDestiny',
                start: 'top 70%',
                end: 'top 40%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    useGSAP(() => {

        // gsap.from('.DCD1', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD1',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        gsap.from('.T2T2T', {
            yPercent: 20,
            opacity: 0,
            stagger: {
                each: 1,
                ease: 'none'
            },
            ease: 'none',
            scrollTrigger: {
                trigger: '.innderDestinyCont',
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT2T', {
            yPercent: 20,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT2T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })
        gsap.from('.TT3T', {
            yPercent: 5,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: '.TT3T',
                start: 'top 90%',
                end: 'top 60%',
                scrub: true,
                // markers: true
            }
        })

        // gsap.from('.DCD2', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD2',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD3', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD3',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD4', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD4',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD5', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD5',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.from('.DCD6', {
        //     yPercent: 20,
        //     opacity: 0,
        //     ease: 'none',
        //     scrollTrigger: {
        //         trigger: '.DCD6',
        //         start: 'top 70%',
        //         end: 'top 45%',
        //         scrub: true,
        //         // markers:true
        //     }
        // })
    }, [])

    return (
        <div className='w-full h-fit Destiny_cont relative p-10 max-sm:px-[10px] '>

            {/* Bg */}
            <img src={`/imgs/save2.webp`} className='w-full h-full object-cover object-bottom fixed top-0 left-0  z-[-1]' alt="BG-IMG" />

            <div className='w-full h-fit COLOR_BG_CREAM flex flex-col px-[5vw] innderDestinyCont opacity-100  max-sm:pt-[10vh] max-sm:pt-0 '>
                <div className='w-full h-full px-[10vw] max-sm:px-3 pt-[10vw] max-sm:pb-[10vw] flex flex-col gap-[0.2rem]  '>
                    <div className='w-full h-fit flex justify-center T2T2T items-center'> <span className='Font_YV uppercase text-[1rem] COLOR_TEXT_RED font-semibold '>Kush and Sonal Story:</span></div>
                    {/* <img src={`/svgs/Title1Destiny.svg`} className='w-full T2T2T object-cover' alt="SVG" /> */}

                    <div className='w-full h-fit flex justify-center gap-[2vw] items-center COLOR_TEXT_RED'>
                        <h1 className='Font_Q uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>United</h1>
                        <h1 className='Font_YIV  text-[8vw] leading-[8vw]'>by</h1>
                        <h1 className='Font_Q uppercase text-[8vw] leading-[8vw] max-sm:text-[10vw]'>Destiny</h1>
                    </div>
                </div>

                <div className='w-full h-fit flex mt-[5vw] TT2T COLOR_TEXT_RED gap-[2rem]'>
                    <div className='w-1/2  max-sm:w-full   text-justify max-sm:text-justify max-sm:pr-0'>
                        <p className='Font_YV'> It all began at a graduation party, where Sonal was busy charming the room when Kush walked in, caught one glimpse of her, and instantly knew he had to meet her. What followed was an unforgettable night filled with poker, laughter, and undeniable chemistry. They played their cards right (literally), won a little money, and unknowingly placed the biggest bet of all - on each other.
                            <br></br>
                            For a year, they stayed in touch, their connection never fading. Then fate stepped in. Sonal moved to New York City, and when Kush reached out, he discovered she was living just a ten minute walk from his apartment. Some call it destiny, some call it great real estate planning, but either way, their first date was pure magic. 
                        </p>
                    </div>
                    <div className='w-1/2  max-sm:hidden  '>
                        <p className='Font_YV'> With no furniture in Sonal’s apartment yet, they sat on the floor, shared a bottle of wine, and talked for hours. It was simple, it was effortless, and it felt like home. Three amazing years later, Kush planned the ultimate surprise - a trip to Jamaica. Surrounded by turquoise waters and golden sunsets, he got down on one knee and asked Sonal to spend forever with him. <br></br>
                            And now, here we are, ready to celebrate our greatest adventure yet - our wedding. We can’t wait to share this special moment with all of you!
                        </p>
                    </div>
                </div>



                <div className='w-full h-fit flex max-sm:flex-col mt-[5vw] mb-[4vh] max-sm:mb-[8vh] gap-[5vw] relative  will-change-transform '>

                    <div className='w-2/4 relative z-20 DCD1 max-sm:w-full '>
                        <div className='w-full h-auto'>
                            <img src={`/imgs/SonalKush1.webp`} className='w-full aspect-[2/3] object-cover object-center z-20 ' alt="IMG" />
                        </div>
                    </div>


                    <div className='w-full relative z-20 DCD2 mb-[10vh] max-sm:mb-0 '>
                        <div className='w-full h-auto'>
                            {/* aspect-[2/2] */}
                            <img src={`/imgs/save1.webp`} className='w-full aspect-2/2  max-sm:aspect-auto object-cover object-center z-20 ' alt="IMG" />
                        </div>
                    </div>


                    {/* <div className='w-full h-full absolute bottom-0  left-0 uppercase COLOR_TEXT_RED flex flex-wrap text-wrap z-10 '>
                        <img src={`/svgs/BGTxtDestiny.svg`} alt="IMG" className='w-full h-full object-cover object-center ' />
                    </div> */}
                </div>

                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}
                {/* ------------------------------------------------------------------------------------------------------------ */}


                <div className='w-fit h-fit flex flex-col justify-center m-auto gap-[2vw]  items-start'>
                    <h1 className='Font_YIV  text-[8vw] leading-[8vw] translate-y-20 max-sm:translate-y-2 COLOR_TEXT_RED max-sm:text-[10vw]'>by</h1>
                    <h1 className='Font_Q uppercase text-[8vw] leading-[8vw] COLOR_TEXT_RED max-sm:text-[10vw]'>MATCHMAKER</h1>
                </div>

                <AccordGallery />
                <div className='w-full h-fit flex max-sm:flex-col  justify-start items-end max-sm:justify-center mb-[20vh] max-sm:mb-[10vh] '>
                   
                    <div className='w-1/2 h-full DCD5 max-sm:w-full '>
                        <div className='w-1/2 h-fit max-sm:w-full'>

                            <div className='w-[280px] fit uppercase Font_YV'>
                                <p className='mt-8 max-sm:mt-0 COLOR_TEXT_RED'>to know him and his family, her family felt confident and happy about the match. </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-1/2 h-fit max-sm:w-full flex justify-end DCD6 max-sm:justify-center '>

                        <div className='w-1/2 h-fit flex flex-col max-sm:w-full max-sm:mt-[2vw] uppercase'>

                

                            <h1 className='Font_Q text-[5vw] max-sm:text-[10vw] max-sm:mt-5 ml-auto COLOR_TEXT_RED'>ACCORD</h1>
                            <p className='COLOR_TEXT_RED Font_YV ml-auto'>After meeting and getting to know him and</p>
                            <p className='COLOR_TEXT_RED Font_YV ml-auto'>his family, her family felt confident and</p>
                            <p className='COLOR_TEXT_RED Font_YV ml-auto'>happy about the match. </p>
                            

                        </div>

                    </div>
                </div>





                {/* <div className='w-full h-fit flex flex-col mb-[10vh] max-sm:mb-8 relative SecondInnerContDestiny opacity-0  mt-[30vh]'>
                    <div className='w-full relative'>
                        <div className='w-1/2 flex mb-[80vh] max-sm:mb-[40vh] relative flex-col max-sm:w-[80%]'>
                            <div className='w-full h-fit flex justify-start items-center T2T2T mb-[2rem]'> <span className='Font_YV uppercase text-[1rem] COLOR_TEXT_RED font-semibold '>Our story</span></div>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q COLOR_TEXT_RED' >Together</h1>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q COLOR_TEXT_RED' >as</h1>
                            <h1 className=' uppercase text-[8vw] leading-[8vw] Font_Q COLOR_TEXT_RED' >one</h1>
                        </div>

                        
                        <div className='w-full h-fit flex justify-center  items-center absolute top-[30%] max-sm:top-[18%] left-0'>
                            
                            <div className='w-[380px] h-[500px] max-sm:w-full max-sm:h-[200px]   rotate-z-[5deg] z-30 relative DCD3'>
                                <img src={`/imgs/home/img1Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                                
                                <img src={`/svgs/randomText.svg`} className='w-[100px] absolute top-[110%] left-1/2 object-cover object-center' alt="IMG" />
                            </div>

                            
                            <div className='w-[380px] h-[500px] max-sm:w-full max-sm:h-[200px] overflow-hidden -rotate-z-[5deg] z-20 translate-y-[-10%] DCD4'>
                                <img src={`/imgs/home/img2Destiny2.webp`} alt="IMG" className='w-full h-full object-cover object-center' />
                            </div>
                        </div>

                        <div className='w-full h-fit flex max-sm:flex-col  justify-start items-end '>
                        
                            <div className='w-1/2 h-full DCD5 max-sm:w-full '>
                                <div className='w-1/2 h-fit max-sm:w-full'>
                                    <div className='w-[270px] h-[204px] max-sm:w-full max-sm:h-[300px] overflow-hidden flex flex-col '>
                                        <img src={`/imgs/home/img3Destiny2.webp`} className=' w-full object-center object-cover' alt="IMG" />
                                    </div>
                                    <div className='w-[280px] fit uppercase Font_YV'>
                                        <p className='mt-8'>to know him and his family, her family felt confident and happy about the match. </p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className='w-1/2 h-fit max-sm:w-full flex justify-end DCD6'>

                                <div className='w-1/2 h-fit flex flex-col max-sm:w-full max-sm:mt-[10vw]'>
                                    <div className="flex gap-8 max-sm:gap-4 items-end max-w-5xl w-full">

                                    
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[250px] object-cover object-center"
                                            />
                                        </div>

                                 
                                        <div className="flex-1">
                                            <img
                                                src={`/imgs/home/img2Destiny2.webp`}
                                                alt="Couple"
                                                className="w-full h-[270px] object-cover object-center"
                                            />
                                        </div>

                                    </div>
                                    <img src={`/svgs/LastimgDestiny2.svg`} className='w-full max-sm:w-2/3 max-sm:mt-[5vw] max-sm:ml-auto mt-[2.5vw] object-center object-cover' alt="IMG" />

                                </div>

                            </div>
                        </div>
                    </div>



                </div> */}


            </div>



        </div>
    )
}

export default Destiny
