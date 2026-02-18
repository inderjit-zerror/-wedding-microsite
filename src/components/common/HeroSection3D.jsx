'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
import {vertex, fragment} from '@/components/shader/HeroSection'
import * as THREE from "three"
import { usePathname } from "next/navigation";



const Plane = ({srcURL}) => {
    const { viewport, size } = useThree()
    const texture = useTexture(srcURL)
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

const HeroSection3D = ({srcURL}) => {
    const distance = 200;
    const [fov, setFov] = useState(75);
    const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean)[0];

    useEffect(() => {
        const FovCalc = () => {
            setFov(2 * Math.atan(window.innerHeight / (2 * distance)) * (180 / Math.PI))
        }
        FovCalc()
        window.addEventListener('resize', FovCalc);
        return () => window.removeEventListener('resize', FovCalc)
    }, [])

    return (
        
        <div className='w-full h-screen relative '>
            <Canvas className='w-full h-screen'>
                <PerspectiveCamera makeDefault fov={fov} position={[0, 0, distance]} />
                <Plane srcURL={srcURL} />
            </Canvas>
        </div>
    )
}



export default HeroSection3D

