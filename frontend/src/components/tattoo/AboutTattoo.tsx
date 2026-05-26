import { tattooAboutData } from "../../data/tattooPageData";

function AboutTattoo() {
    return (
        <section className="bg-neutral-100 px-4 py-20 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl space-y-10">
                {tattooAboutData.map((section) => (
                    <div key={section.id}>
                        <h2 className="text-4xl font-light font-mono uppercase tracking-wide sm:text-5xl">
                            {section.title}
                        </h2>

                        {section.paragraphs.map((paragraph) => (
                            <p
                                key={paragraph}
                                className="mt-6 text-lg font-mono leading-9 text-neutral-600"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {section.bullets && (
                            <ul className=" text-lg font-mono leading-9 text-neutral-600">
                                {section.bullets.map((bullet) => (
                                    <li key={bullet}>{bullet}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
export default AboutTattoo;