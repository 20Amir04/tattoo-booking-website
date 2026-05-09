import { PhoneIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/outline";

function ContactInfo() {
    return(
        <section className="bg-neutral-100 py-10 px-4 text-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
           <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:text-center">
                    <div className="flex h-14 w-14 items-center justify-center bg-black text-white
                    hover:transition-color hover:bg-white hover:text-black hover:duration-300"
                    >
                        <PhoneIcon className="h-7 w-7"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium font-mono">Call Us</h3>
                        <p className="text-lg text-neutral-400 font-mono">+1 250 333 3333</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:text-center">
                    <div className="flex h-14 w-14 items-center justify-center bg-black text-white
                    hover:transition-color hover:bg-white hover:text-black hover:duration-300"
                    >
                        <MapPinIcon className="h-7 w-7"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium font-mono">Location</h3>
                        <p className="text-lg text-neutral-400 font-mono">1147 Quadra St, Victoria, BC V8W 2K5</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:text-center">
                    <div className="flex h-14 w-14 items-center justify-center bg-black text-white
                    hover:transition-color hover:bg-white hover:text-black hover:duration-300"
                    >
                        <EnvelopeIcon className="h-7 w-7 "/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium font-mono">Email</h3>
                        <p className="text-lg text-neutral-400 font-mono">info@blackline.ca</p>
                    </div>
                </div>
           </div>

        </div>
    </section>
    );
}
export default ContactInfo;