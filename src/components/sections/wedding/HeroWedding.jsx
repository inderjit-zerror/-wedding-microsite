// ------------------------------------------------------------------------- NEW ----------------------------------------------------------
'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
// import heroVertexH from '@/components/shader/heroVertexH.glsl'
// import heroFragmentH from '@/components/shader/heroFragmentH.glsl'
import * as THREE from "three"
// import Customhome from './Customhome'
import {vertex, fragment} from '@/components/shader/Heroshader'
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
            top:'40%',

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
            top:'30%',
            left:'5%',
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
      <div className='w-[60px] cstmDiv h-[60px] flex justify-center translate-y-[100vh] items-end relative '>
        <div className='w-full h-[20px] le1 COLOR_BG_RED rounded-[5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
        <div className='w-[20px] h-full le2 COLOR_BG_RED rounded-[5px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

        {/* Sonal& Kush */}
        <div className='  flex flex-col text-[5vw] pb-[2rem] PRETEXTXONTHOME absolute top-[80%] leading-[6vw]  overflow-hidden COLOR_TEXT_CREAM z-[100] Font_Q '>
            <span className='Font_YIV capitalize flex textPre_Triger opacity-0 translate-y-[0%]'>The</span>
            <span className='Font_Q uppercase flex textPre_Triger opacity-0 translate-y-[0%]'>Wedding</span>
            <span className='Font_Q uppercase flex textPre_Triger opacity-0 translate-y-[0%]'>ITINERARY.</span>
        </div>
      </div>
    </div>
  )
}





const Plane = ({srcimg}) => {
    const { viewport, size } = useThree()
    const texture = useTexture(srcimg)
    const materialRef = useRef()

    const mouse = useRef(new THREE.Vector2(0.5, 0.5))
    const prevMouse = useRef(new THREE.Vector2(0.5, 0.5))
    const velocity = useRef(0)
    const active = useRef(0)

    const uniforms = useRef({
        uTexture: { value: texture },
        uMouse: { value: mouse.current },
        uVelocity: { value: 0 },
        uActive: { value: 0 },
        uRadius: { value: 0.17 },
        uStrength: { value: 0.50 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uTextureSize: {
            value: new THREE.Vector2(
                texture.image?.width || 1,
                texture.image?.height || 1
            )
        }
    })

    useFrame((state, delta) => {
        if (!materialRef.current) return

        const dist = mouse.current.distanceTo(prevMouse.current)
        const smoothFactor = 1.0 - Math.exp(-8 * delta)
        const targetVelocity = dist * 5.0

        velocity.current += (targetVelocity - velocity.current) * smoothFactor
        velocity.current *= 0.95

        materialRef.current.uniforms.uVelocity.value = velocity.current
        materialRef.current.uniforms.uActive.value +=
            (active.current - materialRef.current.uniforms.uActive.value) * 0.08

        prevMouse.current.lerp(mouse.current, 0.12)
    })

    useEffect(() => {
        uniforms.current.uResolution.value.set(size.width, size.height)
    }, [size])

    return (
        <mesh
            scale={[viewport.width, viewport.height, 1]}
            onPointerMove={(e) => {
                mouse.current.copy(e.uv)
                active.current = 1
            }}
            onPointerLeave={() => {
                active.current = 0
                velocity.current = 0
            }}
        >
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms.current}
                vertexShader={vertex}
                fragmentShader={fragment}
            />
        </mesh>
    )
}
const HeroWedding = ({srcimg}) => {
    const distance = 200;
    const [fov, setFov] = useState(75);

    useEffect(() => {
        const FovCalc = () => {
            setFov(2 * Math.atan(window.innerHeight / (2 * distance)) * (180 / Math.PI))
        }
        FovCalc()
        window.addEventListener('resize', FovCalc);
        return () => window.removeEventListener('resize', FovCalc)
    }, [])

    return (
        <div className='w-full h-screen fixed top-0 left-0 '>
            <Customhome/>
            <Canvas className='w-full h-screen'>
                <PerspectiveCamera makeDefault fov={fov} position={[0, 0, distance]} />
                <Plane  srcimg={srcimg} />
            </Canvas>
        </div>
    )
}



export default HeroWedding

