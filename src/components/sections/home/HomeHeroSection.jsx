// 'use client'
// import Image from 'next/image'
// import React, { useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { useGSAP } from '@gsap/react'

// gsap.registerPlugin(ScrollTrigger)


// // const HomeHeroSection = () => {

// //     const containerRefHome = useRef(null)
// //     const imageRefHome = useRef(null)


// //     useGSAP(() => {
// //         const hYL = gsap.timeline();
// //         hYL.to('.HOMEMAIM', {
// //             opacity: 1,
// //             duration: 1,
// //             stagger: {
// //                 each: '0.2',
// //                 ease: 'none'
// //             },
// //             ease: 'none'
// //         })
// //         hYL.to(imageRefHome.current, {
// //             opacity:1,
// //             duration:2,
// //             ease: 'power1.Out'
// //         })
// //     }, [])

// //     useGSAP(() => {
// //         gsap.to(imageRefHome.current, {
// //             yPercent: 20,
// //             ease: 'none',
// //             scrollTrigger: {
// //                 trigger: containerRefHome.current,
// //                 start: 'top top',
// //                 end: 'bottom top',
// //                 scrub: true,
// //                 // markers:true
// //             },
// //         })
// //     }, [])


// //     return (
// //         <div className='w-full h-screen overflow-hidden relative COLOR_BG_RED '>
// //             <div ref={containerRefHome} className='w-full h-screen flex overflow-hidden'>
// //                 <Image
// //                     ref={imageRefHome}
// //                     src={`/imgs/SonalKush3.webp`}
// //                     className='w-full h-full scale-[1] opacity-0 object-cover object-center max-sm:object-[72%]'
// //                     width={1000}
// //                     height={1000}
// //                     alt='IMG'
// //                 />

// //                 {/* <video ref={imageRefHome} muted autoPlay loop src={`/file.mp4`} className='w-full h-screen scale-[1.4] opacity-0 object-cover object-center'></video> */}
// //             </div>
// //             <div className='w-full h-screen absolute top-0 left-0 z-20 flex max-sm:pb-8 justify-center items-end HOMEMAIM'>
// //                 <h1 className=' uppercase  text-[9vw] max-sm:text-[14vw] max-sm:leading-[14vw] max-sm:text-center Font_Q opacity-0 COLOR_TEXT_CREAM HOMEMAIM'>sonal & Kush</h1>
// //             </div>
// //         </div>
// //     )
// // }

// export default HomeHeroSection


// ------------------------------------------------------------------------- NEW ----------------------------------------------------------
'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
// import heroVertexH from '@/components/shader/heroVertexH.glsl'
// import heroFragmentH from '@/components/shader/heroFragmentH.glsl'
import * as THREE from "three"
import Customhome from './Customhome'
import {vertex, fragment} from '@/components/shader/Heroshader'


const Plane = () => {
    const { viewport, size } = useThree()
    const texture = useTexture('/imgs/SonalKush3.webp')
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
const HomeHeroSection = () => {
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
        <div className='w-full h-screen relative'>
            <Customhome/>
            <Canvas className='w-full h-screen'>
                <PerspectiveCamera makeDefault fov={fov} position={[0, 0, distance]} />
                <Plane />
            </Canvas>
        </div>
    )
}



export default HomeHeroSection

