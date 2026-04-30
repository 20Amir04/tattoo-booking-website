import { aboutUsData } from "../../data/aboutUsData";

function AboutUs() {
    return (
        <section className="bg-neutral-100 px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="space-y-4">
                    {aboutUsData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className=""
                            >
                                    <span className="text-3xl font-medium font-mono text-black">
                                        {item.title}
                                    </span>
                                    <div className="mt-5 mb-10">
                                        <span className="text-md text-neutral-600 font-mono">
                                            {item.description}
                                        </span>
                                    </div>
                                    
                            </div>
                          
                        )
                    })}
                </div>

            </div>

        </section>
    );
}
export default AboutUs;