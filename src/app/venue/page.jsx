import RSVP from "@/components/common/RSVP";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import Explore from "@/components/sections/venue/Explore";
import HeroSectionVenue from "@/components/sections/venue/HeroSectionVenue";
import HeroVenveSection from "@/components/sections/venue/HeroVenveSection";
import TravelInfo from "@/components/sections/venue/TravelInfo";
import VenueGallery from "@/components/sections/venue/VenueGallery";
import WeddingVenue from "@/components/sections/venue/WeddingVenue";

const venue = () => {
    return (
        <>
            <HeroVenveSection srcimg={`/imgs/RafflesUdaipur.webp`} />
            <WeddingVenue />
            <VenueGallery />
            <TravelInfo />
        </>
    )
}

export default venue
