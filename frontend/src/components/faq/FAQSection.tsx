import { useState } from "react";

type FaqQuestion = {
    id: number;
    question: string;
    answer: string;
};

type FAQCategorySectionProps = {
    title: string;
    description: string;
    image: string;
    questions: FaqQuestion[];
    reverse?: boolean;
};

function FAQCategorySection({
    title,
    description,
    image,
    questions,
    reverse = false,
}: FAQCategorySectionProps) {
    const [openId, setOpenId] = useState<number | null>(questions[0]?.id ?? null);

    const handleToggle = (id: number) => {
        setOpenId((prev) =>(prev === id ? null : id));
    };

    return (
        <section className="bg-neutral-100 px-4 py-10 text-black sm:px-6 lg:px-8">
            <div className={`mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 ${
                reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
            }`}
            >
                <div>
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-light font-mono uppercase tracking-wide sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-10 max-w-2xl text-base leading-8 text-neutral-600">
                        {description}
                    </p>

                    <div className="mt-8 border border-black/10 bg-white/40">
                        {questions.map((item, index) => {
                            const isOpen = openId === item.id;

                            return (
                                <div 
                                key={item.id}
                                className={index !== questions.length - 1 ? "border-b border-black/10" : ""}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(item.id)}
                                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="text-lg text-neutral-700">
                                            {item.question}
                                        </span>

                                        <span className="ml-4 text-3xl leading-none text-neutral-500 transition-transform duration-300">
                                            {isOpen ? "-" : "+"}
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-600 ease-in-out ${
                                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 pt-1 pb-6">
                                                <p className="text-base leading-8 text-neutral-600">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
export default FAQCategorySection;