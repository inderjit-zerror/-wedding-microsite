import RSVP from '@/components/common/RSVP'
import CardX from '@/components/sections/wedding/CardX'
import WeddingHome from '@/components/sections/wedding/WeddingHome'
import React from 'react'

const page = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
     <WeddingHome/>
     <CardX/>
     {/* <RSVP/> */}
    </div>
  )
}

export default page
