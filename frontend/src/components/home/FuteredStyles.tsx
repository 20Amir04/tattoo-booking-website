import { stylesData } from "../../data/stylesData";

function FuteredStyles() {
    return(
        <section className="bg-neutral-100 px-4 py-20 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl font-light font-mono uppercase tracking-wide sm:text-5xl lg:text-6xl">
                        Tattoo
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {stylesData.map((style) => (
                        <article key={style.id} className="group">
                            <div className="overflow-hidden">
                                <img
                                    src={style.image}
                                    alt={style.title}
                                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="mt-6 text-2xl font-light font-mono uppercase tracking-wide">
                                {style.title}
                            </h3>
                            <p className="mt-4 text-base font-mono leading-8 text-neutral-700">
                                {style.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FuteredStyles;