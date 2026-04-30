import HeroSection from "../components/home/HeroSection";
import FuteredStyles from "../components/home/FuteredStyles";
import GalleryPreview from "../components/home/GalleryPreview";
import TrustSection from "../components/home/TrustSection";
import AboutUs from "../components/home/AboutUs";
import ConsultationSection from "../components/home/ConsultationSection";

function HomePage() {
    return (
        <>
            <HeroSection />
            <FuteredStyles />
            <GalleryPreview />
            <TrustSection />
            <AboutUs />
            <ConsultationSection />
        </>
    );
}

export default HomePage;