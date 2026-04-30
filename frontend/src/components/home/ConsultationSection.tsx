import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ConsultationFormData } from "../../types/consultation";
import { submitConsultationRequest } from "../../services/consultationService";

function ConsultationSection() {
    const [formData, setFormData] = useState<ConsultationFormData>({
        fullName: "",
        phone: "",
        email: "",
        idea: "",
        referenceFile: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
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
            referenceFile: file,
        }));
    };

    const resetForm = () => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            idea: "",
            referenceFile: null,
        });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSuccessMessage("");
        setError("");

        try {
            await submitConsultationRequest(formData);

            setSuccessMessage("Your consultation request has been sent successfully.");
            resetForm();
        } catch (error) {
            console.error(error);
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-neutral-100 px-4 py-20 text-black sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 text-center font-extrabold text-3xl font-mono uppercase sm:text-4xl">
                    Book a free consultation
                </h2>

                <div className="grid grid-cols-1 overflow-hidden bg-neutral-100 lg:grid-cols-2">
                    <div className="min-h-80 lg:min-h-full">
                        <img
                            src="/public/assets/consultationImg.jpeg"
                            alt="Tattoo Studio consultation"
                            className="h-full w-full object-cover border-3 border-black"
                        />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8 p-6 sm:p-8 lg:p-10"
                    >
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-3 block text-2xl font-black font-mono md:text-3xl lg:text-4xl"
                                >
                                    Name
                                </label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Ex: John Smith"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full border-b-2 border-black bg-transparent font-mono px-0 py-3 text-lg outline-none placeholder:text-neutral-400"
                                    required                           
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-2xl font-black font-mono md:text-3xl lg:text-4xl"
                                >
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Ex: +1 250 222 8888"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full border-b-2 border-black bg-transparent font-mono px-0 py-3 text-lg outline-none placeholder:text-neutral-400"
                                    required                           
                                />
                            </div>
                        </div>
                        <div>
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-2xl font-black font-mono md:text-3xl lg:text-4xl"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Ex: johnsmith@gmail.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full border-b-2 border-black bg-transparent font-mono px-0 py-3 text-lg outline-none placeholder:text-neutral-400"
                                    required                           
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="idea"
                                    className="mb-3 block text-2xl font-black font-mono md:text-3xl lg:text-4xl"
                                >
                                    What is your idea?
                                </label>
                                <input
                                    id="idea"
                                    name="idea"
                                    type="text"
                                    placeholder="Samurai on my chest"
                                    value={formData.idea}
                                    onChange={handleInputChange}
                                    className="w-full border-b-2 border-black bg-transparent font-mono px-0 py-3 text-lg outline-none placeholder:text-neutral-400"
                                    required                           
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="referenceFile"
                                    className="mb-3 block text-lg font-black font-mono"
                                >
                                    Upload a reference picture (optional)
                                </label>
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <input
                                        id="referenceFile"
                                        name="referenceFile"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm font-mono text-neutral-700 file:border file:border-black file:bg-white file:px-4 file:py-3 file:text-sm file:font-medium file:text-black hover:file:bg-neutral-900 hover:file:text-white"                                       
                                        /> 
                                </div>                                
                            </div>

                            {successMessage && (
                                <p className="text-sm font-medium font-mono text-green-600">
                                    {successMessage}
                                </p>
                            )}
                            {error && (
                                <p className="text-sm font-medium font-mono text-red-500">
                                    {error}
                                </p>
                            )}

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 text-3xl font-black font-mono italic transition hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Send"}
                                    <span aria-hidden="true">›</span>
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ConsultationSection;