import { reviewData } from "../../data/reviewsData";
import { useState } from "react";

function TrustSection() {
    const [currentReview, setCurrentReview] = useState(0);

    const goToPrevious = () => {
        setCurrentReview((prev) => 
        prev === 0 ? reviewData.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setCurrentReview((prev) => (prev +1) % reviewData.length);
    };
    
    return (
        <section className="bg-neutral-100 px-4 py-24 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-light font-mono uppercase tracking-wide sm:textl-5xl lg:text-6xl">
                    Our Reviews
                </h2>

                <div className="relative mt-16 flex items-center justify-center">
                    <button
                        type="button"
                        onClick={goToPrevious}
                        aria-label="Previous review"
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl text-black transition hover:opacity-60"
                    >
                        &#8249;
                    </button>

                    <div className="mx-auto w-full max-w-5xl px-12 overflow-hidden font-mono">
                        <div className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentReview * 100}%)`}}
                        >
                            {reviewData.map((review) => (
                                <div
                                    key={review.id}
                                    className="w-full shrink-0 px-12"
                                >
                                    <p className="text-xl leading-8 text-neutral-700 sm:text-2xl ">
                                        {review.text}
                                    </p>
                                    <p className="mt-8 text-lg text-neutral-600">
                                        ~ {review.author}
                                    </p>
                                </div>
                            ))}
                        </div> 
                    </div>

                    <button
                            type="button"
                            onClick={goToNext}
                            aria-label="Next review"
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl text-black transition hover:opacity-60"
                        >
                            &#8250;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrustSection;