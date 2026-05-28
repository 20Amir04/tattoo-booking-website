import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { BookingFormData } from "../../types/booking";
import { timeOptions, dayOptions } from "../../data/bookingModalData";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isCoverUp: "",
    instagram: "",
    description: "",
    preferredTime: [],
    preferredDays: [],
    comments: "",
    referencePhotos: [],
  });

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);

      const openTimer = setTimeout(() => {
        setIsVisible(true);
      }, 10);

      return () => clearTimeout(openTimer);
    }

    setIsVisible(false);

    const closeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 350);

    return () => clearTimeout(closeTimer);
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [shouldRender, onClose]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCoverUpChange = (value: "yes" | "no") => {
    setFormData((prev) => ({
      ...prev,
      isCoverUp: prev.isCoverUp === value ? "" : value,
    }));
  };

  const handleMultiChoice = (
    field: "preferredTime" | "preferredDays",
    value: string
  ) => {
    setFormData((prev) => {
      const currentValues = prev[field];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [field]: updatedValues,
      };
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    setFormData((prev) => ({
      ...prev,
      referencePhotos: files,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Booking form data:", formData);

    // потом подключим backend/API
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-6xl overflow-y-auto bg-neutral-100 p-6 text-black shadow-2xl transition-all duration-350 sm:p-8 lg:p-10 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close booking form"
          className="absolute right-4 top-4 text-neutral-500 transition hover:text-black"
        >
          <XMarkIcon className="h-9 w-9" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-2xl font-black">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="E.g. John"
                className="w-full border border-black bg-transparent px-4 py-3 text-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="E.g. Doe"
                className="w-full border border-black bg-transparent px-4 py-3 text-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E.g. john@smith.com"
                className="w-full border border-black bg-transparent px-4 py-3 text-lg outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="E.g. +1 (674) 389-2490"
                className="w-full border border-black bg-transparent px-4 py-3 text-lg outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-black/10 pt-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_1fr] md:items-start">
              <div>
                <p className="mb-3 text-2xl font-black">
                  Is This A Cover-Up? <span className="text-red-500">*</span>
                </p>

                <div className="flex gap-8">
                  {["yes", "no"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 text-xl"
                    >
                      <input
                        type="checkbox"
                        checked={formData.isCoverUp === option}
                        onChange={() =>
                          handleCoverUpChange(option as "yes" | "no")
                        }
                        className="h-6 w-6"
                      />
                      <span className="capitalize">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-lg leading-9 text-neutral-600">
                If there is a cover-up involved, please include a clear photo of
                the tattoo or scar and add helpful details in the description.
              </div>
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Instagram
              </label>
              <input
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                placeholder="@my_insta"
                className="w-full border border-black bg-transparent px-4 py-3 text-lg outline-none"
              />
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                placeholder="Any and all details I could need to know"
                className="w-full resize-none border border-black bg-transparent px-4 py-3 text-lg outline-none"
                required
              />
            </div>

            <div>
              <p className="mb-3 text-2xl font-black">
                Preferred Time Of The Day <span className="text-red-500">*</span>
              </p>

              <div className="flex flex-wrap gap-8">
                {timeOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-xl"
                  >
                    <input
                      type="checkbox"
                      checked={formData.preferredTime.includes(option)}
                      onChange={() => handleMultiChoice("preferredTime", option)}
                      className="h-6 w-6"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-2xl font-black">
                Preferred Days Of The Week <span className="text-red-500">*</span>
              </p>

              <div className="flex flex-wrap gap-8">
                {dayOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 text-xl"
                  >
                    <input
                      type="checkbox"
                      checked={formData.preferredDays.includes(option)}
                      onChange={() => handleMultiChoice("preferredDays", option)}
                      className="h-6 w-6"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-2xl font-black">
                Inquiries & Additional Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full resize-none border border-black bg-transparent px-4 py-3 text-lg outline-none"
              />
            </div>

            <div>
              <label className="mb-4 block text-2xl font-black">
                Reference Photos
              </label>

              <label
                htmlFor="referencePhotos"
                className="flex min-h-45 cursor-pointer flex-col items-center justify-center border border-dashed border-black px-6 py-10 text-center"
              >
                <span className="text-lg text-neutral-600">
                  Drag and Drop (or){" "}
                  <span className="font-semibold text-black underline">
                    Choose Files
                  </span>
                </span>

                {formData.referencePhotos.length > 0 && (
                  <span className="mt-4 text-sm text-neutral-600">
                    {formData.referencePhotos.map((file) => file.name).join(", ")}
                  </span>
                )}
              </label>

              <input
                id="referencePhotos"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <button
              type="submit"
              className="w-full border border-black px-6 py-4 text-3xl font-black transition hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;