import TattooHero from "../components/tattoo/TattooHero";
import TattooPricing from "../components/tattoo/TattooPricing";
import BookingStrip from "../components/tattoo/BookStrip";
import AboutTattoo from "../components/tattoo/AboutTattoo";

function TattooPage() {
    return (
        <section>
            <>
            <TattooHero />
            <TattooPricing />
            <BookingStrip />
            <AboutTattoo />
            </>
        </section>
    );
}

export default TattooPage;