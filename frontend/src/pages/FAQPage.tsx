import FAQHeroSection from "../components/faq/FAQHeroSection";
import { faqData } from "../data/faqData";
import FAQCategorySection from "../components/faq/FAQSection";


function FAQPage() {
    return (
        <>
        <FAQHeroSection/>

        {faqData.map((section, index) => (
            <FAQCategorySection
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image}
                questions={section.questions}
                reverse={index % 2 !== 0}
            />
        ))}
        </>
    );
}
export default FAQPage;