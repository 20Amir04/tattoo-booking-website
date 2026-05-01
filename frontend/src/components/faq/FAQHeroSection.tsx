import { Link } from "react-router-dom";

function FAQHeroSection() {
    return (
        <section className="relative h-125 overflow-hidden">
           <img
                src="/public/assets/faq-hero.jpg"
                alt="FAQ hero"
                className="h-full w-full object-cover blur-xs"
           />
            
            <div className="absolute inset-0 bg-black/45"/>

            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                <div>
                    <h1 className="text-5xl font-light text-white font-mono sm:text-6xl">FAQ</h1>
                    <p className="mt-3 text-md text-neutral-200 font-mono">
                        <Link to="/" className="mr-2 hover:text-black hover:transition-colors hover:duration-400">
                        Home
                        </Link>
                        / FAQ
                    </p>
                </div>
            </div>
        </section>
    );
}
export default FAQHeroSection;