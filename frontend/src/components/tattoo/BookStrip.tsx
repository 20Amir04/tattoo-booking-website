import {Link} from "react-router-dom";
import { tattooBookingStripData } from "../../data/tattooPageData";
import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "../../types/layout";

function BookingStrip() {
    const {openBookingModal} = useOutletContext<LayoutContextType>();

    return (
        <section className="bg-neutral-950 px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex map-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:gap-20">
                <button
                    type="button"
                    onClick={openBookingModal}
                    className="inline-flex items-center justify-center bg-neutral-800 px-10 py-4 text-2xl font-mono font-semibold transition hover:bg-neutral-700"
                >
                    Book Now
                </button>
                
                <p className="text-center text-2xl font-mono sm:text-3xl">
                    {tattooBookingStripData.phoneLabel}{" "}
                    <span className="font-medium font-mono">{tattooBookingStripData.phone}</span>
                </p>
            </div>
        </section>
    );
}
export default BookingStrip;