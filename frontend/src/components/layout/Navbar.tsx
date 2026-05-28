import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {EnvelopeIcon, PhoneIcon, XMarkIcon, Bars3Icon} from "@heroicons/react/24/outline"

type NavbarProps = {
    onBookNowClick: () => void;
};

const NavLinks = [
    {name: "Tattoo", path: "/tattoo"},
    {name: "Gallery", path: "/gallery"},
    {name: "FAQ", path: "/faq"},
    {name: "Contact Us", path: "/contact"},
];

function Navbar({onBookNowClick}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-neutral-950/90 backdrop-blur">
            <div className="border-b border-white/10">
                <div className="mx-auto hidden max-w-7xl items-center justify-center gap-8 px-4 py-2 text-sm text-neutral-300 md:flex">
                    <div className="flex items-center gap-2">
                        <EnvelopeIcon className="h-4 w-4" />
                        <span>info@blackline.ca</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="h-4 w-4" />
                        <span>+1 250 333 3333</span>
                    </div>
                </div>

            </div>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="text-2xl font-bold tracking-[0.2em] uppercase hover:scale-105">
                    Blackline
                </Link>

                <nav className="hidden items-center gap-25 md:flex uppercase">
                    {NavLinks.map((link) => (
                        <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive}) => 
                        `font-medium transition ${
                            isActive ? "text-white" : "text-neutral-400 hover:text-white hover:scale-105"
                        }`
                    }
                    >
                        {link.name}
                    </NavLink>
                    ))}
                </nav>
                
                     <div className="hidden md:block">
                    <button
                        type="button"
                        onClick={onBookNowClick}
                        className="mt-2 rounded-full bg-white px-6 py-3 text-base font-mono font-semibold text-black transition hover:scale-105"
                    >
                        Book Now
                    </button>
                </div>
                

                <button
                    type="button"
                    onClick={toggleMenu}
                    className="md:hidden text-white"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <XMarkIcon className="h-7 w-7 text-white hover:scale-110" />
                        ) : (
                        <Bars3Icon className="h-7 w-7 text-white hover:scale-110" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-white/10 bg-neutral-950 md:hidden">
                    <div className="border-b border-white/10 px-4 py-4 text-sm text-neutral-300 space-y-2">
                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className="h-4 w-4" />
                            <span>info@blackline.ca</span>
                        </div>
                            <div className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4" />
                            <span>+1 250 333 3333</span>
                        </div>
                    </div>

                    <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8 uppercase">
                        {NavLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={closeMenu}
                                className={({isActive}) => 
                                `py-3 text-sm font-medium transition ${
                                    isActive ? "text-white" : "text-neutral-400 hover:text-white hover:scale-105"
                                }`
                            }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <button
                            type="button"
                            onClick={() => {
                                closeMenu();
                                onBookNowClick();
                            }}
                            className="mt-2 rounded-full bg-white px-6 py-3 text-base font-mono font-semibold text-black transition hover:scale-105"
                        >
                            Book Now
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;