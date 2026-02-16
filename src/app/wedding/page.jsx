import RSVP from '@/components/common/RSVP'
import CardX from '@/components/sections/wedding/CardX'
import HeroWedding from '@/components/sections/wedding/HeroWedding'
import WeddingHome from '@/components/sections/wedding/WeddingHome'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <HeroWedding  srcimg={`/imgs/imgtry.jpg`} />
     {/* <WeddingHome srcimg={`/imgs/save3.webp`}/> */}
     <CardX/>
     {/* <RSVP/> */}
    </div>
  )
}

export default page
