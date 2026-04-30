import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const slides = [
    {
        image: "/public/assets/heros1.jpg",
        title: "Ink That Sharpens Your Style",
    },
    {
        image: "/public/assets/heros2.jpg",
        title: "Victoria’s Premium Tattoo Experience",
    },
];

function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-svh min-h-175 w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55"/>
                </div>
            ))}

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p
                    key={`subtitle-top-${currentSlide}`}
                    className="mb-4 text-2xl font-bold font-mono uppercase tracking-[0.25em] text-neutral-300 animate-[fadeInUp_0.8s_ease-out]"
                    >
                        Blackline Studio
                    </p>

                    <h1
                        key={`title-${currentSlide}`}
                        className="max-w-3xl text-3xl font-mono uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-8xl animate-[fadeInUp_0.9s_ease-out]"
                    >
                        {slides[currentSlide].title}
                    </h1>

                    <div
                        key={`buttons-${currentSlide}`}
                        className="mt-8 flex flex-col gap-4 sm:flex-row animate-[fadeInUp_1.1s_ease-out]"
                    >
                        <Link
                            to="/gallery"
                            className="inline-flex w-fit items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
                        >
                            View Gallery
                        </Link>
                    </div> 
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

