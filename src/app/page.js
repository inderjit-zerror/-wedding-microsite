'use client'

import { useEffect } from 'react'
import RSVP from "@/components/common/RSVP";
import Countdown from "@/components/sections/home/Countdown";
import Destiny from "@/components/sections/home/Destiny";
import FAQ from "@/components/sections/home/FAQ";
import Hearts from "@/components/sections/home/Hearts";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import Itinerary from "@/components/sections/home/Itinerary";
import Line from "@/components/sections/home/Line";
import WeddingHero from "@/components/sections/home/WeddingHero";


export default function Home() {

  return (
    <>
      <HomeHeroSection />
      <WeddingHero />
      <Line/>
      <Countdown/>
      <Hearts/>
      <Destiny />
      <Itinerary/>
      <FAQ/>
      <RSVP/>
    </>
  );
}
