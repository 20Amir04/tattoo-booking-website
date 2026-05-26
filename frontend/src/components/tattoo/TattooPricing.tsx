import { tattooPricingData } from "../../data/tattooPageData";

function TattooPricing() {
    return (
        <section className="bg-neutral-100 px-4 py-20 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-black font-mono uppercase sm:text-5xl lg:text-6xl">
                    {tattooPricingData.title}
                </h2>

                <p className="mx-auto mt-8 max-w-6xl text-lg font-mono leading-9 text-neutral-600">
                    {tattooPricingData.intro}
                </p>

                <div className="my-12 border-t border-dotted border-neutral-400" />
            </div>

            <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[420px_1fr]">
                <div>
                    <img 
                        src={tattooPricingData.image}
                        alt={tattooPricingData.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="space-y-10">
                    {tattooPricingData.sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-3xl font-light font-mono uppercase sm:text-4xl">
                                {section.title}
                            </h3>

                            {section.text && (
                                <p className="mt-3 text-lg leading-9 font-mono text-neutral-600">
                                    {section.text}
                                </p>
                            )}

                            {section.bullets && (
                                <ul className="mt-5 space-y-3 text-lg font-mono leading-9 text-neutral-600">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default TattooPricing;