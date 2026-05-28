import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BookingModal from "../components/common/BookingModal";

function MainLayout() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const openBookingModal = () => setIsBookingModalOpen(true);
    const closeBookingModal = () => setIsBookingModalOpen(false);

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
            <Navbar onBookNowClick={openBookingModal}/>
            
            <main className="flex-1">
                <Outlet context={{openBookingModal}}/>
            </main>

            <Footer />

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={closeBookingModal}
            />
        </div>
    );
}
export default MainLayout;