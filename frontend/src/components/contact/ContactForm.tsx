import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "../../types/contact";
import { submitContactRequest } from "../../services/contactService";

function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        attachment: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;

        setFormData((prev) => ({
            ...prev,
            attachment: file,
        }));
    };

    const resetForm = () => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
            attachment: null,
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSuccess("");
        setError("");

        try {
            await submitContactRequest(formData);

            setSuccess("Your message has been successfully sent.");
            resetForm();
        } catch(error) {
            console.error(error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-neutral-100 px-4 pb-20 pt-10 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="fullName"
                            className="mb-3 block text-2xl font-black font-mono"
                        >
                            Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full border-b border-black bg-transparent px-0 py-3 text-lg outline-none font-mono"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-3 block text-2xl font-black font-mono"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border-b border-black bg-transparent px-0 py-3 text-lg outline-none font-mono"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-3 block text-2xl font-black font-mono"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border-b border-black bg-transparent px-0 py-3 text-lg outline-none font-mono"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-3 block text-2xl font-black font-mono"
                        >
                            Subject
                        </label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full border-b border-black bg-transparent px-0 py-3 text-lg outline-none font-mono"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-3 block text-2xl font-black font-mono"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full resize-none border-b border-black bg-transparent px-0 py-3 text-lg outline-none font-mono"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <label
                                htmlFor="attachment"
                                className="inline-flex w-fit cursor-pointer font-mono items-center justify-center border border-black px-5 py-3 text-base transition hover:bg-black hover:text-white"
                            >
                                Choose Files
                            </label>

                            <input
                            id="attachment"
                            name="attachment"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            />

                            <p className="text-sm text-neutral-600 font-mono">
                                {formData.attachment ? formData.attachment.name : "No file chosen"}
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 self-start text-3xl font-black font-mono italic transition hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                            <span aria-hidden="true"> ›</span>
                        </button>
                    </div>

                    {success && (
                        <p className="text-sm font-mono font-medium text-green-700">
                            {success}
                        </p>
                    )}

                    {error && (
                        <p className="text-sm font-mono font-medium text-red-500">
                            {error}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
export default ContactForm;