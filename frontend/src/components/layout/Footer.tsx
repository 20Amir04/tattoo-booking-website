import {Link} from "react-router-dom"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { workingHours } from "../../data/hoursData";

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-neutral-950">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 text-center sm:px-6 md:grid-cols-3 md:px-8 md:text-center">
                <div className="flex flex-col items-center md:items-center">
                    <h3 className="text-lg font-bold uppercase tracking-[0.2em]">
                        Blackline
                    </h3>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
                        1147 Quadra St, Victoria, BC V8W 2K5
                    </p>
                </div>
                <div className="flex flex-col items-center md:items-center">
                    <h4 className="mb-4 font-semibold uppercase tracking-[0.15em] text-white">Working Hours</h4>
                        <div className="space-y-3">
                            {workingHours.map((item) => (
                                <div
                                    key={item.day}
                                    className="flex flex-col items-center text-sm text-neutral-300 md:grid md:grid-cols-[120px_1fr] md:items-center md:gap-6"
                                >
                                    <span>{item.day}</span>
                                    <span>{item.hours}</span>
                                </div>
                            ))}
                        </div>
                </div>
                <div className="flex flex-col items-center md:items-center">
                    <h4 className="mb-4 font-semibold uppercase tracking-[0.15em] text-white">Contact</h4>
                    <div className="space-y-3 text-neutral-400">
                        <div className="flex items-center justify-center gap-2 md:justify-center">
                            <EnvelopeIcon className="h-5 w-5"/>
                            <p>info@blackline.ca</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:justify-center">
                            <PhoneIcon className="h-5 w-5"/>
                            <p>+1 250 333 3333</p>
                        </div>
                    </div>
                </div>
            </div>

             <div className="flex flex-col items-center mb-3 gap-4 text-neutral-400 uppercase md:flex-row md:gap-10 md:justify-center">
                    <Link to="/" className="hover:text-white transition hover:scale-105">Home</Link>
                    <Link to="/tattoo" className="hover:text-white transition hover:scale-105">Tattoo</Link>
                    <Link to="/gallery" className="hover:text-white transition hover:scale-105">Gallery</Link>
                    <Link to="/faq" className="hover:text-white transition hover:scale-105">FAQ</Link>
                    <Link to="/contact" className="hover:text-white transition hover:scale-105">Contact Us</Link> 
            </div>

            <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-neutral-500">
                © 2026 Blackline Studio. Portfolio project by Amir Arabi.
            </div>
        </footer>
    );
}

export default Footer;