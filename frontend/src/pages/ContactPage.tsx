import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function ContactPage() {
    return (
        <section className=" bg-neutral-100">
            <ContactHero/>
            <div className="flex flex-col gap-10 items-center justify-center text-center py-10">
                <h1 className=" text-2xl text-neutral-600 font-mono md:text-3xl lg:text-4xl">
                    Questions or a Feedback?
                </h1>
                <p className="font-mono text-black">
                    Please let us know if you have any inquiries and feedback!
                </p>
            </div>
            <div className="border-b border-neutral-300"/>
            <ContactInfo/>
            <ContactForm/>
        </section>
    );
}

export default ContactPage;