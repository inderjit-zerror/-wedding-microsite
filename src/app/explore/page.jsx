'use client'
import SMExplor from '@/components/sections/explore/SMExplor'
import Explore from '@/components/sections/venue/Explore'
import React, { useEffect, useState } from 'react'

const explore = () => {

  const [isMobile, SetisMobile] = useState(false)

  useEffect(()=>{
    if(window.innerWidth < 700){
      SetisMobile(true)
    }
    else{
      SetisMobile(false)
    }
  },[])

  return (
    <>
    { isMobile == false? (<> <Explore/></>):(<> <SMExplor/> </>)}
    </>
  )
}

export default explore
