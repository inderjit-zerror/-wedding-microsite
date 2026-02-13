import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);


const Customhome = () => {

    useGSAP(()=>{
        const ct = gsap.timeline()
        ct.to('.cstmDiv',{
            y:0,
            duration:1,
            ease:'power1.inOut'
        },'c3')
        ct.to('.cstmDiv',{
            rotateZ:720,
            duration:2,
            ease:'power3.out',
        },'c3')
        ct.to('.le1',{
            width:'100%',
            duration:2,
            ease:'power3.out',
        },'c3')
        ct.to('.le1',{
            delay:1,
            height:'100%',
            duration:1,
            ease:'power3.out',
        },'c3')
        ct.to('.le2',{
            delay:1,
            width:'100%',
            duration:1,
            ease:'power3.out',
        },'c3')
        ct.to('.cstmDiv',{
            delay:1.5,
            width:'100%',
            height:'100%',
            duration:1,
            ease:'power3.out',
        },'c3')
        ct.to('.l1, .l2',{
            opacity:0,
            ease:'power3.out',
        },'c4')
        ct.to('.MAINCC',{
            backgroundColor:'#551301',
            ease:'power3.out',
        },'c4')
        ct.to('.PRETEXTXONTHOME',{
            y:'-180%',
            scale:0.6,
            duration:0.2,
            ease:'power3.out',
        },'c4')
        ct.to('.textPre_Triger',{
            y:0,
            opacity:1,
            delay:0.3,
            duration:0.7,
            stagger:{
                each:0.05,
                ease:'power1.inOut'
            },
            ease:'power1.inOut',
        },'c4')
        ct.to('.PRETEXTXONTHOME',{
            y:0,
            delay:1,
            scale:1,
            duration:0.7,
            ease:'power1.inOut',
        })
        ct.to('.MAINCC',{
            background:'transparent',
            duration:1,
            ease:'power1.inOut',
        },'c5')
        ct.to('.cstmDiv , .le1, .le2',{
            background:'transparent',
            duration:1,
            ease:'power1.inOut',
        },'c5')
    },[])

  return (
    <div className='w-full h-screen flex absolute MAINCC justify-center items-center top-0 left-0 COLOR_BG_CREAM z-100 pointer-events-none'>
      <div className='w-[60px] cstmDiv h-[60px] flex justify-center translate-y-[100vh] items-end relative'>
        <div className='w-full h-[20px] le1 COLOR_BG_RED rounded-[5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
        <div className='w-[20px] h-full le2 COLOR_BG_RED rounded-[5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

        {/* Sonal& Kush */}
        <div className=' uppercase flex text-[8vw] pb-[2rem] PRETEXTXONTHOME leading-[9vw] overflow-hidden COLOR_TEXT_CREAM z-[100] Font_Q gap-4'>
            <span className=' flex textPre_Triger opacity-0 translate-y-[100%]'>Sonal</span>
            <span className=' flex textPre_Triger opacity-0 translate-y-[100%]'>&</span>
            <span className=' flex textPre_Triger opacity-0 translate-y-[100%]'>Kush</span>
        </div>
      </div>
    </div>
  )
}

export default Customhome
